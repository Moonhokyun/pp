import React from 'react';
import './IndexPage.css';
import listeningMindLogo from '../assets/listeningMind.svg';
import dangenLogo from '../assets/dangen.svg';
import { useText } from '../hooks/useText';

const IndexPage = () => {
  const t = useText;

  return (
    <section className="slide index-section">
      <div className="container" style={{ justifyContent: 'center', gap: '40px' }}>
        <h2 className="index-header">{t('INDEX_TITLE')}</h2>
        
        <div className="index-content">
            {/* ListeningMind Section */}
            <div className="index-group">
                <div className="brand-header">
                    <img src={listeningMindLogo} className="brand-logo" alt="Listening Mind" />
                    <span className="brand-name">ListeningMind</span>
                </div>
                <ul className="index-list">
                     <li>
                        <span className="index-num">1</span>
                        <span className="index-desc">{t('INDEX_LM_DESC_1')}</span>
                        <span className="index-page-num">5</span>
                    </li>
                    <li>
                        <span className="index-num">2</span>
                        <span className="index-desc">{t('INDEX_LM_DESC_2')}</span>
                        <span className="index-page-num">11</span>
                    </li>
                    <li>
                        <span className="index-num">3</span>
                        <span className="index-desc">{t('INDEX_LM_DESC_3')}</span>
                        <span className="index-page-num">17</span>
                    </li>
                    <li>
                        <span className="index-num">4</span>
                        <span className="index-desc">{t('INDEX_LM_DESC_4')}</span>
                        <span className="index-page-num">23</span>
                    </li>
                </ul>
            </div>

            {/* Dangen Section */}
            <div className="index-group" style={{ marginTop: '40px' }}>
                <div className="brand-header">
                    <img src={dangenLogo} className="brand-logo" alt="Dangen" />
                    <span className="brand-name">당근 모임 운영</span>
                </div>
                <ul className="index-list">
                    <li>
                        <span className="index-num">5</span>
                        <span className="index-desc">{t('INDEX_DG_DESC_1')}</span>
                        <span className="index-page-num">29</span>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default IndexPage;
