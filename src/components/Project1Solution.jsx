import React from 'react';
import './Project1Solution.css';

const Project1Solution = () => {
  return (
    <div className="container p1-solution-layout">
      {/* Header Area */}
      <div className="p1-solution-header">
        <h3 className="section-label">3. 솔루션 (Solution)</h3>
        <div className="p1-heading-group">
           <h2>단일 뷰에서 듀얼 뷰로의 확장</h2>
           <p>기존 단일 화면(AS-IS)이 유발하단 '기억 의존' 문제를 해결하기 위해,<br/>두 데이터를 나란히 비교하는 대시보드(TO-BE)를 설계했습니다.</p>
        </div>
      </div>

      {/* Visual Comparison Area (Monitor Style) */}
      <div className="p1-monitor-frame">
          {/* AS-IS (Left) */}
          <div className="p1-vis-half p1-vis-asis">
              <div className="p1-vis-label">AS-IS</div>
              <div className="p1-vis-content">
                  <div className="p1-mock-img-placeholder grayscale">
                     <span>AS-IS Image</span>
                  </div>
                  {/* Annotation */}
                  <div className="p1-annotation p1-anno-asis">
                     <span className="p1-anno-tag">Problem</span>
                     <p>탭 전환 시 이전 데이터 망각<br/>(Memory Reliance)</p>
                  </div>
              </div>
          </div>

          {/* Divider */}
          <div className="p1-vis-divider">
             <span>VS</span>
          </div>

          {/* TO-BE (Right) */}
          <div className="p1-vis-half p1-vis-tobe">
              <div className="p1-vis-label">TO-BE</div>
              <div className="p1-vis-content">
                  <div className="p1-mock-img-placeholder highlight">
                     <span>TO-BE Image</span>
                  </div>
                  {/* Annotation */}
                  <div className="p1-annotation p1-anno-tobe">
                     <span className="p1-anno-tag">Solved</span>
                     <p>실시간 데이터 동기화 &<br/>직관적 비교 (Simultaneous Check)</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Project1Solution;
