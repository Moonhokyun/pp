import React from 'react';
import './IndexPage.css';
import listeningMindLogo from '../assets/listeningMind.svg';
import dangenLogo from '../assets/dangen.svg';

const IndexPage = () => {
  return (
    <section className="slide index-section">
      <div className="container" style={{ justifyContent: 'center', gap: '40px' }}>
        <h2 className="index-header">Index</h2>
        
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
                        <span className="index-desc">분석/저장 이슈 해결을 통한 290회의 다운로드 과업 감소</span>
                        <span className="index-page-num">5</span>
                    </li>
                    <li>
                        <span className="index-num">2</span>
                        <span className="index-desc">검색량 필터 사용 개선을 통한 키워드 등록 개수 4,752 증가</span>
                        <span className="index-page-num">11</span>
                    </li>
                    <li>
                        <span className="index-num">3</span>
                        <span className="index-desc">차트 비교 UI 설계를 통한 검색량 26.43% 증가 달성 및 특허 등록</span>
                        <span className="index-page-num">17</span>
                    </li>
                    <li>
                        <span className="index-num">4</span>
                        <span className="index-desc">디자인 시스템 구축을 통한 서버 준비 시간 0.247로 단축</span>
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
                        <span className="index-desc">당근 모임 열혈 유저 사용성 기반 온보딩 설계로 참여자 4배 증가</span>
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
