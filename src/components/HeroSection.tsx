import React from 'react';
import { motion } from 'framer-motion';
import { SITE_LOGO_URL } from '../constants/site';

const STARS_COUNT = 80;

const StarParticles: React.FC = () => {
  const stars = Array.from({ length: STARS_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #1a1040 0%, #080c2a 40%, #050818 100%)' }}
    >
      {/* Cosmic orbs */}
      <div
        className="cosmic-orb absolute w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #3b1fa0 0%, #1a0a3a 60%, transparent 100%)',
          top: '-10%',
          right: '-10%',
        }}
      />
      <div
        className="cosmic-orb absolute w-[400px] h-[400px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #f5c842 0%, #e8a937 30%, transparent 70%)',
          bottom: '5%',
          left: '-5%',
          animationDelay: '5s',
          filter: 'blur(100px)',
        }}
      />

      <StarParticles />

      <div className="container mx-auto px-6 text-center relative z-10 py-24">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-8 left-0 right-0 flex justify-between items-center px-8"
        >
          <a href="#hero" className="flex items-center gap-3">
            <img
              src={SITE_LOGO_URL}
              alt="Garmonia-MAK логотип"
              className="h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(245,200,66,0.45)]"
            />
            <span
              className="font-serif-display text-xl tracking-widest text-gold-glow hidden sm:inline"
              style={{ color: '#f5c842' }}
            >
              GARMONIA-MAK
            </span>
          </a>
          <div className="hidden md:flex gap-8 text-sm tracking-wider text-white/60">
            <a href="#products" className="hover:text-gold-glow transition-colors">Карты</a>
            <a href="#philosophy" className="hover:text-gold-glow transition-colors">Философия</a>
            <a href="#ai-section" className="hover:text-gold-glow transition-colors">AI-психолог</a>
            <a href="#about" className="hover:text-gold-glow transition-colors">Об авторе</a>
          </div>
          <a
            href="#products"
            className="btn-gold rounded-sm text-xs px-5 py-2"
          >
            Купить
          </a>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block text-xs tracking-[0.4em] uppercase mb-6 px-4 py-1 border border-gold-warm/30 text-gold-warm"
            style={{ color: '#c9a84c', borderColor: 'rgba(201,168,76,0.3)' }}>
            Метафорические ассоциативные карты
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          style={{ color: '#f0e8d8' }}
        >
          Инструмент
          <br />
          <span className="text-gold-gradient italic">глубинной</span>
          <br />
          трансформации
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(232,224,208,0.7)' }}
        >
          Метафорические ассоциативные карты + цифровая психология нового поколения.
        </motion.p>

        {/* Product Box Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative mx-auto mb-12 w-48 h-64 md:w-64 md:h-80"
        >
          {/* Glow behind box */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'radial-gradient(ellipse, rgba(245,200,66,0.35) 0%, transparent 70%)',
              transform: 'scale(1.5)',
              filter: 'blur(20px)',
            }}
          />
          {/* Card stack visual */}
          <motion.div
            animate={{ y: [0, -10, 0], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Back cards */}
            <div
              className="absolute inset-2 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #1a2578 0%, #080c2a 100%)',
                border: '1px solid rgba(245,200,66,0.3)',
                transform: 'rotate(6deg)',
                top: '8px',
              }}
            />
            <div
              className="absolute inset-2 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, #2233a0 0%, #1a1040 100%)',
                border: '1px solid rgba(245,200,66,0.2)',
                transform: 'rotate(3deg)',
                top: '4px',
              }}
            />
            {/* Front card */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0d1340 0%, #1a1040 50%, #080c2a 100%)',
                border: '1px solid rgba(245,200,66,0.4)',
                boxShadow: '0 0 30px rgba(245,200,66,0.15), inset 0 0 30px rgba(245,200,66,0.05)',
              }}
            >
              {/* Card decoration */}
              <div className="absolute inset-3 border border-gold-warm/20 rounded-sm" style={{ borderColor: 'rgba(245,200,66,0.2)' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-4xl mb-2" style={{ color: 'rgba(245,200,66,0.6)' }}>✦</div>
                <div className="font-serif-display text-sm tracking-[0.3em] uppercase" style={{ color: 'rgba(245,200,66,0.5)' }}>
                  Garmonia-MAK
                </div>
              </div>
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 60%, rgba(245,200,66,0.05) 100%)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#products" className="btn-gold rounded-sm w-52">
            Купить набор
          </a>
          <a href="#ai-section" className="btn-outline-gold rounded-sm w-52">
            Попробовать онлайн
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(245,200,66,0.4)' }}>
            Листать
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(180deg, rgba(245,200,66,0.4), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
