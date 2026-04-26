import React from 'react';
import { motion } from 'framer-motion';
import { Cog, ImageIcon } from 'lucide-react';
import { SUPPORT_MAX_URL, SUPPORT_TELEGRAM_URL } from '../constants/site';

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
  footer,
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.6, delay: transitionDelay }}
    className={`relative shrink-0 overflow-hidden rounded-2xl px-4 py-5 md:px-5 md:py-6 ${className}`}
    style={{
      background:
        'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,249,255,0.96) 45%, rgba(230,242,252,0.98) 100%)',
      border: '1px solid rgba(125, 180, 220, 0.45)',
      boxShadow:
        '0 0 0 1px rgba(255,255,255,0.9) inset, 0 12px 32px rgba(15, 80, 120, 0.09), 0 2px 8px rgba(100, 150, 190, 0.06)',
    }}
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 90% 140% at 108% 72%, rgba(201, 169, 110, 0.14) 0%, transparent 52%)',
      }}
    />
    <Cog
      className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 text-[#c9a96e] opacity-[0.1] md:h-40 md:w-40"
      strokeWidth={1.15}
      aria-hidden
    />
    <div className="relative z-[1] w-full max-w-none">
      <p className="text-lg font-bold leading-snug text-[#052239] md:text-xl tracking-wide">{title}</p>
      <p className="mt-3 text-base font-medium leading-relaxed text-[#124765] md:text-lg md:leading-relaxed tracking-wide">
        {body}
      </p>
      {footer ? <div className="mt-5">{footer}</div> : null}
    </div>
  </motion.div>
);

const imageFrameStyle: React.CSSProperties = {
  background:
    'linear-gradient(145deg, rgba(201, 169, 110, 0.35) 0%, rgba(59, 31, 160, 0.25) 50%, rgba(201, 169, 110, 0.15) 100%)',
  boxShadow: '0 28px 64px rgba(0, 0, 0, 0.45), 0 0 80px rgba(26, 16, 64, 0.5)',
};

const TECHNIQUE_COACH_TITLE = 'Каждая техника разработана совместно с психологом-коучем.';
const TECHNIQUE_COACH_BODY =
  'Техники подходят для работы с оживающими МАК-картами: образ на карте помогает заметить чувства и понять, что за этим стоит. Задайте себе вопрос и\u00A0прислушайтесь к\u00A0себе — ясность приходит через ощущения и самопознание.';

const MATTE_CARDBOARD_TITLE = 'Плотный картон, покрытый матовой плёнкой';
const MATTE_CARDBOARD_BODY =
  'Тёплая авторская колода метафорических карт для мягкой глубинной работы с собой. Свет. Выбор. Осознание.';

const LOVE_PACK_TITLE = 'Каждая колода сделана с душой!';
const LOVE_PACK_BODY =
  'Дорогие друзья, в ваших руках инструмент глубинной работы с собой: эти колоды карт созданы опытным психологом, который понимает тонкости развития личности. Каждая карта несёт в себе энергию и мудрость — позвольте себе довериться процессу. Карты помогут раскрыть скрытые ресурсы, увидеть новые пути к самопознанию и обрести внутреннюю гармонию. Используйте этот инструмент с открытым сердцем — и он подарит вам ценные открытия на пути к себе.';

const SUPPORT_TITLE = 'Поддержка 24/7';
const SUPPORT_BODY =
  'Напишите нам в социальных сетях или на почту garmonia_mak@mail.ru — и мы поможем решить ваш вопрос.';

const SupportMessengerLinks: React.FC = () => (
  <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Мессенджеры поддержки">
    <a
      href={SUPPORT_TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#229ED9]/45 bg-[#229ED9]/12 px-4 text-sm font-semibold text-[#052239] shadow-sm transition hover:bg-[#229ED9]/22 hover:shadow md:text-base"
    >
      <img
        src="/telegram-icon.png"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 shrink-0 rounded-full object-cover"
        draggable={false}
      />
      Telegram
    </a>
    <a
      href={SUPPORT_MAX_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#7c3aed]/45 bg-[#7c3aed]/12 px-4 text-sm font-semibold text-[#052239] shadow-sm transition hover:bg-[#7c3aed]/20 hover:shadow md:text-base"
    >
      <img
        src="/max-messenger-icon.png"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 shrink-0 rounded-lg object-cover"
        draggable={false}
      />
      MAX
    </a>
  </div>
);

type ProductImagePlaceholderProps = {
  ariaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const ProductImagePlaceholder: React.FC<ProductImagePlaceholderProps> = ({
  ariaLabel = 'Заглушка: фото скоро появится',
  imageSrc,
  imageAlt = 'Фотография колоды',
}) => (
  <div className="relative rounded-2xl p-[1px]" style={imageFrameStyle}>
    {imageSrc ? (
      <div className="relative aspect-[16/10] min-h-[200px] w-full overflow-hidden rounded-2xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="relative block h-full w-full object-cover"
          draggable={false}
        />
      </div>
    ) : (
      <div
        className="relative flex aspect-[16/10] min-h-[200px] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#dbeafe]"
        role="img"
        aria-label={ariaLabel}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(100,160,200,0.12) 6px, rgba(100,160,200,0.12) 12px)',
          }}
          aria-hidden
        />
        <ImageIcon
          className="relative z-[1] h-12 w-12 text-[rgba(100,150,190,0.35)]"
          strokeWidth={1.15}
          aria-hidden
        />
        <span className="relative z-[1] text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#0369a1]">
          Фото скоро
        </span>
      </div>
    )}
  </div>
);

