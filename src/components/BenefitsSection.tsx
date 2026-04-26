import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '✦',
    title: 'Авторская методика',
    description: 'Разработана на основе юнгианской психологии, гештальта и современных нейронаучных исследований.',
  },
  {
    icon: '◈',
    title: 'Подходит для психологов',
    description: 'Инструмент используется профессиональными психологами, коучами и терапевтами в индивидуальных и групповых сессиях.',
  },
  {
    icon: '❋',
    title: 'Самостоятельная работа',
    description: 'Авторское руководство с пошаговыми техниками позволяет работать без специальной подготовки.',
  },
  {
    icon: '◉',
    title: 'Онлайн + офлайн формат',
    description: 'Физическая колода для очной работы и цифровая платформа с AI для онлайн-сессий в любом месте.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080c2a 0%, #050818 100%)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.3), transparent)' }}
      />

      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(245,200,66,0.8) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(245,200,66,0.5)' }}>
            Преимущества
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-4" style={{ color: '#f0e8d8' }}>
            Почему выбирают нас
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="text-center p-8 rounded-lg group"
              style={{
                background: 'rgba(8,12,42,0.4)',
                border: '1px solid rgba(245,200,66,0.1)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{
                borderColor: 'rgba(245,200,66,0.25)',
                boxShadow: '0 0 30px rgba(245,200,66,0.06)',
              }}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-5 font-serif-display"
                style={{ color: 'rgba(245,200,66,0.7)' }}
              >
                {benefit.icon}
              </div>
              {/* Gold divider line */}
              <div
                className="mx-auto mb-5"
                style={{
                  width: '30px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.5), transparent)',
                }}
              />
              <h3 className="font-serif-display text-lg font-medium mb-3" style={{ color: '#f0e8d8' }}>
                {benefit.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,224,208,0.6)' }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.3), transparent)' }}
      />
    </section>
  );
};

export default BenefitsSection;
