import React from 'react';
import './AboutResume.css';
import { useText } from '../hooks/useText';

const AboutResume = () => {
  const t = useText;

  const experiences = [
    {
      company: t('RESUME_EXP_1_COMPANY'),
      period: t('RESUME_EXP_1_PERIOD'),
      role: t('RESUME_EXP_1_ROLE'),
      summary: t('RESUME_EXP_1_SUMMARY')
    },
    {
      company: t('RESUME_EXP_2_COMPANY'),
      period: t('RESUME_EXP_2_PERIOD'),
      role: t('RESUME_EXP_2_ROLE'),
      summary: t('RESUME_EXP_2_SUMMARY')
    },
    {
      company: t('RESUME_EXP_3_COMPANY'),
      period: t('RESUME_EXP_3_PERIOD'),
      role: t('RESUME_EXP_3_ROLE'),
      summary: t('RESUME_EXP_3_SUMMARY')
    }
  ];

  return (
    <section id="about" className="slide about-resume-section">
      <div className="container about-resume-container">
        
        {/* Header with Sticky Message */}
        <div className="resume-header">
            <div className="header-top">
                <h2 className="section-label">About Me</h2>
                <div className="resume-links">
                    <span className="info-item">{t('RESUME_PROFILE_EMAIL')}</span>
                    <span className="info-item">{t('RESUME_PROFILE_PHONE')}</span>
                    <a href="#" className="info-link">{t('RESUME_PROFILE_LINKEDIN')}</a>
                </div>
            </div>
            <div className="sticky-message-container">
                <h1 className="sticky-message">
                    <span className="sticky-highlight">{t('RESUME_STICKY_HIGHLIGHT')}</span><br/>
                    {t('RESUME_STICKY_ROLE')} <span className="text-primary">{t('RESUME_PROFILE_NAME').split('(')[0]}</span>{t('RESUME_STICKY_SUFFIX')}
                </h1>
            </div>
        </div>

        <div className="resume-grid">
            {/* Left Column: Experience */}
            <div className="resume-left-col">
                <h3 className="resume-section-label">{t('RESUME_EXP_TITLE')}</h3>
                <div className="resume-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="resume-item">
                            <div className="resume-meta">
                                <span className="resume-company">{exp.company}</span>
                                <span className="resume-period">{exp.period}</span>
                            </div>
                            <div className="resume-content">
                                <span className="resume-role">{exp.role}</span>
                                <p className="resume-summary">{exp.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Education & Activities Combined */}
            <div className="resume-right-col">
                <h3 className="resume-section-label">{t('RESUME_EDU_ACT_TITLE')}</h3>
                <div className="resume-sub-group">
                    {/* Education Item */}
                    <div className="resume-item simple">
                        <div className="resume-meta">
                            <span className="resume-company">{t('RESUME_EDU_1_SCHOOL')}</span>
                            <span className="resume-period">{t('RESUME_EDU_1_PERIOD')}</span>
                        </div>
                        <div className="resume-content">
                            <span className="resume-role">{t('RESUME_EDU_1_MAJOR')}</span>
                            <p className="resume-summary">{t('RESUME_EDU_1_DESC')}</p>
                        </div>
                    </div>

                    {/* Activities Item */}
                    <div className="resume-item simple">
                        <div className="resume-meta">
                            <span className="resume-company">{t('RESUME_ACT_1_TITLE')}</span>
                            <span className="resume-period">{t('RESUME_ACT_1_PERIOD')}</span>
                        </div>
                        <div className="resume-content">
                            <p className="resume-summary">{t('RESUME_ACT_1_DESC')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutResume;
