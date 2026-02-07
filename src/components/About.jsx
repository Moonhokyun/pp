import React from 'react';
import './About.css';
import { useText } from '../hooks/useText';

const About = () => {
  const t = useText;
  
  // Experience Data Helper
  const getExperience = () => [
    {
      company: t('RESUME_EXP_1_COMPANY'),
      role: t('RESUME_EXP_1_ROLE'),
      projects: t('RESUME_EXP_1_PROJECTS')
    },
    {
      company: t('RESUME_EXP_2_COMPANY'),
      role: t('RESUME_EXP_2_ROLE'),
      projects: t('RESUME_EXP_2_PROJECTS')
    },
    {
      company: t('RESUME_EXP_3_COMPANY'),
      role: t('RESUME_EXP_3_ROLE'),
      projects: t('RESUME_EXP_3_PROJECTS')
    }
  ];

  // Activities Data Helper
  const getActivities = () => [
    {
      title: t('RESUME_ACT_1_TITLE'),
      role: t('RESUME_ACT_1_ROLE'),
      desc: t('RESUME_ACT_1_DESC')
    }
  ];

  // Education Data Helper
  const getEducation = () => [
    {
      school: t('RESUME_EDU_1_SCHOOL'),
      major: t('RESUME_EDU_1_MAJOR'),
      desc: t('RESUME_EDU_1_DESC')
    }
  ];

  // Strength Data Helper
  const getStrength = () => [
    {
      title: t('RESUME_STR_1_TITLE'),
      desc: t('RESUME_STR_1_DESC')
    },
    {
      title: t('RESUME_STR_2_TITLE'),
      desc: t('RESUME_STR_2_DESC')
    },
    {
      title: t('RESUME_STR_3_TITLE'),
      desc: t('RESUME_STR_3_DESC')
    }
  ];

  return (
    <section id="about" className="slide about-section">
      <div className="container about-container">
        {/* Header / Profile */}
        <div className="about-header">
           <div className="profile-info">
              <h1 className="profile-name">{t('RESUME_PROFILE_NAME')}</h1>
              <p className="profile-role">{t('RESUME_PROFILE_ROLE')}</p>
              <div className="profile-contact">
                  <span>Email: {t('RESUME_PROFILE_EMAIL')}</span>
                  <span>Phone: {t('RESUME_PROFILE_PHONE')}</span>
                  <span>Birth: {t('RESUME_PROFILE_BIRTH')}</span>
              </div>
           </div>
           <div className="profile-summary">
              <p className="summary-catchphrase">{t('RESUME_SUMMARY_Catchphrase')}</p>
              <p className="summary-desc">{t('RESUME_SUMMARY_DESC')}</p>
           </div>
        </div>

        <div className="about-content-grid">
            {/* Left Column: Experience */}
            <div className="about-left-col">
                <h2 className="resume-section-title">{t('RESUME_SECTION_EXPERIENCE')}</h2>
                <div className="experience-list">
                    {getExperience().map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3 className="exp-company">{exp.company}</h3>
                            <p className="exp-role">{exp.role}</p>
                            <div className="exp-projects">
                                {Array.isArray(exp.projects) && exp.projects.map((proj, idx) => (
                                    <div key={idx} className="project-item">
                                        <h4 className="project-title">{proj.title}</h4>
                                        <ul className="project-desc-list">
                                            {Array.isArray(proj.desc) && proj.desc.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Other Info */}
            <div className="about-right-col">
                {/* Activities */}
                <div className="resume-group">
                    <h2 className="resume-section-title">{t('RESUME_SECTION_ACTIVITIES')}</h2>
                    {getActivities().map((act, index) => (
                        <div key={index} className="activity-item">
                            <h3 className="act-title">{act.title}</h3>
                            <p className="act-role">{act.role}</p>
                            <ul className="act-desc-list">
                                {Array.isArray(act.desc) && act.desc.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="resume-group">
                    <h2 className="resume-section-title">{t('RESUME_SECTION_EDUCATION')}</h2>
                    {getEducation().map((edu, index) => (
                        <div key={index} className="edu-item">
                            <h3 className="edu-school">{edu.school}</h3>
                            <p className="edu-major">{edu.major}</p>
                            <ul className="edu-desc-list">
                                {Array.isArray(edu.desc) && edu.desc.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Strength */}
                <div className="resume-group">
                    <h2 className="resume-section-title">{t('RESUME_SECTION_STRENGTH')}</h2>
                    {getStrength().map((str, index) => (
                        <div key={index} className="strength-item">
                            <h3 className="str-title">{str.title}</h3>
                            <ul className="str-desc-list">
                                {Array.isArray(str.desc) && str.desc.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="resume-group">
                    <h2 className="resume-section-title">{t('RESUME_SECTION_SKILLS')}</h2>
                    <div className="skills-table">
                        <div className="skill-row">
                            <span className="skill-cat">{t('RESUME_SKILL_CAT_1')}</span>
                            <span className="skill-list-text">{t('RESUME_SKILL_LIST_1')}</span>
                        </div>
                        <div className="skill-row">
                            <span className="skill-cat">{t('RESUME_SKILL_CAT_2')}</span>
                            <span className="skill-list-text">{t('RESUME_SKILL_LIST_2')}</span>
                        </div>
                        <div className="skill-row">
                            <span className="skill-cat">{t('RESUME_SKILL_CAT_3')}</span>
                            <span className="skill-list-text">{t('RESUME_SKILL_LIST_3')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