const MattePlaceholderGridRow: React.FC<{
  reveal: RevealVariants;
  title?: string;
  body?: string;
  cardFooter?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  hideImage?: boolean;
}> = ({
  reveal,
  title = MATTE_CARDBOARD_TITLE,
  body = MATTE_CARDBOARD_BODY,
  cardFooter,
  imageSrc,
  imageAlt,
  hideImage = false,
}) => (
  <div
    className={`mt-14 grid grid-cols-1 items-stretch gap-10 lg:mt-20 lg:gap-14 xl:gap-20 ${
      hideImage ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
    }`}
  >
    <div className="order-1 flex min-h-0 flex-col justify-center text-left lg:h-full">
      <TechniquesCalloutCard
        variants={reveal}
        transitionDelay={0.1}
        className="w-full"
        title={title}
        body={body}
        footer={cardFooter}
      />
    </div>

    {!hideImage && (
      <motion.div
        className="order-2 flex min-h-0 flex-col lg:h-full"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, delay: 0.05 }}
      >
        <ProductImagePlaceholder imageSrc={imageSrc} imageAlt={imageAlt} />
      </motion.div>
    )}
  </div>
);

const PlaceholderCoachGridRow: React.FC<{
  reveal: RevealVariants;
  placeholderAriaLabel?: string;
  title?: string;
  body?: string;
  textBeforeImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  hideImage?: boolean;
}> = ({
  reveal,
  placeholderAriaLabel = 'Заглушка: фото колоды «Гармония дня» скоро появится',
  title = TECHNIQUE_COACH_TITLE,
  body = TECHNIQUE_COACH_BODY,
  textBeforeImage = false,
  imageSrc,
  imageAlt,
  hideImage = false,
}) => (
  <div
    className={`mt-14 grid grid-cols-1 items-stretch gap-10 lg:mt-20 lg:gap-14 xl:gap-20 ${
      hideImage ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
    }`}
  >
    <div
      className={`flex min-h-0 flex-col justify-center text-left lg:h-full ${
        textBeforeImage ? 'order-1' : 'order-2'
      }`}
    >
      <TechniquesCalloutCard
        variants={reveal}
        transitionDelay={0.1}
        className="w-full"
        title={title}
        body={body}
      />
    </div>

    {!hideImage && (
      <motion.div
        className={`flex min-h-0 flex-col lg:h-full ${textBeforeImage ? 'order-2' : 'order-1'}`}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <ProductImagePlaceholder ariaLabel={placeholderAriaLabel} imageSrc={imageSrc} imageAlt={imageAlt} />
      </motion.div>
    )}
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
    >
      <div
        className="pointer-events-none absolute w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full opacity-[0.35]"
        style={{
          background: 'radial-gradient(circle, rgba(125, 180, 230, 0.45) 0%, transparent 70%)',
          top: '-12%',
          right: '-8%',
        }}
      />
      <div
        className="pointer-events-none absolute w-[min(70vw,400px)] h-[min(70vw,400px)] rounded-full opacity-[0.22]"
        style={{
          background: 'radial-gradient(circle, rgba(201, 169, 110, 0.35) 0%, transparent 65%)',
          bottom: '-5%',
          left: '-10%',
          filter: 'blur(40px)',
        }}
      />

      <div className="mak-container relative z-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="order-1 flex min-h-0 flex-col gap-8 text-left lg:order-1 lg:h-full lg:gap-8">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="mak-ai-psych-lead shrink-0 text-5xl font-bold leading-snug text-[#052239] md:text-6xl md:leading-tight lg:text-6xl lg:leading-tight tracking-wide"
            >
              <span className="mak-ai-psych-lead-line">50 уникальных оживающих карт</span>
              <span className="mak-ai-psych-lead-line">с уникальным ассоциативным</span>
              <span className="mak-ai-psych-lead-line">видео-контентом и озвучкой.</span>
              <span className="mak-ai-psych-quote-gold mt-5 block text-base tracking-[0.18em] md:text-lg lg:text-xl">
                «ТЫ ВИДИШЬ, СЛЫШИШЬ И ЧУВСТВУЕШЬ!»
              </span>
            </motion.p>
          </div>

          <motion.div
            className="order-2 flex min-h-0 flex-col lg:order-2 lg:h-full"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="relative rounded-2xl p-[1px]" style={imageFrameStyle}>
              <img
                src="/pod_pablik/garmonia-dnya-box-with-cards.png"
                alt="Колода «Гармония дня» — метафорические ассоциативные AR-карты"
                className="relative block w-full rounded-2xl object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          <div className="order-3 lg:order-3 lg:col-span-2">
            <TechniquesCalloutCard variants={reveal} />
          </div>

          <div className="order-4 lg:order-4 lg:col-span-2">
            <PlaceholderCoachGridRow reveal={reveal} title={LOVE_PACK_TITLE} body={LOVE_PACK_BODY} hideImage />
          </div>
        </div>

        <PlaceholderCoachGridRow
          reveal={reveal}
          textBeforeImage
          imageSrc="/pod_pablik/IMG_0821.png"
          imageAlt="Колода «Гармония дня» — фото набора из трёх карт"
        />

        <MattePlaceholderGridRow
          reveal={reveal}
          imageSrc="/pod_pablik/IMG_0843.png"
          imageAlt="Колода «Гармония дня» — фото набора из трёх карт"
        />

        <MattePlaceholderGridRow
          reveal={reveal}
          title={SUPPORT_TITLE}
          body={SUPPORT_BODY}
          cardFooter={<SupportMessengerLinks />}
          hideImage
        />
      </div>
    </section>
  );
};

export default CosmicPromoSection;
