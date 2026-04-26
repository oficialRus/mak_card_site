import { useLayoutEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ONLINE_APP_URL, SITE_LOGO_URL, SUPPORT_MAX_URL, SUPPORT_TELEGRAM_URL } from '../constants/site';
import { ContactSupportModal } from './ContactSupportModal';

export default function Layout() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="mak-page min-h-screen">
      <header className="mak-header">
        <div className="mak-container">
          <div className="mak-nav">
            <Link className="mak-logo" to="/">
              <img
                src="/garmonia-logo-photoroom.png"
                alt="Garmonia-MAK"
                className="mak-logo-img"
                draggable={false}
              />
            </Link>
            <nav className={`mak-nav-links ${isMobileMenuOpen ? 'is-open' : ''}`}>
              <a href="/#decks" onClick={closeMobileMenu}>
                Наборы
              </a>
              <Link to="/techniques" onClick={closeMobileMenu}>
                Техники
              </Link>
              <a href="/#ai-psych-nextgen" onClick={closeMobileMenu}>
                AI психолог
              </a>
            </nav>
            <div className="mak-nav-right">
              <Link to="/support" className="mak-nav-support-link">
                Контакты и поддержка
              </Link>
              <button
                type="button"
                className="mak-primary-btn"
                onClick={() => window.open(ONLINE_APP_URL, '_blank', 'noopener,noreferrer')}
              >
                Попробовать онлайн
              </button>
              <button
                type="button"
                className={`mak-burger-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
                aria-label="Открыть меню"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <footer id="support" className="mak-footer">
        <div className="mak-footer-artboard">
          <div className="mak-container mak-footer-v2">
            <div className="mak-footer-v2-main">
              <div className="mak-footer-v2-brand">
                <Link className="mak-footer-v2-brand-row" to="/">
                  <img
                    src={SITE_LOGO_URL}
                    alt=""
                    className="mak-footer-v2-logo"
                    draggable={false}
                  />
                  <span className="mak-footer-v2-brand-name">ГАРМОНИЯ-МАК</span>
                </Link>
                <p className="mak-footer-v2-tagline">Оживающие метафорические карты и AR</p>
                <a className="mak-footer-v2-mail" href="mailto:garmonia_mak@mail.ru">
                  garmonia_mak@mail.ru
                </a>
              </div>

              <nav className="mak-footer-v2-nav" aria-label="Навигация в подвале">
                <a className="mak-footer-v2-nav-link" href="/#decks">
                  Наборы
                </a>
                <Link className="mak-footer-v2-nav-link" to="/techniques">
                  Техники
                </Link>
                <a className="mak-footer-v2-nav-link" href={ONLINE_APP_URL} target="_blank" rel="noreferrer">
                  Приложение
                </a>
                <Link className="mak-footer-v2-nav-link" to="/support">
                  Контакты и поддержка
                </Link>
              </nav>

              <div className="mak-footer-v2-social">
                <a
                  className="mak-footer-v2-telegram"
                  href={SUPPORT_MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mak-footer-v2-telegram-icon" aria-hidden>
                    <img src="/max-messenger-icon.png" alt="" width={28} height={28} draggable={false} />
                  </span>
                  <span className="mak-footer-v2-telegram-text">Подписывайтесь на наш Max</span>
                </a>
              </div>
            </div>

            <div className="mak-footer-v2-legal" aria-label="Документы и правовая информация">
              <Link className="mak-footer-v2-legal-link" to="/privacy-policy">
                Политика обработки персональных данных
              </Link>
              <Link className="mak-footer-v2-legal-link" to="/user-agreement">
                Пользовательское соглашение
              </Link>
              <Link className="mak-footer-v2-legal-link" to="/cookie-policy">
                Политика использования файлов Cookie
              </Link>
              <span className="mak-footer-v2-legal-meta">
                <span className="mak-footer-v2-copy">© 2026 Garmonia-MAK</span>
              </span>
            </div>

            <button
              type="button"
              className="mak-footer-v2-top"
              aria-label="Наверх"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 15l6-6 6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
