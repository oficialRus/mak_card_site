import React from 'react';

const OZON_YA_VYBIRAJU_URL = 'https://www.wildberries.ru/seller/250109173';
const OZON_GARMONIA_DNYA_URL = 'https://www.ozon.ru/seller/garmonia-mak/';

const OzonBuyPage: React.FC = () => {
  return (
    <main className="mak-ozon-page">
      <section className="mak-section">
        <div className="mak-container">
          <h1 className="mak-section-title">Выберите, где хотите приобрести</h1>
          <div className="mak-ozon-actions">
            <a
              href={OZON_YA_VYBIRAJU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mak-ozon-btn mak-market-btn-wb"
            >
              WB
            </a>

            <a
              href={OZON_GARMONIA_DNYA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mak-ozon-btn mak-market-btn-ozon"
            >
              Ozon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OzonBuyPage;
