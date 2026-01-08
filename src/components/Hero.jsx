import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="slide hero-section">
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="hero-content">
            <span className="hero-label" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: 'var(--color-bg-alt)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              Product Designer Portfolio
            </span>
            <h1 className="hero-title" style={{ fontSize: '4rem', lineHeight: '1.2', fontWeight: '800', marginBottom: '32px', letterSpacing: '-0.02em' }}>
              <span className="block" style={{ display: 'block' }}>데이터와 기술로</span>
              <span className="block" style={{ display: 'block' }}>비즈니스 임팩트를 만드는</span>
              <span className="block text-primary" style={{ display: 'block', color: 'var(--color-primary)' }}>UX 디자이너 문호균입니다.</span>
            </h1>
            <p className="hero-description" style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
              심미성을 넘어 생산성을, 직관을 넘어 논리를 설계합니다.<br />
              개발 생산성을 높이고 비즈니스 성과를 견인하는 디자인을 지향합니다.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '16px' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem', borderRadius: '12px' }}>프로젝트 보기</a>
              <a href="/resume.pdf" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.125rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>이력서 다운로드</a>
            </div>
          </div>
          <div className="hero-visual">
             {/* Quantitative Impact Visualization */}
             <div className="visual-mockup-container" style={{ position: 'relative', width: '100%', height: '500px', background: '#F8FAFC', borderRadius: '32px', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)' }}>
                 <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#64748B', marginBottom: '40px' }}>Server Ready Time (Efficiency)</div>
                 <div style={{ display: 'flex', alignItems: 'flex-end', height: '240px', gap: '60px' }}>
                    
                    {/* Before Bar */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '80px', height: '200px', background: '#E2E8F0', borderRadius: '12px 12px 0 0', position: 'relative' }}></div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#94A3B8' }}>22.6s</span>
                        <span style={{ fontSize: '0.875rem', color: '#CBD5E1' }}>AS-IS</span>
                    </div>

                    {/* Arrow */}
                    <div style={{ marginBottom: '80px', fontSize: '2rem', color: '#CBD5E1' }}>→</div>

                    {/* After Bar */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '80px', height: '10px', background: '#3B82F6', borderRadius: '12px 12px 0 0', position: 'relative', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}></div>
                         <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6' }}>0.2s</span>
                         <span style={{ fontSize: '0.875rem', color: '#3B82F6', fontWeight: '600' }}>TO-BE</span>
                    </div>

                 </div>
                 <div style={{ marginTop: '48px', padding: '20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
                     <span style={{ fontSize: '1rem', color: '#475569', fontWeight: '500' }}>"디자인 시스템 도입으로 <strong>98%</strong> 속도 개선"</span>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
