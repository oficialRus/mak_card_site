import React from 'react';
import { motion } from 'framer-motion';
import { Cog, ImageIcon } from 'lucide-react';

type RevealVariants = {
  hidden: { opacity: number; y: number };
  visible: { opacity: number; y: number };
};

type TechniquesCalloutCardProps = {
  variants: RevealVariants;
  transitionDelay?: number;
  className?: string;
  title?: string;
  body?: string;
};

const TechniquesCalloutCard: React.FC<TechniquesCalloutCardProps> = ({
  variants,
  transitionDelay = 0.08,
  className = '',
  title = 'В комплекте 5 уникальных техник',
  body = 'с использованием дополненной реальности для работы с картами как с инструментом для самопознания',
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.6, delay: transitionDelay }}
    className={`relative shrink-0 overflow-hidden rounded-2xl px-6 py-5 pr-[5.5rem] md:px-8 md:py-6 md:pr-40 ${className}`}
    style={{
      background:
        'linear-gradient(135deg, rgba(42, 32, 88, 0.95) 0%, rgba(22, 16, 56, 0.96) 45%, rgba(28, 18, 68, 0.92) 100%)',
      border: '1px solid rgba(201, 169, 110, 0.3)',
      boxShadow:
        '0 0 0 1px rgba(255,255,255,0.05) inset, 0 18px 40px rgba(0,0,0,0.4), 0 0 50px rgba(59, 31, 160, 0.12)',
    }}
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 90% 140% at 108% 72%, rgba(201, 169, 110, 0.12) 0%, transparent 52%)',
      }}
    />
    <Cog
      className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 text-[#c9a96e] opacity-[0.14] md:-bottom-10 md:-right-10 md:h-48 md:w-48"
      strokeWidth={1.15}
      aria-hidden
    />
    <div className="relative z-[1] max-w-[min(100%,28rem)] md:max-w-[min(100%,32rem)]">
      <p className="text-base font-bold leading-snug text-[#F2F0EB] md:text-lg">{title}</p>
      <p className="mt-3 text-sm font-normal leading-relaxed text-[rgba(232,220,192,0.78)] md:text-[0.95rem] md:leading-relaxed">
        {body}
      </p>
    </div>
  </motion.div>
);

const imageFrameStyle: React.CSSProperties = {
  background:
    'linear-gradient(145deg, rgba(201, 169, 110, 0.35) 0%, rgba(59, 31, 160, 0.25) 50%, rgba(201, 169, 110, 0.15) 100%)',
  boxShadow: '0 28px 64px rgba(0, 0, 0, 0.45), 0 0 80px rgba(26, 16, 64, 0.5)',
};

const TECHNIQUE_COACH_TITLE = 'Каждая техника разработана с психологом и коучем';
const TECHNIQUE_COACH_BODY =
  'Для работы с оживающим Mac картами для лучшего понимания ассоциации с помощью визуализации, и эмоций. Поставьте запрос и получите свой ответ через ваши чувства и сам познание';

const MATTE_CARDBOARD_TITLE = 'Плотный картон покрытый матовой плёнкой';
const MATTE_CARDBOARD_BODY =
  'Тёплая авторская колода метафорических карт для мягкой глубинной работы с собой. Свет. Выбор. Осознание.';

const LOVE_PACK_TITLE = 'Каждая колода сделана с душой!';
const LOVE_PACK_BODY =
  'Загадочная авторская колода метафорических карт для глубинной работы с подсознанием. Интуиция • Доверие • Архетипы.';

const SUPPORT_TITLE = 'Поддержка 24/7';
const SUPPORT_BODY =
  'Напишите нам в социальных сетях или на почту support@example.com, и мы поможем решить ваш вопрос. В случае проблемы пришлём вам новую колоду за свой счёт.';

type ProductImagePlaceholderProps = {
  ariaLabel?: string;
};

const ProductImagePlaceholder: React.FC<ProductImagePlaceholderProps> = ({
  ariaLabel = 'Заглушка: фото скоро появится',
}) => (
  <div className="relative rounded-2xl p-[1px]" style={imageFrameStyle}>
    <div
      className="relative flex aspect-[16/10] min-h-[200px] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#353b52] via-[#252a3d] to-[#161a28]"
      role="img"
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.04) 6px, rgba(255,255,255,0.04) 12px)',
        }}
        aria-hidden
      />
      <ImageIcon
        className="relative z-[1] h-12 w-12 text-[rgba(232,220,192,0.22)]"
        strokeWidth={1.15}
        aria-hidden
      />
      <span className="relative z-[1] text-center text-xs font-medium uppercase tracking-[0.2em] text-[rgba(232,220,192,0.32)]">
        Фото скоро
      </span>
    </div>
  </div>
);

