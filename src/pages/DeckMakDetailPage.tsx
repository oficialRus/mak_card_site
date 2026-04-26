import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Flower2,
  Hand,
  Layers2,
  MousePointerClick,
  Puzzle,
  Sparkles,
  Star,
} from 'lucide-react';
import CtaNextStepsSection from '../components/CtaNextStepsSection';
import { ONLINE_APP_URL } from '../constants/site';
import type { DeckAboutSectionKey, DeckMakDetailConfig } from '../data/deckMakDetailConfigs';
import type { TechniqueModalBlock } from '../data/deckYaVybirajuTechniques';

function DeckAboutAfterInstructions({ variant }: { variant: DeckAboutSectionKey }) {
  if (variant === 'garmonia-dnya') {
    return (
      <>
        <p>
          Поздравляем! Теперь вы можете оживлять МАК-карты колоды «ГАРМОНИЯ ДНЯ», аффирмации и ассоциации, смотреть видео с
          мотивационной озвучкой и глубже работать с образами. Пусть каждая карта поможет вам через ассоциации лучше
          понять себя, увидеть скрытые смыслы и найти свой собственный ответ на важный вопрос.
        </p>
        <p>
          <strong>Важно:</strong>
        </p>
        <p>Оживает не только каждая карта, но и лицевая сторона коробки.</p>
        <p>
          Вы можете начать путь к самопознанию с оживления лицевой стороны коробки колоды «ГАРМОНИЯ ДНЯ», чтобы мягко
          погрузиться в мир ассоциаций и метафор вместе с этой метафорической ассоциативной колодой.
        </p>
        <p>
          В самостоятельной практике карты «ГАРМОНИЯ ДНЯ» помогут побороть страхи и травмы родства. Получить ответ от
          бессознательного. Понять истинную природу проблемы, психосоматику. Войти в ресурсное состояние. Разобраться в
          отношениях, с тараканами в голове. Провести арт-терапию, получить инсайты. Справиться с кошмарами и наладить
          сон. Поработать с внутренним ребёнком, развить интуицию. Быть источником вдохновения, найти душевную опору.
        </p>
        <p>
          Колода «ГАРМОНИЯ ДНЯ» хороша тем, что может использоваться во многих методах работы. Её можно разделить на
          несколько тематик, отобрать только те, которыми вам удобно пользоваться. Может заменить или быть дополнением к
          колодам:
        </p>
        <p>
          Сила рода, Портретная, Аллегории, Абстракции, OH, Женская, Проекция, Письма себе, Компас, Вселенная, Подсказки,
          Ресурсная и другие.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Поздравляем! Теперь вы можете оживлять МАК-карты, аффирмации и ассоциации, смотреть видео с мотивационной
        озвучкой и глубже работать с образами. Пусть каждая карта поможет вам через ассоциации лучше понять себя, увидеть
        скрытые смыслы и найти свой собственный ответ на важный вопрос.
      </p>
      <p>
        <strong>Важно:</strong>
      </p>
      <p>Оживает не только каждая карта, но и лицевая сторона коробки.</p>
      <p>
        Вы можете начать путь к самопознанию с оживления лицевой стороны коробки, чтобы мягко погрузиться в мир
        ассоциаций и метафор вместе с нашими метафорическими ассоциативными картами.
      </p>
      <p>
        В самостоятельной практике помогут побороть страхи и травмы родства. Получить ответ от бессознательного. Понять
        истинную природу проблемы, психосоматику. Войти в ресурсное состояние. Разобраться в отношениях, с тараканами в
        голове. Провести арт-терапию, получить инсайты. Справиться с кошмарами и наладить сон. Поработать с внутренним
        ребёнком, развить интуицию. Быть источником вдохновения, найти душевную опору.
      </p>
      <p>
        Универсальная колода хороша тем, что может использоваться во многих методах работы. Её можно разделить на
        несколько тематик, отобрать только те, которыми вам удобно пользоваться. Может заменить или быть дополнением к
        колодам:
      </p>
      <p>
        Сила рода, Портретная, Аллегории, Абстракции, OH, Женская, Проекция, Письма себе, Компас, Вселенная, Подсказки,
        Ресурсная и другие.
      </p>
    </>
  );
}

function TechniqueModalBlocks({ blocks }: { blocks: TechniqueModalBlock[] }) {
  return blocks.map((block, i) => {
    if (block.type === 'h3') {
      return (
        <h3 key={i} className="mak-tech-modal-h3">
          {block.text}
        </h3>
      );
    }
    if (block.type === 'p') {
      return (
        <p key={i} className="mak-tech-modal-p">
          {block.text}
        </p>
      );
    }
    if (block.type === 'ul') {
      return (
        <ul key={i} className="mak-tech-modal-ul">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    if (block.type === 'ol') {
      return (
        <ol key={i} className="mak-tech-modal-ol">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    }
    return null;
  });
}

const TECHNIQUE_ICON = {
  flower: Flower2,
  sparkle: Sparkles,
  stars: Sparkles,
  cards: Layers2,
} as const;

export default function DeckMakDetailPage({ config }: { config: DeckMakDetailConfig }) {
  const [openTechniqueId, setOpenTechniqueId] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openTechnique = config.techniques.find((t) => t.id === openTechniqueId);

  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!openTechniqueId) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenTechniqueId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [openTechniqueId]);

  return (
    <main id="top" className="mak-deck-detail">
      <section className="mak-deck-detail-hero mak-section">
        <div className="mak-container mak-deck-detail-hero-grid">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
            className="mak-deck-detail-hero-copy"
          >
            <p className="mak-kicker">{config.kicker}</p>
            <h1 className="mak-deck-detail-title font-serif-display">{config.title}</h1>
            <p className="mak-deck-detail-lead">{config.heroLeads[0]}</p>
            <p className="mak-deck-detail-lead">{config.heroLeads[1]}</p>
            <div className="mak-deck-detail-actions">
              <a
                href={ONLINE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mak-deck-detail-btn"
              >
                Попробовать эту колоду онлайн
              </a>
              <a
                href={config.elicartBuyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold mak-deck-detail-btn"
              >
                Купить
              </a>
            </div>
          </motion.div>
          <div className="mak-deck-detail-hero-visual-stack">
            <motion.div
              className="mak-deck-detail-hero-visual"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="mak-deck-detail-hero-visual-bleed">
                <div className="mak-deck-detail-photo-frame">
                  <img
                    src={config.imageSrc}
                    alt={config.imageAlt}
                    className="mak-deck-detail-photo"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mak-section mak-deck-detail-about">
        <div className="mak-container">
          <motion.article
            className="mak-deck-detail-card mak-hover-glow"
            variants={reveal}
            initial="hidden"
            /* whileInView с amount 0.35 на очень высокой карточке на телефоне часто не срабатывает — блок остаётся opacity: 0 */
            animate="visible"
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h2 className="mak-deck-detail-card-title mak-deck-detail-deck-nameplate mak-deck-detail-card-nameplate font-serif-display">
              <span className="mak-deck-detail-deck-nameplate-line">КАРТЫ</span>
              <span className="mak-deck-detail-deck-nameplate-line">{config.nameplateLine2}</span>
            </h2>
            <div className="mak-deck-detail-text">
              <h3 className="mak-deck-detail-instruction-title">Инструкция для оживления МАК карт</h3>
              <ol className="mak-deck-detail-instruction-list">
                <li>
                  <div className="mak-deck-detail-instruction-step-title">Скачайте приложение «ОЖИВИ»</div>
                  <p>
                    Зайдите в App Store или Google Play, найдите и скачайте бесплатное приложение «ОЖИВИ» (с
                    фиолетовой буквой «О»).
                  </p>
                </li>
                <li>
                  <div className="mak-deck-detail-instruction-step-title">Сканируйте QR-код</div>
                  <p>
                    Откройте камеру смартфона, наведите её на QR-код. Когда на экране появится жёлтая кнопка,
                    нажмите на неё.
                  </p>
                </li>
                <li>
                  <div className="mak-deck-detail-instruction-step-title">Дайте доступ к камере</div>
                  <p>
                    Разрешите приложению доступ к камере, далее наведите на QR-код и подождите до 20 секунд, пока
                    загрузится видео, и на экране появится фиолетовая галочка (это нужно сделать только один раз).
                  </p>
                </li>
                <li>
                  <div className="mak-deck-detail-instruction-step-title">Оживите изображение</div>
                  <p>После этого просто наведите камеру на изображение (карту).</p>
                </li>
              </ol>
              <DeckAboutAfterInstructions variant={config.aboutSectionKey ?? 'default'} />
            </div>
          </motion.article>
        </div>
      </section>

      <section className="mak-section mak-deck-detail-audience" aria-labelledby="deck-audience-heading">
        <div className="mak-container">
          <motion.h2
            id="deck-audience-heading"
            className="mak-deck-audience-section-title font-serif-display"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            Для кого подойдёт данная колода
          </motion.h2>
          <div className="mak-deck-audience-grid">
            <motion.div
              className="mak-deck-audience-card mak-deck-audience-card--peach"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.52, delay: 0.06 }}
            >
              <span className="mak-deck-audience-card-snow" aria-hidden />
              <div className="mak-deck-audience-card-body">
                <div className="mak-deck-audience-icon-wrap">
                  <Puzzle className="mak-deck-audience-icon" strokeWidth={1.35} aria-hidden />
                </div>
                <h3 className="mak-deck-audience-card-title">Для психологов</h3>
                <p className="mak-deck-audience-card-text">
                  Помогите пациентам выразить свои эмоции и мысли с помощью визуальных образов — часто это бывает
                  гораздо проще, чем словами.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mak-deck-audience-card mak-deck-audience-card--purple"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.52, delay: 0.12 }}
            >
              <span className="mak-deck-audience-card-arc" aria-hidden />
              <div className="mak-deck-audience-card-body">
                <div className="mak-deck-audience-icon-wrap">
                  <span className="mak-deck-audience-icon-pointing" aria-hidden>
                    <Star className="mak-deck-audience-mini-star" strokeWidth={2} aria-hidden />
                    <Hand className="mak-deck-audience-hand-icon" strokeWidth={1.35} aria-hidden />
                  </span>
                </div>
                <h3 className="mak-deck-audience-card-title mak-deck-audience-card-title--split">
                  <span className="mak-deck-audience-title-soft">Для личного</span>
                  <span className="mak-deck-audience-title-strong">использования</span>
                </h3>
                <p className="mak-deck-audience-card-text">
                  Карты помогут вам выразить сложные и абстрактные концепции через образы и ассоциации для развития
                  личности, самопознания и достижения целей.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mak-deck-audience-card mak-deck-audience-card--lavender"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.52, delay: 0.18 }}
            >
              <span className="mak-deck-audience-lavender-blob mak-deck-audience-lavender-blob--tr" aria-hidden />
              <span className="mak-deck-audience-lavender-blob mak-deck-audience-lavender-blob--br" aria-hidden />
              <div className="mak-deck-audience-card-body">
                <div className="mak-deck-audience-icon-wrap mak-deck-audience-icon-wrap--psi">
                  <BookOpen className="mak-deck-audience-icon mak-deck-audience-book-icon" strokeWidth={1.35} aria-hidden />
                  <span className="mak-deck-audience-psi" aria-hidden>
                    Ψ
                  </span>
                </div>
                <h3 className="mak-deck-audience-card-title">Для арт-терапевтов</h3>
                <p className="mak-deck-audience-card-text">
                  Ваши клиенты смогут визуализировать свои эмоции и переживания через образы и символы, а вы —
                  поможете им раскрыть глубинные аспекты своей психики.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mak-section mak-deck-detail-techniques-intro" aria-labelledby="deck-techniques-intro-heading">
        <div className="mak-container">
          <motion.div
            className="mak-deck-techniques-intro-card mak-hover-glow"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mak-deck-techniques-intro-text">
              <h2 id="deck-techniques-intro-heading" className="mak-deck-techniques-intro-title font-serif-display">
                Техники для работы
              </h2>
              <p className="mak-deck-techniques-intro-sub">
                с метафорическими картами {config.nameplateLine2}
              </p>
            </div>
            <span className="mak-deck-techniques-intro-icon-wrap" aria-hidden>
              <MousePointerClick className="mak-deck-techniques-intro-icon" strokeWidth={1.35} />
            </span>
          </motion.div>

          <div className="mak-tech-cards-grid" role="list">
            {config.techniques.map((tech, idx) => {
              const Icon = TECHNIQUE_ICON[tech.icon];
              return (
                <motion.article
                  key={tech.id}
                  role="listitem"
                  className={`mak-tech-card mak-tech-card--${tech.variant}`}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.48, delay: idx * 0.06 }}
                >
                  <div className={`mak-tech-card-icon-wrap mak-tech-card-icon-wrap--${tech.variant}`}>
                    <Icon className="mak-tech-card-icon-svg" strokeWidth={1.35} aria-hidden />
                  </div>
                  <h3 className="mak-tech-card-title font-serif-display">{tech.title}</h3>
                  <p className="mak-tech-card-teaser">{tech.teaser}</p>
                  <button
                    type="button"
                    className="mak-tech-readmore"
                    onClick={() => setOpenTechniqueId(tech.id)}
                  >
                    Читать подробнее
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {openTechnique &&
        createPortal(
          <div
            className="mak-tech-modal-overlay"
            role="presentation"
            onClick={() => setOpenTechniqueId(null)}
            onKeyDown={(e) => e.key === 'Escape' && setOpenTechniqueId(null)}
          >
            <div
              className="mak-tech-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mak-tech-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                type="button"
                className="mak-tech-modal-close"
                aria-label="Закрыть"
                onClick={() => setOpenTechniqueId(null)}
              >
                <span aria-hidden>×</span>
              </button>
              <h2 id="mak-tech-modal-title" className="mak-tech-modal-title">
                {openTechnique.modalTitle}
              </h2>
              <div className="mak-tech-modal-scroll">
                <TechniqueModalBlocks blocks={openTechnique.blocks} />
              </div>
            </div>
          </div>,
          document.body,
        )}

      <section className="mak-section mak-soft">
        <div className="mak-container">
          <motion.div
            className="mak-cta-next"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <CtaNextStepsSection tryHref={ONLINE_APP_URL} examplesPath="/techniques" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
