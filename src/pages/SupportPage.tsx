import { FormEvent, useRef, useState } from 'react';
import { ONLINE_APP_URL, SUPPORT_MAX_URL, SUPPORT_TELEGRAM_URL } from '../constants/site';

const SUPPORT_EMAIL = 'garmonia_mak@mail.ru';

export default function SupportPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const chatRef = useRef<HTMLTextAreaElement | null>(null);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setTimeout(() => {
      chatRef.current?.focus();
    }, 0);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;

    const subject = encodeURIComponent('Вопрос с сайта ГАРМОНИЯ-МАК');
    const body = encodeURIComponent(message.trim());
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="mak-support-main">
      <section className="mak-support-hero mak-section">
        <div className="mak-container">
          <div className="mak-support-inner">
            <header className="mak-support-header">
              <h1 className="mak-support-title">Контактная информация и поддержка</h1>
              <p className="mak-support-text">
                Вы можете связаться с нами по вопросам доставки, возврата, обмена, а также за общей информацией
                о том, как работать с картами. Мы всегда рядом и с радостью поможем.
              </p>
            </header>

            <div className="mak-support-actions">
              <button
                type="button"
                className="mak-contact-modal-primary mak-support-primary"
                onClick={handleOpenChat}
              >
                Задать вопрос в чате
              </button>

              <div className="mak-contact-modal-chips mak-support-chips">
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
                <a
                  className="mak-contact-modal-chip mak-contact-modal-chip--mail"
                  href={`mailto:${SUPPORT_EMAIL}`}
                >
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

              {isChatOpen && (
                <div className="mak-support-chat">
                  <p className="mak-support-chat-title">Напишите ваш вопрос</p>
                  <form className="mak-support-chat-form" onSubmit={handleSubmit}>
                    <textarea
                      ref={chatRef}
                      className="mak-support-chat-input"
                      placeholder="Опишите ситуацию или задайте вопрос. Мы ответим на почту, указанную в вашем письме."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                    <div className="mak-support-chat-actions">
                      <button type="submit" className="mak-support-chat-send">
                        Отправить
                      </button>
                      <button
                        type="button"
                        className="mak-support-chat-cancel"
                        onClick={() => setIsChatOpen(false)}
                      >
                        Закрыть чат
                      </button>
                    </div>
                    <p className="mak-support-chat-hint">
                      При нажатии «Отправить» откроется письмо на {SUPPORT_EMAIL}, в котором ваше сообщение уже будет
                      заполнено.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


