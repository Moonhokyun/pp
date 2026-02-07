import React from 'react';
import './KeyAchievements.css';
import { useText } from '../hooks/useText';

const KeyAchievements = () => {
  const t = useText;
  
  const achievements = [
    {
      category: t("ACH_1_CATEGORY"),
      value: t("ACH_1_VALUE"),
      title: t("ACH_1_TITLE"),
      desc: t("ACH_1_DESC")
    },
    {
      category: t("ACH_2_CATEGORY"),
      value: t("ACH_2_VALUE"),
      title: t("ACH_2_TITLE"),
      desc: t("ACH_2_DESC")
    },
    {
      category: t("ACH_3_CATEGORY"),
      value: t("ACH_3_VALUE"),
      title: t("ACH_3_TITLE"),
      desc: t("ACH_3_DESC")
    },
    {
      category: t("ACH_4_CATEGORY"),
      value: t("ACH_4_VALUE"),
      title: t("ACH_4_TITLE"),
      desc: t("ACH_4_DESC")
    }
  ];

  return (
    <section className="slide achievements-section">
      <div className="container" style={{ justifyContent: 'center' }} >
        <div className="achievements-header">
           <h2 className="section-title">{t('ACHIEVEMENT_TITLE')}</h2>
           <p className="section-desc">
             {t('ACHIEVEMENT_DESC_1')}<br/>
             {t('ACHIEVEMENT_DESC_2')}<br/> 
             {t('ACHIEVEMENT_DESC_3')}
           </p>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-category">{item.category}</div>
              <div className="achievement-value">{item.value}</div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
