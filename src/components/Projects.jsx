import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: "project-1",
      title: "Data Persistence & Retention",
      subtitle: "분석 데이터 영속성 확보를 통한 이탈 방지",
      period: "약 7개월",
      role: "기획(60%), 디자인(100%), 퍼블리싱(100%)",
      team: "PM 1, FE 1, BE 1, PD 1",
      imageFiles: { cover: "project1_cover.png", problem: "project1_problem.png", solution: "project1_solution.png" },
      tags: ["Retention", "Data Archiving", "UX Writing"],
      problem: "월 단위 데이터 갱신으로 메월 말일마다 데이터가 소실되어, 고객이 엑셀로 백업하는 불필요한 노동(Toil)을 반복하고 있었습니다.",
      cause: "시스템 구조상 과거 데이터를 덮어쓰는 방식이었고, 시계열 분석을 위한 DB 설계가 고려되지 않았습니다.",
      solution: "최대 4년 치 데이터를 보관하는 아카이빙 구조와 증감률을 시각화하는 대시보드를 구축했습니다.",
      processTitle: "DB 비용 이슈를 설득하고, 최적의 저장 기간을 합의하다",
      processDetails: [
        { label: "Conflict", content: "초기 개발팀은 '4년 치 데이터를 모두 저장하면 서버 비용이 감당 안 된다'며 반대했습니다." },
        { label: "Persuasion", content: "유저 로그 분석을 통해 '최근 1년 집중 조회 + 4년 전 분기별 조회' 패턴을 발견, Cold/Hot Data 분리 저장을 제안하여 비용과 가치를 모두 잡았습니다." }
      ],
      outcome: "다운로드 과업 290회 감소 및 타겟 유저 일 평균 사용량 2회 증가.",
      lesson: "데이터를 단순히 보여주는 것을 넘어, 고객이 그 데이터를 '소유'하고 있다고 느끼게 하는 것이 리텐션의 핵심임을 배웠습니다.",
      visualColor: "#F5F5F7"
    },
    {
      id: "project-2",
      title: "Search Filter Optimization",
      subtitle: "검색 필터 UI 재배치를 통한 핵심 기능 활성화",
      period: "약 2개월",
      role: "기획(60%), 디자인(100%), 퍼블리싱(100%)",
      team: "PM 1, FE 1, BE 1, PD 1",
      imageFiles: { cover: "project2_cover.png", problem: "project2_problem.png", solution: "project2_solution.png" },
      tags: ["Growth Hacking", "UI Optimization", "Viewport"],
      problem: "핵심 기능인 '상위 키워드 필터'의 사용률이 4.5%에 불과해 인사이트 제공에 어려움이 있었습니다.",
      cause: "뷰포트 분석 결과, 필터 버튼이 노트북 Fold Line 아래에 위치하여 유저가 존재 자체를 몰랐습니다.",
      solution: "필터 및 일괄 등록 버튼을 테이블 최상단(Header)으로 이동하고, '상위 500개 등록' 원클릭 프리셋을 제공했습니다.",
      processTitle: "관습적인 UI 배치를 데이터로 깨트리다",
      processDetails: [
        { label: "Conflict", content: "기획팀에서는 '필터는 원래 테이블 우측 하단에 있는 것이 관례'라며 회의적이었습니다." },
        { label: "Persuasion", content: "뷰포트 히트맵과 타사 벤치마킹 자료로 '발견 가능성'의 중요성을 설득하고 A/B 테스트를 제안했습니다." }
      ],
      outcome: "기능 출시 직후 키워드 등록 수 4,752개 폭증 (+107%) 및 클릭 뎁스 축소.",
      lesson: "화려한 디자인보다 중요한 건, 사용자의 눈길이 닿는 곳에 적절한 트리거를 배치하는 '맥락 설계'임을 깨달았습니다.",
      visualColor: "#FFF7ED"
    },
    {
      id: "project-3",
      title: "Chart Comparison UI & Business Impact",
      subtitle: "차트 비교 UI 설계를 통한 검색량 26.43% 증가 및 특허 등록",
      period: "약 2개월",
      role: "기획(80%), 디자인(100%), 퍼블리싱(100%)",
      team: "PM 1, FE 1, BE 1, PD 1",
      imageFiles: { cover: "project3_cover.png", problem: "project3_problem.png", solution: "project3_solution.png" },
      tags: ["Dual View", "Patent Registered", "Business Impact"],
      problem: "고객은 '우리 브랜드'와 '경쟁사' 데이터를 비교하고 싶은데, 탭을 전환하는 순간 앞의 숫자를 잊어버리는 페인 포인트가 있었습니다.",
      cause: "단일 뷰(Single View) 구조가 '비교 분석'이라는 사용자의 핵심 과업을 방해하고 있었습니다.",
      solution: "화면을 양쪽으로 나누어 동기화(Sync)되는 '듀얼 뷰(Dual View)' 인터페이스를 도입했습니다.",
      processTitle: "렌더링 성능 저하를 기술적으로 해결하다",
      processDetails: [
        { label: "Challenge", content: "차트 두 개를 동시에 띄우니 브라우저 퍼포먼스 이슈가 발생했습니다." },
        { label: "Collaboration", content: "프론트엔드 개발자와 협업하여 보이지 않는 데이터는 렌더링하지 않는 Lazy Loading을 적용해 해결했습니다. (특허 등록)" }
      ],
      outcome: "검색 과업량 26.43% 증가 및 UI/UX 설계 기술 특허 등록.",
      lesson: "기술적 제약을 UX로 풀지 않고, 개발자와 함께 기술 자체를 고도화했을 때 진정한 혁신이 나온다는 것을 배웠습니다.",
      visualColor: "#EEF2FF"
    },
    {
      id: "project-4",
      title: "Design System & Dev Efficiency",
      subtitle: "디자인 시스템 구축: 개발 생산성 극대화 및 기술 부채 청산",
      period: "약 6개월",
      role: "기획(50%), 디자인(50%)",
      team: "FE 4, PD 2",
      imageFiles: { cover: "project4_cover.png", problem: "project4_problem.png", solution: "project4_solution.png" },
      tags: ["Design System", "Design Ops", "Dev Collaboration"],
      problem: "서버 구동 30초, 빌드 5분 등 디자인 수정 시마다 개발팀 전체가 멈추는 비효율이 있었습니다.",
      cause: "디자이너의 하드코딩과 중복 코드가 1.3만 라인에 달하는 '디자인 부채'가 원인이었습니다.",
      solution: "컬러/폰트를 토큰화(Design Token)하고, MUI 라이브러리를 커스터마이징하여 '복사+붙여넣기' 환경을 구축했습니다.",
      processTitle: "설득의 언어를 '심미성'에서 '생산성'으로 바꾸다",
      processDetails: [
        { label: "Conflict", content: "'지금 바쁜데 시스템 만들 시간 없다'는 개발팀의 난색." },
        { label: "Persuasion", content: "'일관성' 대신 '퇴근 시간 30분 단축'이라는 생산성의 언어로 설득하여 합의를 이끌어냈습니다." }
      ],
      outcome: "서버 준비 시간 98% 단축(0.247s) 및 전체 코드 라인 40% 감축.",
      lesson: "디자인 시스템은 예쁜 컴포넌트 모음집이 아니라, 팀의 커뮤니케이션 비용을 줄이는 강력한 비즈니스 도구입니다.",
      visualColor: "#F0F9FF"
    },
    {
      id: "project-side",
      title: "Community Growth Strategy (Side Project)",
      subtitle: "당근 모임: 정체된 커뮤니티를 지역 1위로 성장시킨 온보딩 설계",
      period: "2개월 (Ongoing)",
      role: "Community Lead (기획, 운영, 디자인)",
      team: "Solo / Community Member",
      imageFiles: { cover: "sideproject_cover.png", problem: "sideproject_problem.png", solution: "sideproject_solution.png" },
      tags: ["Community Building", "Gamification", "Branding"],
      problem: "신규 회원이 '재미없다'며 1회만 나오고 이탈하는 문제가 심각했습니다.",
      cause: "기존 멤버들끼리만 친한 분위기와 신규 유저를 위한 성취감/목표 부재가 원인이었습니다.",
      solution: "'3회 출석 시 굿즈 증정'이라는 프리퀀시(Frequency) 모델 도입 및 온보딩 설계.",
      processTitle: "유저의 반응을 보며 보상 체계를 튜닝하다",
      processDetails: [
        { label: "History", content: "처음엔 커피 쿠폰을 줬으나 반응이 미미했습니다. 인터뷰를 통해 '소속감' 니즈를 발견하고 자체 제작 굿즈(키링)로 변경 후 반응이 폭발했습니다." }
      ],
      outcome: "참여자 수 4배 증가 및 지역 1위 모임 달성.",
      lesson: "보상의 크기보다 중요한 건 보상의 '의미(소속감)'였습니다.",
      visualColor: "#ECFDF5",
      isSideProject: true
    }
  ];

  return (
    <>
      {/* Listening Mind Context Slide */}
      <section id="projects" className="slide context-slide" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="company-context" style={{ width: '100%' }}>
            <h2 className="section-title">Selected Projects Context</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Service: Listening Mind</h3>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>
              리스닝마인드는 고객의 검색 의도를 탐색하는 서비스입니다.<br/>
              기존 데이터의 편향성을 보완하는 검색 데이터를 기반으로 타겟 키워드, 검색 경로, 유저 그룹 분석을 제공합니다.
            </p>
            
            <div className="context-stats" style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="stat-item">
                <h4 style={{ fontSize: '1rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', marginBottom: '16px' }}>Startups Value</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.125rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <li><strong>패션 회사:</strong> "내부 보고서 신뢰도 향상, 전사적 활용 확대."</li>
                   <li><strong>제약 회사:</strong> "중장기 포트폴리오 구축 시 핵심 의사결정 도구로 활용."</li>
                   <li><strong>뷰티 회사:</strong> "'선 올인원' 제품 출시하여 시장 반응 확보."</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render Projects as Slides */}
      {projectData.map((project, index) => (
        <React.Fragment key={project.id}>
          {/* Slide 1: Title & Overview */}
          <section className="slide project-cover-slide">
            <div className="container">
              <div className="grid-12">
                <div style={{ gridColumn: '1 / span 6' }}>
                  <span className="project-id" style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '24px' }}>
                    {project.isSideProject ? "Side Project" : `Project ${index + 1}`}
                  </span>
                  <h2 className="project-title" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>{project.title}</h2>
                  <p className="project-subtitle" style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>{project.subtitle}</p>
                  <div className="project-tags" style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ padding: '8px 16px', backgroundColor: 'var(--color-bg-alt)', borderRadius: '24px', fontSize: '0.875rem', fontWeight: '600' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Basic Info Metadata */}
                  <div className="project-meta" style={{ paddingTop: '32px', borderTop: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ gridColumn: '1 / span 2' }}>
                        <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginBottom: '4px', fontWeight: 'bold' }}>ROLE & CONTRIBUTION</span>
                        <span style={{ fontSize: '1rem', fontWeight: '500', lineHeight: '1.4' }}>{project.role}</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginBottom: '4px', fontWeight: 'bold' }}>PERIOD</span>
                        <span style={{ fontSize: '1rem', fontWeight: '500' }}>{project.period}</span>
                    </div>
                    <div>
                         <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginBottom: '4px', fontWeight: 'bold' }}>TEAM</span>
                         <span style={{ fontSize: '1rem', fontWeight: '500' }}>{project.team}</span>
                    </div>
                  </div>

                </div>
                <div style={{ gridColumn: '8 / span 5', backgroundColor: project.visualColor, borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                    {project.isSideProject ? "Brand Goods & Frequency System" : "Visual: Dashboard & Data Graph"}
                  </span>
                  <code style={{ background: '#00000010', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--color-primary)', display: 'block', marginTop: '16px' }}>
                      src/assets/img/{project.imageFiles.cover}
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 2: Problem & Cause */}
          <section className="slide project-problem-slide">
            <div className="container">
              <h3 className="section-label" style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '32px' }}>
                1. 문제 발견 & 2. 원인 분석
              </h3>
              <div className="grid-12">
                <div style={{ gridColumn: '1 / span 6' }}>
                  <div style={{ marginBottom: '40px' }}>
                    <span style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--color-text-tertiary)', marginBottom: '8px' }}>PROBLEM</span>
                    <h2 style={{ fontSize: '2rem', lineHeight: '1.3' }}>{project.problem}</h2>
                  </div>
                  {project.cause && (
                    <div className="cause-box" style={{ padding: '32px', backgroundColor: 'var(--color-bg-alt)', borderRadius: '16px' }}>
                      <span style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '8px' }}>CAUSE</span>
                      <p style={{ fontSize: '1.125rem' }}>{project.cause}</p>
                    </div>
                  )}
                </div>
                <div style={{ gridColumn: '8 / span 5', border: '2px dashed var(--color-border)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--color-text-tertiary)', marginBottom: '16px' }}>Problem Context Image</span>
                  <code style={{ background: '#00000010', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                      src/assets/img/{project.imageFiles.problem}
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3: Solution */}
          <section className="slide project-solution-slide" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
            <div className="container">
              <h3 className="section-label" style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '32px' }}>3. 솔루션 (Solution)</h3>
              <div className="grid-12">
                <div style={{ gridColumn: '1 / span 5' }}>
                   <p style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1.4', color: 'var(--color-text-primary)' }}>
                    {project.solution}
                   </p>
                </div>
                <div style={{ gridColumn: '7 / span 6', backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                   <span style={{ color: 'var(--color-text-tertiary)', marginBottom: '16px' }}>Solution Interface / Mockup</span>
                   <code style={{ background: '#00000010', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                      src/assets/img/{project.imageFiles.solution}
                   </code>
                </div>
              </div>
            </div>
          </section>
          
          {/* Slide 4: History & Process (NEW) */}
          <section className="slide project-process-slide">
            <div className="container">
              <h3 className="section-label" style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '32px' }}>4. 히스토리 (History & Process)</h3>
              <div className="grid-12">
                 <div style={{ gridColumn: '1 / span 12', textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2' }}>"{project.processTitle}"</h2>
                 </div>
                 
                 {project.processDetails.map((process, i) => (
                    <div key={i} style={{ gridColumn: i === 0 ? '2 / span 5' : '7 / span 5', backgroundColor: 'var(--color-bg-alt)', padding: '40px', borderRadius: '24px' }}>
                       <span style={{ display: 'inline-block', padding: '6px 12px', borderRadius: '4px', backgroundColor: 'var(--color-primary)', color: '#fff', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '24px' }}>
                         {process.label}
                       </span>
                       <p style={{ fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '500' }}>
                         {process.content}
                       </p>
                    </div>
                 ))}
              </div>
            </div>
          </section>

          {/* Slide 5: Impact */}
          <section className="slide project-impact-slide">
            <div className="container">
              <h3 className="section-label" style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '32px' }}>5. 성과 (Impact)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '40px', lineHeight: '1.2' }}>
                  {project.outcome}
                </h2>
                {project.lesson && (
                  <div className="lesson-box" style={{ marginTop: '40px', padding: '40px', borderTop: '1px solid var(--color-border)' }}>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                      "{project.lesson}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
