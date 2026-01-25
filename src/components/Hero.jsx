import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="slide hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">           
            <h1 className="hero-title">
              <span className="block">Product Designer</span>
              <span className="block">Portfolio</span>              
            </h1>
            
            <h2 className="hero-subtitle">
              데이터와 기술로 비즈니스 임팩트를 만드는 설계<br />
              <span className="text-highlight">서버 시간 22초 단축, 검색량 26% 증가</span>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                <span>#B2B</span> <span style={{ color: 'var(--color-border)' }}>|</span> <span>#Data_Analyze_SaaS</span> <span style={{ color: 'var(--color-border)' }}>|</span> <span>#Japanese</span>  <span style={{ color: 'var(--color-border)' }}>|</span> <span>#AI</span>  <span style={{ color: 'var(--color-border)' }}>|</span> <span>#Community</span>
              </div>
            </h2>

            <div className="hero-info-bar">
              <span className="info-item">문호균(Moon Ho-kyun)</span>
              <span className="separator">|</span>
              <span className="info-item">2023 - 2026</span>
              <span className="separator">|</span>
              <span className="info-item">soulty321@gmail.com</span>
              <span className="separator">|</span>
              <span className="info-item">010-2207-5350</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
