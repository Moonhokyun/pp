import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="slide about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-col">
            <h2 className="section-title">About & Skills</h2>
            <p className="about-intro">
              단순히 그림을 그리는 디자이너가 아닙니다.<br/>
              데이터를 해석하고, 코드를 이해하며,<br/>
              <span className="text-primary text-bold">개발 효율까지 고려한 설계</span>를 하는 프로덕트 디자이너입니다.
            </p>
          </div>
          
          <div className="about-col">
            <div className="skill-group">
              <h3>Technical Skills</h3>
              <ul className="skill-list">
                <li>
                  <strong>Design & AI</strong>
                  <span>Figma, Cursor AI (Pro Level)</span>
                </li>
                <li>
                  <strong>Development</strong>
                  <span>React, CSS/SCSS (코드 기반의 디자인 시스템 구축 가능)</span>
                </li>
                <li>
                  <strong>Data</strong>
                  <span>Data Analysis (GA4, SQL Basic)</span>
                </li>
              </ul>
            </div>

            <div className="skill-group">
              <h3>Work Attitude</h3>
              <ul className="attitude-list">
                <li>
                  <strong>집요함 (Tenacity)</strong>
                  <p>문제의 근본 원인을 찾을 때까지 파고드는 태도로 해결책을 끝까지 도출합니다.</p>
                </li>
                <li>
                  <strong>성장 욕구 (Growth)</strong>
                  <p>새로운 기술(AI)을 적극적으로 수용하여 업무 프로세스를 혁신하고 동료와 나눕니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
