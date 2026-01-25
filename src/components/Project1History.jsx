import React from 'react';
import './ProjectHistory.css';

const Project1History = () => {
  return (
    <div className="container history-layout">
         {/* Title area */}
         <h3 className="section-label">
            4. 히스토리 (History)
         </h3>

         <div className="history-content">
             <div className="history-header">
                 <h2>
                    지속적인 개선과<br/>고도화 과정
                 </h2>
             </div>

             {/* History Timeline */}
             <div className="history-card-container">
                {/* 1st Improvement */}
                <div className="history-card">
                  <div className="history-label-large">1차 개선</div>
                  <div className="history-image-large">
                     <span>Image</span>
                  </div>
                  <p className="history-desc">
                    기본적인 시계열 데이터 수집 및<br/>
                    DB 구조 설계
                  </p>
                </div>

                {/* 2nd Improvement */}
                <div className="history-card">
                  <div className="history-label-large">2차 개선</div>
                  <div className="history-image-large">
                     <span>Image</span>
                  </div>
                  <p className="history-desc">
                    비교 분석 UI 도입 및<br/>
                    데이터 시각화 강화
                  </p>
                </div>

                {/* 3rd Improvement */}
                <div className="history-card">
                  <div className="history-label-large">3차 개선</div>
                  <div className="history-image-large">
                     <span>Image</span>
                  </div>
                  <p className="history-desc">
                    대용량 데이터 처리 최적화 및<br/>
                    사용자 경험 개선
                  </p>
                </div>
             </div>
         </div>
    </div>
  );
};

export default Project1History;
