#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

log() {
  # shellcheck disable=SC2059
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

usage() {
  cat <<'EOF'
Использование:
  ./deploy-and-reload.sh [--skip-install] [--skip-nginx] [--watch]

Опции:
  --skip-install  Не запускать npm ci (просто build и reload).
  --skip-nginx     Не делать reload nginx (только build).
  --watch          Следить за изменениями (требуется inotifywait из inotify-tools).

Пример:
  ./deploy-and-reload.sh
EOF
}

SKIP_INSTALL=0
SKIP_NGINX=0
WATCH=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-install) SKIP_INSTALL=1 ;;
    --skip-nginx) SKIP_NGINX=1 ;;
    --watch) WATCH=1 ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Неизвестный аргумент: $1"; usage; exit 2 ;;
  esac
  shift
done

reload_nginx() {
  local SUDO=""
  if [[ "${EUID:-$(id -u)}" -ne 0 ]] && command -v sudo >/dev/null 2>&1; then
    SUDO="sudo"
  fi

  log "Проверка nginx-конфигурации (nginx -t)"
  $SUDO nginx -t >/dev/null

  log "Перезагрузка nginx (systemctl reload nginx)"
  # Если в системе нет systemd, можно будет заменить на: sudo service nginx reload
  $SUDO systemctl reload nginx
}

build_once() {
  log "Сборка проекта (npm run build)"
  if [[ "$SKIP_INSTALL" -eq 0 ]]; then
    if [[ -f package-lock.json ]]; then
      log "Установка зависимостей: npm ci"
      npm ci --no-audit --no-fund
    else
      log "package-lock.json не найден: используем npm install"
      npm install --no-audit --no-fund
    fi
  else
    log "Пропуск установки зависимостей (--skip-install)"
  fi

  npm run build

  if [[ ! -d dist ]]; then
    log "ОШИБКА: папка dist не создана"
    exit 1
  fi

  log "Сборка завершена, dist обновлён"
  if [[ "$SKIP_NGINX" -eq 0 ]]; then
    reload_nginx
  else
    log "Пропуск reload nginx (--skip-nginx)"
  fi
}

if [[ "$WATCH" -eq 0 ]]; then
  build_once
  exit 0
fi

if ! command -v inotifywait >/dev/null 2>&1; then
  echo "Для режима --watch нужен inotifywait (пакет inotify-tools)." >&2
  exit 2
fi

log "Запуск в режиме --watch. Жду изменений..."
inotifywait -m -r \
  -e modify,create,delete \
  src public index.html vite.config.ts package.json package-lock.json tailwind.config.js postcss.config.js --format '%w%f' \
  | while read -r _changed; do
      log "Изменение обнаружено: $_changed"
      build_once
    done

