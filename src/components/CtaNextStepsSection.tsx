import { Link } from 'react-router-dom';

type CtaNextStepsSectionProps = {
  /** Без ссылки — карточка «Купить» без перехода (временно или до появления URL) */
  buyHref?: string;
  /** true — открыть в новой вкладке (внешняя витрина) */
  buyExternal?: boolean;
  tryHref: string;
  examplesPath: string;
};

function DecoSparkle({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <svg className="mak-cta-next-deco-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M60 8l10 38 38 10-38 10-10 38-10-38-38-10 38-10 10-38z"
          opacity="0.22"
        />
      </svg>
    </span>
  );
}

function DecoStarburst({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <svg className="mak-cta-next-deco-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" opacity="0.2">
          <path d="M60 4l6 48 48 6-48 6-6 48-6-48-48-6 48-6 6-48z" />
        </g>
      </svg>
    </span>
  );
}

function DecoHeart({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <svg className="mak-cta-next-deco-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M60 102C32 78 14 62 14 42c0-14 11-24 26-24 8 0 16 4 20 10 4-6 12-10 20-10 15 0 26 10 26 24 0 20-18 36-46 60z"
          opacity="0.25"
        />
      </svg>
    </span>
  );
}

const cardBase = 'mak-cta-next-card';

export default function CtaNextStepsSection({
  buyHref,
  buyExternal = false,
  tryHref,
  examplesPath,
}: CtaNextStepsSectionProps) {
  const buyCardClass = `${cardBase} mak-cta-next-card--rose mak-cta-next-card--tilt-left`;
  const buyCardInner = (
    <>
      <DecoSparkle className="mak-cta-next-card-deco" />
      <span className="mak-cta-next-card-label">Купить</span>
    </>
  );

  return (
    <>
      <h2 className="mak-cta-next-heading font-serif-display">Начнем жить с гармонией?</h2>
      <div className="mak-cta-next-cards">
        {buyHref ? (
          <a
            href={buyHref}
            {...(buyExternal
              ? { target: '_blank' as const, rel: 'noopener noreferrer' as const }
              : {})}
            className={buyCardClass}
          >
            {buyCardInner}
          </a>
        ) : (
          <div className={`${buyCardClass} mak-cta-next-card--no-link`} aria-label="Купить">
            {buyCardInner}
          </div>
        )}
        <a
          href={tryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardBase} mak-cta-next-card--peach`}
        >
          <DecoStarburst className="mak-cta-next-card-deco" />
          <span className="mak-cta-next-card-label">Попробовать онлайн</span>
        </a>
        <Link to={examplesPath} className={`${cardBase} mak-cta-next-card--purple mak-cta-next-card--tilt-right`}>
          <DecoHeart className="mak-cta-next-card-deco" />
          <span className="mak-cta-next-card-label mak-cta-next-card-label--light">Посмотреть примеры вопросов</span>
        </Link>
      </div>
    </>
  );
}
