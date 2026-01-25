import React from 'react';
import './KeyAchievements.css';

const KeyAchievements = () => {
  const achievements = [
    {
      category: "개발 생산성",
      value: "-22.4초",
      title: "서버 구동 시간 99% 단축 및 디자인 부채 해결",
      desc: "Cursor AI를 활용해 1.3만 줄의 중복 코드를 진단하고 디자인 시스템을 재구축했습니다. 서버 준비 시간을 22.6초에서 0.2초로 단축하여 팀의 개발 효율성을 극대화했습니다."
    },
    {
      category: "성장 기여",
      value: "+26.4%",
      title: "기능 내 검색량 증가 및 특허 등록",
      desc: "단편적인 데이터 확인의 한계를 넘는 '듀얼 뷰' UI를 설계했습니다. 사용자가 맥락을 비교 분석할 수 있도록 개선하여 검색량을 26.43% 증가시키고 관련 특허를 등록했습니다."
    },
    {
      category: "활성화",
      value: "+107%",
      title: "기능 개선을 통한 키워드 등록 수 폭증 (+4,752개)",
      desc: "핵심 기능임에도 사용률이 저조했던(4.5%) 필터 UI의 위치와 접근성을 개선했습니다. 뷰포트 내 즉시 등록 기능을 도입하여 키워드 등록 수를 2배 이상(+4,752개) 성장시켰습니다."
    },
    {
      category: "워크플로우 최적화",
      value: "-290회",
      title: "반복적인 다운로드 과업 제거 및 리텐션 증대",
      desc: "데이터가 소멸되는 불안감으로 인해 반복되던 엑셀 다운로드 작업을 시계열 분석 기능으로 대체했습니다. 불필요한 과업을 월 290회 줄이고, 타겟 유저의 일평균 사용량을 2배 늘렸습니다."
    }
  ];

  return (
    <section className="slide achievements-section">
      <div className="container" style={{ justifyContent: 'center' }} >
        <div className="achievements-header">
           <h2 className="section-title">데이터와 기술로 비즈니스의 병목을 해결합니다.</h2>
           <p className="section-desc">
             서버 준비 시간 22초 단축, 검색량 26% 증대<br/>
             Cursor AI를 활용한 코드 최적화로 개발 생산성을 높이고,<br/> 
             정량적인 데이터 분석을 통해 고객 행동을 변화시켜 실질적인 비즈니스 성과를 만듭니다.
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
