import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AiPsychologistNextGenSection from '../components/AiPsychologistNextGenSection';
import CosmicPromoSection from '../components/CosmicPromoSection';
import CtaNextStepsSection from '../components/CtaNextStepsSection';
import { ONLINE_APP_URL } from '../constants/site';

const decks: Array<{
  title: string;
  subtitle: string;
  description: string | readonly string[];
  detailsHref: string;
  onlineHref: string;
  imageSrc: string;
  imageAlt: string;
}> = [
  {
    title: 'Я ВЫБИРАЮ|БЫТЬ ...',
    subtitle:
      '50 уникальных оживающих красочных изображений метафорических карт для самопознания с посланием на день.',
    description: [
      'Каждая карта сопровождается ассоциативным видео с озвучкой и смысловым посланием. В конце каждого видео — вопрос для глубокой проработки с использованием нашего уникального инструмента.',
      'Также в наборе представлены пять уникальных техник для работы с оживающими метафорическими картами.',
    ],
    detailsHref: '/deck/ya-vybiraju-byt',
    onlineHref: ONLINE_APP_URL,
    imageSrc: '/pod_pablik/ya-vybirayu-byt-cover.png',
    imageAlt: 'Колода «Я выбираю быть...»',
  },
  {
    title: 'ГАRMOНИЯ ДНЯ',
    subtitle:
      '50 уникальных оживающих красочных изображений метафорических карт для самопознания с посланием на день.',
    description: [
      'Каждая карта сопровождается ассоциативным видео с озвучкой и смысловым посланием. В конце каждого видео — вопрос для глубокой проработки с использованием нашего уникального инструмента.',
      'Также в наборе представлены пять уникальных техник для работы с оживающими метафорическими картами.',
    ],
    detailsHref: '/deck/rassvet',
    onlineHref: ONLINE_APP_URL,
    imageSrc: '/pod_pablik/garmonia-dnya-cover.png',
    imageAlt: 'Колода «ГАРМОНИЯ ДНЯ»',
  },
];

const reviews = [
  {
    author: 'Анна, психолог',
    text: 'Карты отлично работают в сессиях. Клиенты быстрее выходят на эмоции и инсайты.',
  },
  {
    author: 'Ирина, коуч',
    text: 'Очень бережная визуальная подача. Использую и в группах, и в индивидуальной работе.',
  },
  {
    author: 'Мария, частная практика',
    text: 'Качественная печать и сильные образы. Колода стала базовым инструментом в моей работе.',
  },
  {
    author: 'Дмитрий, тренер',
    text: 'Беру колоды на тренинги по мягкому командному взаимодействию — участники быстро включаются и охотнее делятся.',
  },
  {
    author: 'Елена, супервизор',
    text: 'Сочетание образов и AR даёт новый угол в супервизии: проще увидеть «застревание» и обсудить его без давления.',
  },
  {
    author: 'Ольга, семейный психолог',
    text: 'Родителям и подросткам заходит формат «оживших» карт — меньше сопротивления, больше живого диалога.',
  },
];

function useCountUp(target: number, start: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (target <= 0) {
      setValue(0);
      return;
    }

    let raf = 0;
    const startTs = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, start, target]);

  return value;
}

const ratingStats = {
  reviews: 250,
  rating: 700,
};

