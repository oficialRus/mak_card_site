# Запуск сайта на домене garmonia-mak.ru

## 1. Собрать проект

```bash
npm install
npm run build
```

Готовые файлы появятся в папке **`dist/`** — их нужно отдать по домену.

---

## 2. Настроить DNS домена

В панели регистратора домена (где куплен garmonia-mak.ru) добавьте:

| Тип  | Имя  | Значение        | TTL  |
|------|------|-----------------|------|
| **A**   | `@`  | IP вашего сервера | 300  |
| **A**   | `www`| IP вашего сервера | 300  |

Если хостинг даёт CNAME (например, Vercel/Netlify) — используйте их инструкции вместо A-записей.

---

## 3. Разместить сайт (один из вариантов)

### Вариант A: Свой сервер (VPS) с Nginx

1. Скопируйте содержимое папки `dist/` на сервер (например, в `/var/www/garmonia-mak`).
2. Создайте конфиг Nginx (например `/etc/nginx/sites-available/garmonia-mak.ru`):

```nginx
server {
    listen 80;
    server_name garmonia-mak.ru www.garmonia-mak.ru;
    root /var/www/garmonia-mak;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. Включите сайт и перезапустите Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/garmonia-mak.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

4. Включите HTTPS (Let's Encrypt):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d garmonia-mak.ru -d www.garmonia-mak.ru
```

### Вариант B: Бесплатный хостинг (Vercel, Netlify)

- **Vercel:** подключите репозиторий, укажите Build Command: `npm run build`, Output Directory: `dist`, добавьте домен garmonia-mak.ru в настройках.
- **Netlify:** то же самое, в настройках домена укажите garmonia-mak.ru и настройте DNS по подсказкам панели.

### Вариант C: Обычный хостинг (cPanel, Reg.ru и т.п.)

1. Соберите проект: `npm run build`.
2. Загрузите **всё содержимое** папки `dist/` в корень сайта (обычно `public_html` или папка домена).
3. Убедитесь, что при обращении к любому пути отдаётся `index.html` (для SPA). В cPanel это часто настраивается через «Диспетчер файлов» или правкой `.htaccess`.

---

## 4. Проверка

- Откройте в браузере: https://garmonia-mak.ru
- Проверьте, что работает https://www.garmonia-mak.ru (если настроили www).

---

## Краткий чек-лист

- [ ] Домен garmonia-mak.ru указывает на ваш хостинг (A-записи или CNAME)
- [ ] Собран проект: `npm run build`
- [ ] Содержимое `dist/` загружено на сервер/хостинг
- [ ] Для SPA настроена отдача `index.html` на все маршруты
- [ ] Включён HTTPS (сертификат)

После этого сайт будет открываться по адресу **garmonia-mak.ru**.

---

## Обновление сайта после изменений

Когда вы вносите правки и проверяете их на **http://localhost:5173/** (или в dev-режиме), чтобы они появились на **https://garmonia-mak.ru/**:

1. **Соберите проект:**
   ```bash
   npm run build
   ```
   (Нужен Node.js 20.19+ или 22.12+, иначе Vite 7 не запустится.)

2. **Если сайт на этом же сервере** (Nginx с `root /opt/mak_card_site/dist`):
   - Ничего больше не нужно — Nginx отдаёт файлы из `dist/`, после сборки изменения уже на сайте.

3. **Если сайт на другом сервере:**
   - Загрузите содержимое папки `dist/` на сервер (например, через `scp`, `rsync` или панель хостинга) в каталог, из которого отдаётся сайт.
