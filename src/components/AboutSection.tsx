import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080c2a 0%, #0d1340 50%, #080c2a 100%)' }}
    >
      {/* Warm golden overlay on left */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(245,200,66,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
          {/* Author Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex-shrink-0 relative"
          >
            <div
              className="relative w-72 h-96 rounded-lg overflow-hidden bg-cosmic-900"
              style={{ border: '1px solid rgba(245,200,66,0.2)' }}
            >
              {/* Место под фото автора — замените на <img src="..." alt="Автор" className="w-full h-full object-cover" /> */}
              <div
                className="w-full h-full min-h-[384px]"
                style={{ background: 'rgba(8,12,42,0.6)' }}
                aria-hidden
              />
              {/* Golden frame glow */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(245,200,66,0.1)',
                }}
              />
            </div>
            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(245,200,66,0.8) 0%, transparent 70%)',
                filter: 'blur(15px)',
              }}
            />
          </motion.div>

          {/* Author Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1"
          >
            <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(245,200,66,0.5)' }}>
              Об авторе
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-2" style={{ color: '#f0e8d8' }}>
              Имя Фамилия
            </h2>
            <p className="font-serif-display text-lg italic mb-6" style={{ color: 'rgba(245,200,66,0.7)' }}>
              Психолог, автор методики, создатель Garmonia-MAK
            </p>
            <div
              className="mb-6"
              style={{
                width: '60px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(245,200,66,0.6), transparent)',
              }}
            />
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,224,208,0.75)' }}>
                Более 12 лет я изучаю пространство между словами — то, где живут настоящие ответы.
                Как психолог, я видела, как клиенты часами говорят о проблеме, не приближаясь к её
                сути. Метафорические образы изменили всё.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,224,208,0.75)' }}>
                Garmonia-MAK — это результат тысяч часов практики, исследований юнгианской психологии,
                гештальта и нейронауки. Каждая карта создана с намерением — открыть дверь туда,
                куда слова не добираются.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,224,208,0.75)' }}>
                Моя миссия — сделать глубинную психологическую работу доступной каждому.
                Не только в кабинете терапевта, но и в любой момент жизни, когда нужна
                ясность и связь с собой.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6" style={{ borderTop: '1px solid rgba(245,200,66,0.1)' }}>
              {[
                { number: '12+', label: 'лет практики' },
                { number: '3000+', label: 'клиентов' },
                { number: '126', label: 'карт создано' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif-display text-2xl font-light" style={{ color: '#f5c842' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs tracking-wider mt-1" style={{ color: 'rgba(232,224,208,0.5)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
