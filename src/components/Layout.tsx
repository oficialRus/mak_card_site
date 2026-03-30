import { Link, Outlet } from 'react-router-dom';
import { ONLINE_APP_URL } from '../constants/site';

export default function Layout() {
  return (
    <div className="mak-page min-h-screen">
      <header className="mak-header">
        <div className="mak-container">
          <div className="mak-nav">
            <Link className="mak-logo" to="/">
              <img
                src="/garmonia-logo.png"
                alt="Garmonia-MAK"
                className="mak-logo-img"
                draggable={false}
              />
            </Link>
            <nav className="mak-nav-links">
              <a href="/#decks">Наборы</a>
              <Link to="/techniques">Техники</Link>
              <a href="/#ai-psychologist">AI психолог</a>
              <a href="/#support">Контакты поддержка</a>
              <a href="/#author">Об Авторе</a>
            </nav>
            <button
              type="button"
              className="mak-primary-btn"
              onClick={() => window.open(ONLINE_APP_URL, '_blank', 'noopener,noreferrer')}
            >
              Попробовать онлайн
            </button>
          </div>
        </div>
      </header>

      <Outlet />

      <footer id="support" className="mak-footer">
        <div className="mak-container">
          <div className="mak-footer-top">
            <h3>Garmonia-MAK</h3>
            <p>Контакты и поддержка: hello@garmonia-mak.ru</p>
          </div>

          <div className="mak-footer-links">
            <a href="/#decks">Наборы</a>
            <Link to="/techniques">Техники</Link>
            <a href="/#ai-psychologist">AI психолог</a>
            <a href="/#support">Контакты поддержка</a>
            <a href="/#author">Об Авторе</a>
            <a href={ONLINE_APP_URL} target="_blank" rel="noreferrer">
              Приложение
            </a>
          </div>

          <div className="mak-footer-policies">
            <a href="#">Политика обработки персональных данных</a>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Политика использования файлов Cookie</a>
          </div>

          <div className="mak-footer-telegram">Подписывайтесь на наш канал в Telegram</div>

          <p className="mak-footer-copy">© 2026 Garmonia-MAK. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