export default function HomePage() {
  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [ratingsStarted, setRatingsStarted] = useState(false);
  const reviewsCount = useCountUp(ratingStats.reviews, ratingsStarted);
  const ratingCount = useCountUp(ratingStats.rating, ratingsStarted);

  return (
    <>
      <main id="top">
        <section className="mak-hero">
          <div className="mak-container mak-hero-grid">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mak-hero-title">
                ОЖИВАЮЩИЕ МЕТАФОРИЧЕСКИЕ АССОЦИАТИВНЫЕ КАРТЫ
              </h1>
              <p className="mak-hero-text mak-hero-text--min">Уникальный инструмент для самопознания и самопрограммирования</p>
              <motion.div
                className="mak-hero-actions"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                <Link to="/buy" className="btn-gold mak-hero-cta-btn">
                  Купить набор
                </Link>
                <a
                  href={ONLINE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold mak-hero-cta-btn"
                >
                  попробовать онлайн мини приложение
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="mak-hero-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="mak-hero-visual" aria-hidden="true">
                <div className="mak-hero-card-layer mak-hero-card-layer--back1">
                  <img src="/product-bath-hero-new.png" alt="" draggable={false} className="mak-hero-bath-image" />
                </div>
                <div className="mak-hero-card-layer mak-hero-card-layer--back2">
                  <img src="/product-mak-hero-third.png" alt="" draggable={false} />
                </div>
                <div className="mak-hero-card-layer mak-hero-card-layer--front">
                  <img src="/product-mak-vibiraju-hero.png" alt="" draggable={false} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CosmicPromoSection />

        <section id="decks" className="mak-section">
          <div className="mak-container">
            <motion.h2
              className="mak-section-title"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Разные колоды метафорических карт
            </motion.h2>
            <motion.p
              className="mak-section-text"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Для проецирования своих внутренних переживаний во внешний мир.
            </motion.p>
            <div className="mak-grid">
              {decks.map((deck, idx) => (
                <motion.article
                  className="mak-deck-card mak-hover-glow"
                  key={deck.title}
                  initial={{ opacity: 0, y: 26, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -4, rotate: -0.25 }}
                >
                  <div
                    className={`mak-deck-placeholder mak-deck-placeholder--white ${
                      deck.title === 'ГАРМОНИЯ ДНЯ' ? 'mak-deck-placeholder--cover' : ''
                    }`}
                    role="img"
                    aria-label={`Заглушка фото колоды «${deck.title}»`}
                  >
                    {deck.imageSrc ? (
                      <img
                        className={`mak-deck-product-img ${
                          deck.title === 'ГАРМОНИЯ ДНЯ' ? 'mak-deck-product-img--cover' : ''
                        }`}
                        src={deck.imageSrc}
                        alt={deck.imageAlt ?? `Колода «${deck.title}»`}
                      />
                    ) : (
                      <span className="mak-deck-placeholder-label">Фото скоро</span>
                    )}
                  </div>
                  <div className="mak-deck-content">
                    <h3>
                      {deck.title.includes('|')
                        ? deck.title.split('|').map((part, i) => (
                            <span key={i} style={{ display: 'block' }}>
                              {part}
                            </span>
                          ))
                        : deck.title}
                    </h3>
                    <p className="mak-deck-subtitle">{deck.subtitle}</p>
                    {Array.isArray(deck.description) ? (
                      deck.description.map((para, i) => <p key={i}>{para}</p>)
                    ) : (
                      <p>{deck.description}</p>
                    )}
                    <div className="mak-deck-actions">
                      <Link className="btn-gold mak-link-btn mak-deck-buy-btn" to="/buy">
                        Купить
                      </Link>
                      {deck.detailsHref.startsWith('/') ? (
                        <Link className="mak-secondary-btn mak-link-btn" to={deck.detailsHref}>
                          Подробнее
                        </Link>
                      ) : (
                        <a
                          className="mak-secondary-btn mak-link-btn"
                          href={deck.detailsHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Подробнее
                        </a>
                      )}
                      <a className="mak-primary-btn mak-link-btn" href={deck.onlineHref} target="_blank" rel="noreferrer">
                        Попробовать онлайн
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <AiPsychologistNextGenSection />

        <section className="mak-section">
          <div className="mak-container">
            <motion.h2
              className="mak-section-title"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
            >
              Более 250 отзывов и 700 оценок
            </motion.h2>
            <motion.div
              className="mak-ratings-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              onViewportEnter={() => setRatingsStarted(true)}
            >
              <div className="mak-rating-pill">
                <span className="mak-rating-num">{reviewsCount}</span>
                <span className="mak-rating-label">отзывов</span>
              </div>
              <div className="mak-rating-pill">
                <span className="mak-rating-num">{ratingCount}</span>
                <span className="mak-rating-label">оценок</span>
              </div>
            </motion.div>

            <div className="mak-reviews-row">
              <div className="mak-reviews-scroll" role="region" aria-label="Отзывы покупателей">
                <div className="mak-reviews">
                  {reviews.map((review, idx) => (
                    <motion.article
                      className="mak-review mak-hover-glow"
                      key={`${review.author}-${idx}`}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.45, delay: idx * 0.06 }}
                      whileHover={{ y: -3 }}
                    >
                      <p>{review.text}</p>
                      <span>{review.author}</span>
                    </motion.article>
                  ))}
                </div>
              </div>
              <p className="mak-reviews-hint" aria-hidden>
                Листайте отзывы&nbsp;→
              </p>
            </div>
          </div>
        </section>

        <section className="mak-section mak-soft">
          <div className="mak-container">
            <motion.div
              className="mak-cta-next"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5 }}
            >
              <CtaNextStepsSection
                buyHref="/#decks"
                tryHref={ONLINE_APP_URL}
                examplesPath="/techniques"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
