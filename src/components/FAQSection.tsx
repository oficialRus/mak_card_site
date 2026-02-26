import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Нужна ли специальная подготовка для работы с картами?',
    answer: 'Нет. Набор включает подробное авторское руководство с описанием техник для самостоятельной работы. Если вы психолог или коуч — карты расширят ваш инструментарий. Если новичок — вы сможете начать работу сразу после распаковки.',
  },
  {
    question: 'Чем метафорические карты отличаются от таро?',
    answer: 'Метафорические ассоциативные карты — это психологический инструмент, а не мистический. Они не предсказывают будущее. Их сила — в проективном механизме: вы видите в образе то, что несёте внутри себя. Это научно обоснованный метод работы с бессознательным.',
  },
  {
    question: 'Как работает AI-психолог в Telegram?',
    answer: 'AI-психолог использует образы вытянутой карты как отправную точку для диалога. Он задаёт открытые вопросы, помогает исследовать ассоциации и связать их с вашей жизненной ситуацией. Это не замена живому психологу, но мощный инструмент для ежедневной рефлексии.',
  },
  {
    question: 'Можно ли работать с картами онлайн, без физической колоды?',
    answer: 'Да. Цифровая платформа включает полный набор образов обеих колод. Вы можете вытягивать карты онлайн и работать с ними в AI-чате. Физическая колода создаёт особую тактильную связь, но цифровой формат полностью функционален.',
  },
  {
    question: 'Есть ли гарантия возврата?',
    answer: 'Да. Мы предоставляем 14-дневную гарантию возврата на физические товары в случае, если колода не подойдёт по любой причине. Важно, что коробка должна быть не повреждена.',
  },
  {
    question: 'Как быстро придёт заказ?',
    answer: 'Доставка по России: 5-10 рабочих дней. Международная доставка: 10-21 рабочий день. Цифровой доступ к платформе открывается сразу после оплаты.',
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b"
      style={{ borderColor: 'rgba(245,200,66,0.1)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span
          className="font-serif-display text-lg font-light pr-8 transition-colors duration-300"
          style={{ color: isOpen ? '#f5c842' : '#f0e8d8' }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          style={{ color: isOpen ? '#f5c842' : 'rgba(245,200,66,0.4)' }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-sm leading-relaxed"
              style={{ color: 'rgba(232,224,208,0.65)' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050818 0%, #080c2a 100%)' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: 'rgba(245,200,66,0.5)' }}>
            Вопросы и ответы
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-light mb-4" style={{ color: '#f0e8d8' }}>
            Часто спрашивают
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
