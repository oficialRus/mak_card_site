import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Diamond } from 'lucide-react';

/** Замените на ссылку вашего Telegram-бота или канала */
const TELEGRAM_AI_URL = 'https://t.me/';

const TelegramMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const NumerologyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={className}
    style={{
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '10px',
      background: 'linear-gradient(145deg, rgba(224, 242, 254, 0.95) 0%, rgba(191, 219, 254, 0.85) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Ysabeau Infant', system-ui, sans-serif",
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#1e40af',
      lineHeight: 1.15,
      textAlign: 'center',
    }}
    aria-hidden
  >
    12
    <br />
    34
  </div>
);

const features = [
  {
    key: 'coach',
    icon: <Brain className="h-9 w-9 text-rose-500" strokeWidth={1.25} aria-hidden />,
    title: 'AI психолог-коуч',
    text: 'Интеллектуальный помощник, обученный на методиках глубинной психологии. Проводит сессии с картами, задаёт точные вопросы, помогает найти ответы внутри себя.',
  },
  {
    key: 'numerology',
    icon: <NumerologyIcon />,
    title: 'Нумерологический компас',
    text: 'Ассоциативный числовой компас раскрывает скрытые паттерны через числа даты рождения, помогает понять жизненные циклы и точки выбора.',
  },
  {
    key: 'cards',
    icon: <Diamond className="h-9 w-9 text-sky-600" strokeWidth={1.25} aria-hidden />,
    title: 'Работа с образами карт',
    text: 'Загрузите изображение вытянутой карты — AI исследует её символику, цвет и архетип, предлагая глубокую интерпретацию специально для вас.',
  },
];

const AiPsychologistNextGenSection: React.FC = () => {
  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="ai-psych-nextgen" className="mak-ai-psych-section mak-section">
      <div className="mak-container">
        <motion.header
          className="mak-ai-psych-header text-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mak-ai-psych-title font-serif-display">AI-психолог</h2>
          <p className="mak-ai-psych-script">нового поколения</p>
          <p className="mak-ai-psych-lead">
            Технологии и психология объединились, чтобы создать инструмент глубинной работы, доступный в любое время
          </p>
        </motion.header>

        <div className="mak-ai-psych-grid">
          {features.map((item, idx) => (
            <motion.article
              key={item.key}
              className="mak-ai-psych-card mak-hover-glow"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 + idx * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className="mak-ai-psych-card-icon">{item.icon}</div>
              <h3 className="mak-ai-psych-card-title">{item.title}</h3>
              <p className="mak-ai-psych-card-text">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mak-ai-psych-cta"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <a
            href={TELEGRAM_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mak-ai-psych-telegram-btn"
          >
            <TelegramMark className="h-5 w-5 shrink-0" />
            Перейти в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AiPsychologistNextGenSection;
