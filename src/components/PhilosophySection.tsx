import React from 'react';
import { motion } from 'framer-motion';

const philosophyItems = [
  {
    title: 'Что такое метафорические карты',
    content: 'Метафорические ассоциативные карты — это инструмент проективной психологии. Каждое изображение пробуждает уникальные ассоциации, открывая доступ к бессознательному без слов.',
    side: 'golden',
  },
  {
    title: 'Как работает ассоциативное мышление',
    content: 'Образы обходят рациональные защиты ума. Когда вы смотрите на карту, подсознание проецирует свой опыт, страхи, желания — и это становится материалом для работы.',
    side: 'golden',
  },
  {
    title: 'Почему важны цвет и архетип',
    content: 'Цвет и символ действуют напрямую на лимбическую систему — центр эмоций. Архетипические образы активируют универсальные паттерны психики, описанные Юнгом.',
    side: 'cosmic',
  },
  {
    title: 'Глубина трансформации',
    content: 'Работа с метафорой позволяет прикоснуться к тому, что сложно выразить словами. Это открывает путь к настоящим изменениям — не поверхностным, а глубинным.',
    side: 'cosmic',
  },
];

const PhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-0 overflow-hidden"
      style={{ background: '#050818' }}
    >
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Golden Side */}
        <div
          className="relative flex-1 py-24 px-8 md:px-16 flex flex-col justify-center"
          style={{
            background: 'linear-gradient(135deg, #2d1500 0%, #1a0c00 30%, #0d0a00 100%)',
          }}
        >
          {/* Golden warm glow */}
          <div
            className="absolute top-0 right-0 w-full h-full opacity-30"
            style={{
              background: 'radial-gradient(ellipse at 60% 40%, rgba(245,200,66,0.25) 0%, transparent 70%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(245,200,66,0.5)' }}>
              Философия
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-tight" style={{ color: '#f0e8d8' }}>
              Язык
              <br />
              <em className="text-gold-gradient">образов</em>
            </h2>
            <div className="section-divider mt-6" style={{ margin: '24px 0', marginLeft: 0, background: 'linear-gradient(90deg, #f5c842, transparent)' }} />
          </motion.div>

          <div className="relative z-10 space-y-8">
            {philosophyItems.filter(i => i.side === 'golden').map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <h3 className="font-serif-display text-xl font-medium mb-2" style={{ color: '#f5c842' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,224,208,0.7)' }}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative ornament */}
          <div
            className="absolute bottom-8 left-8 text-5xl opacity-10 font-serif-display"
            style={{ color: '#f5c842' }}
          >
            ✦
          </div>
        </div>

        {/* Cosmic Side */}
        <div
          className="relative flex-1 py-24 px-8 md:px-16 flex flex-col justify-center"
          style={{
            background: 'linear-gradient(135deg, #050818 0%, #080c2a 40%, #1a0a3a 100%)',
          }}
        >
          {/* Cosmic violet glow */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-25"
            style={{
              background: 'radial-gradient(ellipse at 40% 50%, rgba(60,30,150,0.4) 0%, transparent 70%)',
            }}
          />

          {/* Subtle stars */}
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 1.5 + 0.5,
                height: Math.random() * 1.5 + 0.5,
              }}
              animate={{ opacity: [0.1, 0.6, 0.1] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 4 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(180,140,255,0.5)' }}>
              Психология
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-tight" style={{ color: '#f0e8d8' }}>
              Глубина
              <br />
              <em style={{ color: 'rgba(180,140,255,0.9)' }}>бессознательного</em>
            </h2>
            <div className="section-divider mt-6" style={{ margin: '24px 0', marginLeft: 0, background: 'linear-gradient(90deg, rgba(180,140,255,0.6), transparent)' }} />
          </motion.div>

          <div className="relative z-10 space-y-8">
            {philosophyItems.filter(i => i.side === 'cosmic').map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <h3 className="font-serif-display text-xl font-medium mb-2" style={{ color: 'rgba(180,140,255,0.9)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,224,208,0.65)' }}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative star */}
          <div
            className="absolute bottom-8 right-8 text-5xl opacity-10"
            style={{ color: 'rgba(180,140,255,0.8)' }}
          >
            ✧
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
