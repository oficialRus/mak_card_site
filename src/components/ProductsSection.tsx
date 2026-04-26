import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cardData = [
  {
    id: 1,
    name: '«Выбираю Я быть...» — Оживающие',
    subtitle: 'МАК Оживающие',
    description: 'Тёплая авторская колода метафорических карт для мягкой глубинной работы с собой. Свет. Выбор. Осознание.',
    price: '2 790 ₽',
    theme: 'sunset',
    tag: 'Самый популярный',
    imageUrl: '/product-mak-vibiraju.png',
    imageAspect: '19/10', // широкий баннер — без полос сверху/снизу
  },
  {
    id: 2,
    name: 'ГАРМОНИЯ дня',
    subtitle: 'МАК Оживающие',
    description: 'Загадочная авторская колода метафорических карт для глубинной работы с подсознанием. Интуиция • Доверие • Архетипы.',
    price: '4 900 ₽',
    theme: 'cosmic',
    tag: 'Для психологов',
    imageUrl: '/product-garmonia-dnya.png',
    imageAspect: '19/10', // широкий баннер — без полос сверху/снизу
  },
];

const ProductCard: React.FC<{ card: (typeof cardData)[0]; index: number }> = ({ card, index }) => {
  const isSunset = card.theme === 'sunset';
  const isCosmic = card.theme === 'cosmic';
  const isBoth = card.theme === 'both';

  const cardBg = isSunset
    ? 'linear-gradient(135deg, #1a0c00 0%, #2d1500 50%, #1a0c00 100%)'
    : isCosmic
      ? 'linear-gradient(135deg, #050818 0%, #0d1340 50%, #1a0a3a 100%)'
      : 'linear-gradient(135deg, #0a0c20 0%, #151030 40%, #1a0a3a 100%)';

  const borderGlow = isSunset
    ? 'rgba(245,200,66,0.35)'
    : isCosmic
      ? 'rgba(100,80,200,0.35)'
      : 'rgba(245,200,66,0.25)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="product-card relative group rounded-lg overflow-hidden flex flex-col"
      style={{
        background: cardBg,
        border: `1px solid ${borderGlow}`,
      }}
    >
            {/* Image — соотношение сторон из card.imageAspect или 4/3 по умолчанию */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center rounded-t-lg"
        style={{
          background: isSunset ? '#1a0c00' : isCosmic ? '#080c2a' : '#0a0c20',
          aspectRatio: 'imageAspect' in card && typeof (card as { imageAspect?: string }).imageAspect === 'string'
            ? (card as { imageAspect: string }).imageAspect
            : '4/3',
        }}
      >
        <img
          src={card.imageUrl}
          alt={card.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
          style={{
            background: isSunset
              ? 'linear-gradient(180deg, transparent 0%, rgba(26,12,0,0.5) 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(5,8,24,0.6) 100%)',
          }}
        />
        {/* Golden glow on hover */}
        <div
          className="product-glow absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(245,200,66,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Tag — внизу фото */}
        {card.tag && (
          <div
            className="absolute bottom-4 left-4 z-10 text-xs tracking-widest uppercase px-3 py-1"
            style={{
              background: isSunset
                ? 'linear-gradient(135deg, #f5c842, #e8a937)'
                : isCosmic
                  ? 'linear-gradient(135deg, #2233a0, #3b1fa0)'
                  : 'linear-gradient(135deg, #f5c842, #e8a937)',
              color: isCosmic ? '#fff' : '#050818',
            }}
          >
            {card.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 min-w-0 overflow-visible">
        <div className="mb-2 flex-shrink-0 pt-0.5">
          <p className="text-xs tracking-[0.3em] uppercase mb-1.5" style={{ color: 'rgba(245,200,66,0.5)' }}>
            {card.subtitle}
          </p>
          <h3 className="font-serif-display text-xl md:text-2xl font-light leading-tight break-words" style={{ color: '#f0e8d8', minHeight: '1.4em' }}>
            {card.name}
          </h3>
        </div>
        <div className="section-divider my-4 flex-shrink-0" style={{ margin: '16px 0', marginLeft: 0 }} />
        <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(232,224,208,0.65)' }}>
          {card.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-serif-display text-2xl" style={{ color: '#f5c842' }}>
            {card.price}
          </span>
          <button className="btn-gold rounded-sm text-xs px-5 py-2">
            Подробнее
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="products"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050818 0%, #080c2a 50%, #050818 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.3), transparent)' }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(245,200,66,0.5)' }}>
            Наши продукты
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-4" style={{ color: '#f0e8d8' }}>
            Выберите свою колоду
          </h2>
          <div className="section-divider" />
          <p className="mt-4 text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'rgba(232,224,208,0.6)' }}>
            Каждая колода — это глубоко продуманный инструмент для работы с внутренним миром
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cardData.map((card, index) => (
            <ProductCard key={card.id} card={card} index={index} />
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

export default ProductsSection;
