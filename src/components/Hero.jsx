import React from 'react';
import './Hero.css';
import { useText } from '../hooks/useText';

const Hero = () => {
  const t = useText;

  return (
    <section className="slide hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">           
            <h1 className="hero-title">
              <span className="block">{t('HERO_TITLE_1')}</span>
              <span className="block">{t('HERO_TITLE_2')}</span>              
            </h1>
            
            <h2 className="hero-subtitle">
              {t('HERO_SUBTITLE_DESC')}<br />
              <span className="text-highlight">{t('HERO_SUBTITLE_HIGHLIGHT')}</span>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                <span>{t('HERO_TAG_B2B')}</span> <span style={{ color: 'var(--color-border)' }}>|</span> <span>{t('HERO_TAG_DATA')}</span> <span style={{ color: 'var(--color-border)' }}>|</span> <span>{t('HERO_TAG_JP')}</span>  <span style={{ color: 'var(--color-border)' }}>|</span> <span>{t('HERO_TAG_AI')}</span>  <span style={{ color: 'var(--color-border)' }}>|</span> <span>{t('HERO_TAG_COMMUNITY')}</span>
              </div>
            </h2>

            <div className="hero-info-bar">
              <span className="info-item">{t('HERO_INFO_NAME')}</span>
              <span className="separator">|</span>
              <span className="info-item">{t('HERO_INFO_YEARS')}</span>
              <span className="separator">|</span>
              <span className="info-item">{t('HERO_INFO_EMAIL')}</span>
              <span className="separator">|</span>
              <span className="info-item">{t('HERO_INFO_PHONE')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
