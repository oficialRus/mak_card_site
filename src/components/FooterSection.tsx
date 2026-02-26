import React from 'react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080c2a 0%, #050818 100%)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.4), transparent)' }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xs"
          >
            <div className="font-serif-display text-2xl tracking-widest mb-4" style={{ color: '#f5c842' }}>
              GARMONIA-MAK
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,224,208,0.5)' }}>
              Метафорические ассоциативные карты для глубинной трансформации.
              Инструмент нового поколения — на пересечении психологии и красоты.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(245,200,66,0.5)' }}>
              Навигация
            </div>
            {[
              { label: 'Карты', href: '#products' },
              { label: 'Философия', href: '#philosophy' },
              { label: 'AI-психолог', href: '#ai-section' },
              { label: 'Об авторе', href: '#about' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-gold-warm"
                style={{ color: 'rgba(232,224,208,0.6)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5c842')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232,224,208,0.6)')}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(245,200,66,0.5)' }}>
              Социальные сети
            </div>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  border: '1px solid rgba(245,200,66,0.2)',
                  background: 'rgba(8,12,42,0.5)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: '#f5c842' }}>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                </svg>
              </div>
              <span className="text-sm" style={{ color: 'rgba(232,224,208,0.6)' }}>Telegram</span>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  border: '1px solid rgba(245,200,66,0.2)',
                  background: 'rgba(8,12,42,0.5)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" style={{ color: '#f5c842' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-sm" style={{ color: 'rgba(232,224,208,0.6)' }}>Instagram</span>
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(245,200,66,0.5)' }}>
              Контакты
            </div>
            <a
              href="mailto:hello@garmonia-mak.ru"
              className="text-sm"
              style={{ color: 'rgba(232,224,208,0.6)' }}
            >
              hello@garmonia-mak.ru
            </a>
            <div className="text-xs leading-relaxed mt-2" style={{ color: 'rgba(232,224,208,0.4)' }}>
              Время ответа:
              <br />
              пн–пт, 10:00–18:00 МСК
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(245,200,66,0.08)' }}
        >
          <div className="text-xs" style={{ color: 'rgba(232,224,208,0.3)' }}>
            © 2025 Garmonia-MAK. Все права защищены.
          </div>
          <div className="text-xs font-serif-display italic" style={{ color: 'rgba(245,200,66,0.3)' }}>
            Инструмент глубинной трансформации
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