const MattePlaceholderGridRow: React.FC<{
  reveal: RevealVariants;
  title?: string;
  body?: string;
}> = ({
  reveal,
  title = MATTE_CARDBOARD_TITLE,
  body = MATTE_CARDBOARD_BODY,
}) => (
  <div className="mt-14 grid grid-cols-1 items-stretch gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14 xl:gap-20">
    <div className="order-1 flex min-h-0 flex-col justify-center text-left lg:h-full">
      <TechniquesCalloutCard
        variants={reveal}
        transitionDelay={0.1}
        className="w-full"
        title={title}
        body={body}
      />
    </div>

    <motion.div
      className="order-2 flex min-h-0 flex-col lg:h-full"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: 0.05 }}
    >
      <ProductImagePlaceholder />
    </motion.div>
  </div>
);

const PlaceholderCoachGridRow: React.FC<{
  reveal: RevealVariants;
  placeholderAriaLabel?: string;
  title?: string;
  body?: string;
}> = ({
  reveal,
  placeholderAriaLabel = 'Заглушка: фото колоды «Рассвет» скоро появится',
  title = TECHNIQUE_COACH_TITLE,
  body = TECHNIQUE_COACH_BODY,
}) => (
  <div className="mt-14 grid grid-cols-1 items-stretch gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14 xl:gap-20">
    <motion.div
      className="order-1 flex min-h-0 flex-col lg:h-full"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      <ProductImagePlaceholder ariaLabel={placeholderAriaLabel} />
    </motion.div>

    <div className="order-2 flex min-h-0 flex-col justify-center text-left lg:h-full">
      <TechniquesCalloutCard
        variants={reveal}
        transitionDelay={0.1}
        className="w-full"
        title={title}
        body={body}
      />
    </div>
  </div>
);

const CosmicPromoSection: React.FC = () => {
  const reveal: RevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="ai-psychologist"
      className="mak-benefits relative overflow-hidden py-14 md:py-20 lg:py-24"
      style={{
        background: 'radial-gradient(ellipse at 50% 60%, #1a1040 0%, #080c2a 40%, #050818 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full opacity-[0.14]"
        style={{
          background: 'radial-gradient(circle, #3b1fa0 0%, transparent 70%)',
          top: '-12%',
          right: '-8%',
        }}
      />
      <div
        className="pointer-events-none absolute w-[min(70vw,400px)] h-[min(70vw,400px)] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #c9a96e 0%, transparent 65%)',
          bottom: '-5%',
          left: '-10%',
          filter: 'blur(40px)',
        }}
      />

      <div className="mak-container relative z-10 px-5">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <motion.div
            className="order-1 flex min-h-0 flex-col lg:order-1 lg:h-full"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="relative rounded-2xl p-[1px]" style={imageFrameStyle}>
              <img
                src="/garmonia-dnya-showcase.png"
                alt="Колода «Гармония дня» — метафорические ассоциативные AR-карты"
                className="relative block w-full rounded-2xl object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          <div className="order-2 flex min-h-0 flex-col gap-8 text-left lg:order-2 lg:h-full lg:gap-8">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="shrink-0 text-lg font-semibold leading-snug text-[#F2F0EB] md:text-xl lg:text-2xl lg:leading-tight"
              style={{ textShadow: '0 1px 24px rgba(0,0,0,0.35)' }}
            >
              50 уникальных оживающих карт
              <br />
              с уникальным ассоциативным видео-контентом и озвучкой.
              <span className="text-gold-gradient mt-5 block text-base font-semibold tracking-[0.18em] md:text-lg lg:text-xl">
                ты видишь, слышишь и чувствуешь»
              </span>
            </motion.p>

            <TechniquesCalloutCard variants={reveal} className="lg:mt-auto" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="order-2 flex min-h-0 flex-col gap-8 text-left lg:order-1 lg:h-full lg:gap-8">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="shrink-0 text-lg font-semibold leading-snug text-[#F2F0EB] md:text-xl lg:text-2xl lg:leading-tight"
              style={{ textShadow: '0 1px 24px rgba(0,0,0,0.35)' }}
            >
              50 уникальных оживающих карт
              <br />
              с уникальным ассоциативным видео-контентом и озвучкой.
              <span className="text-gold-gradient mt-5 block text-base font-semibold tracking-[0.18em] md:text-lg lg:text-xl">
                ты видишь, слышишь и чувствуешь»
              </span>
            </motion.p>

            <TechniquesCalloutCard variants={reveal} className="lg:mt-auto" />
          </div>

          <motion.div
            className="order-1 flex min-h-0 flex-col lg:order-2 lg:h-full"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="relative rounded-2xl p-[1px]" style={imageFrameStyle}>
              <img
                src="/garmonia-dnya-showcase.png"
                alt="Колода «Гармония дня» — метафорические ассоциативные AR-карты"
                className="relative block w-full rounded-2xl object-cover"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>

        <PlaceholderCoachGridRow reveal={reveal} />

        <MattePlaceholderGridRow reveal={reveal} />

        <PlaceholderCoachGridRow reveal={reveal} title={LOVE_PACK_TITLE} body={LOVE_PACK_BODY} />

        <MattePlaceholderGridRow reveal={reveal} title={SUPPORT_TITLE} body={SUPPORT_BODY} />
      </div>
    </section>
  );
};

export default CosmicPromoSection;
