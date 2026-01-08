import React from 'react';
import './KeyAchievements.css';

const KeyAchievements = () => {
  const achievements = [
    {
      value: "특허 등록",
      label: "차트 비교 UI 혁신",
      desc: "단일 뷰의 한계를 넘는 '듀얼 뷰' 도입으로 검색량 26% 증대 및 기술적 독창성 확보"
    },
    {
      value: "OpEx 절감",
      label: "디자인 시스템 구축",
      desc: "시스템화를 통해 서버 준비 시간 98% 단축(-22초) 및 커뮤니케이션 비용 제로화"
    },
    {
      value: "Churn 방지",
      label: "데이터 영속성 확보",
      desc: "다운로드 과업 290회 감소 및 재방문 유도로 타겟 유저 리텐션 강화"
    },
    {
      value: "+107%",
      label: "핵심 기능 활성화",
      desc: "검색량 필터 접근성 개선으로 키워드 등록 수 4,752개 폭발적 증가"
    }
  ];

  return (
    <section className="slide achievements-section">
      <div className="container">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-value">{item.value}</div>
              <h3 className="achievement-label">{item.label}</h3>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
