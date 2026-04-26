import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Анна К.',
    role: 'Психолог, коуч',
    text: 'Эти карты стали незаменимым инструментом в моей практике. Клиенты открываются значительно быстрее — образы обходят сопротивление и выводят к настоящим переживаниям.',
    stars: 5,
    avatar: '✦',
  },
  {
    name: 'Мария Л.',
    role: 'Участница группы',
    text: 'Работала с картами на групповом интенсиве. Это был один из самых глубоких опытов самопознания в моей жизни. Образы буквально говорят то, что сложно выразить словами.',
    stars: 5,
    avatar: '◎',
  },
  {
    name: 'Екатерина В.',
    role: 'Арт-терапевт',
    text: 'Качество полиграфии и продуманность методики восхищают. Чувствуется авторский подход и понимание психологии. Рекомендую коллегам без сомнений.',
    stars: 5,
    avatar: '❋',
  },
  {
    name: 'Ольга М.',
    role: 'Самостоятельная работа',
    text: 'Купила для себя и не ожидала, что это будет настолько мощно. Каждое утро вытягиваю карту и провожу мини-сессию с AI. Это изменило мой день.',
    stars: 5,
    avatar: '◈',
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050818 0%, #080c2a 50%, #050818 100%)' }}
    >
      {/* Subtle star field */}
      {Array.from({ length: 40 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 1.5 + 0.3,
            height: Math.random() * 1.5 + 0.3,
            opacity: Math.random() * 0.15 + 0.05,
          }}
          animate={{ opacity: [Math.random() * 0.1, Math.random() * 0.3 + 0.1, Math.random() * 0.1] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 5 }}
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
          <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(245,200,66,0.5)' }}>
            Отзывы
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-4" style={{ color: '#f0e8d8' }}>
            Истории трансформации
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="relative p-8 rounded-lg"
              style={{
                background: 'rgba(8,12,42,0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(245,200,66,0.15)',
                boxShadow: '0 4px 30px rgba(5,8,24,0.5)',
              }}
            >
              {/* Golden quote mark */}
              <div
                className="absolute top-6 right-6 font-serif-display text-5xl leading-none opacity-20"
                style={{ color: '#f5c842' }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }, (_, i) => (
                  <span key={i} style={{ color: '#f5c842', fontSize: '12px' }}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'rgba(232,224,208,0.75)' }}>
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-serif-display text-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,200,66,0.2), rgba(180,140,255,0.1))',
                    border: '1px solid rgba(245,200,66,0.25)',
                    color: '#f5c842',
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#f0e8d8' }}>
                    {review.name}
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(245,200,66,0.5)' }}>
                    {review.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
