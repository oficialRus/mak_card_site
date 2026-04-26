import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ONLINE_APP_URL, SITE_LOGO_URL, SUPPORT_MAX_URL, SUPPORT_TELEGRAM_URL } from '../constants/site';

const SUPPORT_EMAIL = 'garmonia_mak@mail.ru';

type ContactSupportModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactSupportModal({ open, onClose }: ContactSupportModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="mak-contact-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="mak-contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mak-contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="mak-contact-modal-close"
          aria-label="Закрыть"
          onClick={onClose}
        >
          <span aria-hidden>×</span>
        </button>

        <div className="mak-contact-modal-deco" aria-hidden />

        <div className="mak-contact-modal-brand">
          <img
            src={SITE_LOGO_URL}
            alt=""
            className="mak-contact-modal-logo"
            draggable={false}
          />
          <span className="mak-contact-modal-brand-name">Гармония Маг</span>
        </div>

        <h2 id="mak-contact-modal-title" className="mak-contact-modal-title">
          Контактная информация и поддержка
        </h2>
        <p className="mak-contact-modal-text">
          Мы с радостью ответим на ваши вопросы по доставке, возврату, общей информации и о том, как
          работать с картами.
        </p>

        <div className="mak-contact-modal-actions">
          <a
            className="mak-contact-modal-primary"
            href={ONLINE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Задать вопрос на сайте
          </a>
          <div className="mak-contact-modal-chips">
            <a
              className="mak-contact-modal-chip mak-contact-modal-chip--max"
              href={SUPPORT_MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/max-messenger-icon.png" alt="" width={22} height={22} draggable={false} />
              Max
            </a>
            <a
              className="mak-contact-modal-chip mak-contact-modal-chip--telegram"
              href={SUPPORT_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/telegram-icon.png" alt="" width={22} height={22} draggable={false} />
              Telegram
            </a>
            <a className="mak-contact-modal-chip mak-contact-modal-chip--mail" href={`mailto:${SUPPORT_EMAIL}`}>
              <span className="mak-contact-modal-mail-ico" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16v12H4V6zm0 0l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
