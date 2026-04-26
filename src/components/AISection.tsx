import React from 'react';
import { motion } from 'framer-motion';

const aiFeatures = [
  {
    icon: '🧠',
    title: 'AI психолог-коуч',
    description: 'Интеллектуальный помощник, обученный на методиках глубинной психологии. Проводит сессии с картами, задаёт точные вопросы, помогает найти ответы внутри себя.',
  },
  {
    icon: '🔢',
    title: 'Нумерологический компас',
    description: 'Ассоциативный числовой компас раскрывает скрытые паттерны через числа даты рождения, помогает понять жизненные циклы и точки выбора.',
  },
  {
    icon: '🃏',
    title: 'Работа с образами карт',
    description: 'Загрузите изображение вытянутой карты — AI исследует её символику, цвет и архетип, предлагая глубокую интерпретацию специально для вас.',
  },
];

const AISection: React.FC = () => {
  return (
    <section
      id="ai-section"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050818 0%, #080c2a 50%, #0a0020 100%)' }}
    >
      {/* Animated background gradient orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(60,30,150,0.8) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(245,200,66,0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Star particles */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 1.5 + 0.5,
            height: Math.random() * 1.5 + 0.5,
          }}
          animate={{ opacity: [0.05, 0.5, 0.05] }}
          transition={{ duration: Math.random() * 4 + 2, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(180,140,255,0.6)' }}>
            Цифровая платформа
          </span>
          <h2 className="font-serif-display text-4xl md:text-6xl font-light mb-4" style={{ color: '#f0e8d8' }}>
            AI-психолог
            <br />
            <em className="text-gold-gradient">нового поколения</em>
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-sm leading-relaxed max-w-lg mx-auto" style={{ color: 'rgba(232,224,208,0.6)' }}>
            Технологии и психология объединились, чтобы создать инструмент глубинной работы, доступный в любое время
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {aiFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="glass-card rounded-lg p-8 text-center group hover:border-opacity-40 transition-all duration-300"
              style={{
                background: 'rgba(8,12,42,0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(180,140,255,0.15)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{
                borderColor: 'rgba(180,140,255,0.35)',
                boxShadow: '0 0 30px rgba(60,30,150,0.2)',
              }}
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-serif-display text-xl font-medium mb-3" style={{ color: '#f0e8d8' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,224,208,0.6)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-sm inline-flex items-center gap-3 px-10 py-4"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            Перейти в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
