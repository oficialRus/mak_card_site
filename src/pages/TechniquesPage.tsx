import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import makData from '../data/makTechniques.json';
import { ONLINE_APP_URL } from '../constants/site';

function isSubBullet(line: string) {
  const t = line.trim();
  return /^[—–\-•]\s/.test(t) || /^[—–\-•]$/.test(t);
}

function stripSubBullet(line: string) {
  return line.trim().replace(/^[—–\-•]\s*/, '');
}

/** Разбивает тело техники: абзацы по \\n\\n; строки с «—» после текста шага — подсписок. */
function TechniqueBody({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <div className="mak-tech-body">
      {blocks.map((block, bi) => {
        const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
        if (lines.length === 0) return null;

        const stepLines: string[] = [];
        const subLines: string[] = [];

        for (const line of lines) {
          if (isSubBullet(line)) {
            subLines.push(stripSubBullet(line));
          } else {
            stepLines.push(line);
          }
        }

        const stepText = stepLines.join(' ');

        return (
          <div key={bi} className="mak-tech-step-block">
            {stepText ? <p className="mak-tech-step-line">{stepText}</p> : null}
            {subLines.length > 0 ? (
              <ul className="mak-tech-sublist">
                {subLines.map((s, si) => (
                  <li key={si}>{s}</li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function TechniquesPage() {
  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="mak-tech-main">
      <section className="mak-tech-hero mak-section">
        <div className="mak-container">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
          >
            <p className="mak-tech-eyebrow">Garmonia-MAK · карты и AR</p>
            <h1 className="mak-tech-title font-serif-display">
              Техники для работы <span className="text-gold-subtle">с метафорическими картами</span>
            </h1>
          </motion.div>
          <div className="mak-tech-intro">
            {makData.intro.map((para, i) => (
              <motion.p
                key={i}
                className="mak-tech-intro-p"
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
          <motion.div
            className="mak-tech-cta-row"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <a
              href={ONLINE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mak-primary-btn mak-link-btn"
            >
              Открыть приложение
            </a>
            <Link to="/" className="mak-secondary-btn mak-link-btn">
              На главную
            </Link>
          </motion.div>
          <p className="mak-tech-note">
            Техники рассчитаны на использование вместе с мобильным приложением Garmonia-MAK (AR-ролики и озвучка).
          </p>
        </div>
      </section>

      <section className="mak-section mak-soft">
        <div className="mak-container">
          <h2 className="mak-section-title">Техники</h2>
          <p className="mak-section-text mak-tech-section-lead">
            Раскройте карточку, чтобы прочитать шаги. Двигайтесь в своём темпе и опирайтесь на свою трактовку образов.
          </p>
          <div className="mak-tech-accordion-list">
            {makData.techniques.map((item, idx) => (
              <motion.details
                key={item.title}
                className="mak-tech-details glass-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.02, 0.24) }}
              >
                <summary className="mak-tech-summary">{item.title}</summary>
                <TechniqueBody text={item.body} />
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
