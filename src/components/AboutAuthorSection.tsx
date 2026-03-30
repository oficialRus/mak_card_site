import React from 'react';
import { motion } from 'framer-motion';

const AboutAuthorSection: React.FC = () => {
  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="author" className="mak-author-section mak-section">
      <div className="mak-container">
        <div className="mak-author-grid">
          <motion.div
            className="mak-author-photo-wrap"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mak-author-photo-placeholder"
              role="img"
              aria-label="Фото автора — скоро"
            >
              <span className="mak-author-photo-label">Фото скоро</span>
            </div>
          </motion.div>

          <motion.div
            className="mak-author-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="mak-author-kicker">Об авторе</p>
            <h2 className="mak-author-name font-serif-display">Имя Фамилия</h2>
            <p className="mak-author-role">Психолог, автор методики, создатель Garmonia-MAK</p>
            <div className="mak-author-divider" aria-hidden />
            <div className="mak-author-body">
              <p>
                Более 12 лет я изучаю пространство между словами — то, где живут настоящие ответы. Как психолог, я видела,
                как клиенты часами говорят о проблеме, не приближаясь к её сути. Метафорические образы изменили всё.
              </p>
              <p>
                Garmonia-MAK — это результат тысяч часов практики, исследований юнгианской психологии, гештальта и
                нейронауки. Каждая карта создана с намерением — открыть дверь туда, куда слова не добираются.
              </p>
              <p>
                Моя миссия — сделать глубинную психологическую работу доступной каждому. Не только в кабинете терапевта,
                но и в любой момент жизни, когда нужна ясность и связь с собой.
              </p>
            </div>

            <div className="mak-author-divider mak-author-divider--before-stats" aria-hidden />

            <div className="mak-author-stats" role="list">
              <div className="mak-author-stat" role="listitem">
                <span className="mak-author-stat-value">12+</span>
                <span className="mak-author-stat-label">лет практики</span>
              </div>
              <div className="mak-author-stat-sep" aria-hidden />
              <div className="mak-author-stat" role="listitem">
                <span className="mak-author-stat-value">3000+</span>
                <span className="mak-author-stat-label">клиентов</span>
              </div>
              <div className="mak-author-stat-sep" aria-hidden />
              <div className="mak-author-stat" role="listitem">
                <span className="mak-author-stat-value">126</span>
                <span className="mak-author-stat-label">карт создано</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorSection;
