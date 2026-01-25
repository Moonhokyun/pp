import React, { useState } from "react";
import "./Projects.css";
import listeningMindChart from "../assets/listeningMindChart.png";
import dangenLogo from "../assets/dangen.svg";
import listeningMindLogo from "../assets/listeningMind.svg";
import dangenImg1 from "../assets/dangen_image_1.png";
import dangenImg2 from "../assets/dangen_image_2.png";
import dangenImg3 from "../assets/dangen_image_3.png";

import project1Cover from "../assets/img/project1_cover.png";
import project2Cover from "../assets/img/project2_cover.png";
import project3Cover from "../assets/img/project3_cover.png";
import project4Cover from "../assets/img/project4_cover.png";
import project5Cover from "../assets/img/project5_cover.png";
import myKeyword1 from "../assets/img/myKeyword_1.png";
import ProjectCover from "./ProjectCover";
import Project1Solution from "./Project1Solution";
import Project1History from "./Project1History";
import ProjectSolution from "./ProjectSolution";
import ProjectProcess from "./ProjectProcess";

const Projects = () => {
  const projectData = [
    {
      id: "project-1",
      brand: "리스닝마인드",
      title: "분석/저장 이슈 해결을 통한\n290회의 다운로드 과업 감소",
      subtitle: "분석 데이터 영속성 확보를 통한 이탈 방지",
      period: "약 7개월",
      role: "기획(60%), 디자인(100%), 퍼블리싱(100%)",
      team: "PM 1, FE 1, BE 1, PD 1",
      imageFiles: {
        cover: project1Cover,
        problem: myKeyword1,
        solution: "project1_solution.png",
      },
      tags: ["Retention", "Data Archiving", "UX Writing"],
      problem: (
        <>
          <strong style={{ color: "var(--color-text-primary)" }}>매월 말일마다 데이터가 소실</strong>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>되어,<br /> 고객이 엑셀로 백업하는 </span>
          <strong style={{ color: "var(--color-text-primary)" }}>불필요한 노동을 반복</strong>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>하고 있었습니다.</span>
        </>
      ),
      cause:
        "시스템 구조상 과거 데이터를 덮어쓰는 방식이었고, 시계열 분석을 위한 DB 설계가 고려되지 않았습니다.",
      solution:
        "최대 4년 치 데이터를 보관하는 아카이빙 구조와 증감률을 시각화하는 대시보드를 구축했습니다.",
      processTitle: "DB 비용 이슈를 설득하고, 최적의 저장 기간을 합의하다",
      processDetails: [
        {
          label: "Conflict",
          content:
            "초기 개발팀은 '4년 치 데이터를 모두 저장하면 서버 비용이 감당 안 된다'며 반대했습니다.",
        },
        {
          label: "Persuasion",
          content:
            "유저 로그 분석을 통해 '최근 1년 집중 조회 + 4년 전 분기별 조회' 패턴을 발견, Cold/Hot Data 분리 저장을 제안하여 비용과 가치를 모두 잡았습니다.",
        },
      ],
      outcome: "다운로드 과업 290회 감소 및 타겟 유저 일 평균 사용량 2회 증가.",
      lesson:
        "데이터를 단순히 보여주는 것을 넘어, 고객이 그 데이터를 '소유'하고 있다고 느끼게 하는 것이 리텐션의 핵심임을 배웠습니다.",
      visualColor: "#F5F5F7",
    },
    {
      id: "project-2",
      brand: "리스닝마인드",
      title: "검색량 필터 사용 개선을 통한\n키워드 등록 개수 4,752 증가",
      subtitle: "검색 필터 UI 재배치를 통한 핵심 기능 활성화",
      period: "약 2개월",
      role: "기획(60%), 디자인(100%), 퍼블리싱(100%)",
      team: "PM 1, FE 1, BE 1, PD 1",
      imageFiles: {
        cover: project2Cover,
        problem: "project2_problem.png",
        solution: "project2_solution.png",
      },
      tags: ["Growth Hacking", "UI Optimization", "Viewport"],
      problem: (
        <>
          <strong style={{ color: "var(--color-text-primary)" }}>핵심 기능인 '상위 키워드 필터'의 사용률이 4.5%에 불과</strong>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>해<br /> 인사이트 제공에 어려움이 있었습니다.</span>
        </>
      ),
      cause:
        "뷰포트 분석 결과, 필터 버튼이 노트북 Fold Line 아래에 위치하여 유저가 존재 자체를 몰랐습니다.",
      solution:
        "필터 및 일괄 등록 버튼을 테이블 최상단으로 이동하고, '상위 500개 등록' 원클릭 프리셋을 제공했습니다.",
      processTitle: "관습적인 UI 배치를 데이터로 깨트리다",
      processDetails: [
        {
          label: "Conflict",
          content:
            "기획팀에서는 '필터는 원래 테이블 우측 하단에 있는 것이 관례'라며 회의적이었습니다.",
        },
        {
          label: "Persuasion",
          content:
            "뷰포트 히트맵과 타사 벤치마킹 자료로 '발견 가능성'의 중요성을 설득하고 A/B 테스트를 제안했습니다.",
        },
      ],
      outcome:
        "기능 출시 직후 키워드 등록 수 4,752개 폭증 (+107%) 및 클릭 뎁스 축소.",
      lesson:
        "화려한 디자인보다 중요한 건, 사용자의 눈길이 닿는 곳에 적절한 트리거를 배치하는 '맥락 설계'임을 깨달았습니다.",
      visualColor: "#FFF7ED",
    },
    {
      id: "project-3",
      brand: "리스닝마인드",
      title: "차트 비교 UI 설계를 통한\n검색량 26.43% 증가 달성 및 특허 등록",
      subtitle: "차트 비교 UI 설계를 통한 검색량 26.43% 증가 및 특허 등록",
      period: "약 2개월",
      role: "기획(80%), 디자인(100%), 퍼블리싱(100%)",
      team: "PM 1, FE 1, BE 1, PD 1",
      imageFiles: {
        cover: project3Cover,
        problem: "project3_problem.png",
        solution: "project3_solution.png",
      },
      tags: ["Dual View", "Patent Registered", "Business Impact"],
      problem: (
        <>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>고객은 '우리 브랜드'와 '경쟁사' 데이터를 비교하고 싶은데, </span>
          <strong style={{ color: "var(--color-text-primary)" }}>탭을 전환하는 순간 앞의 숫자를 잊어버리는 페인 포인트</strong>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>가 있었습니다.</span>
        </>
      ),
      cause:
        "단일 뷰 구조가 '비교 분석'이라는 사용자의 핵심 과업을 방해하고 있었습니다.",
      solution:
        "화면을 양쪽으로 나누어 동기화되는 '듀얼 뷰' 인터페이스를 도입했습니다.",
      processTitle: "렌더링 성능 저하를 기술적으로 해결하다",
      processDetails: [
        {
          label: "Challenge",
          content:
            "차트 두 개를 동시에 띄우니 브라우저 퍼포먼스 이슈가 발생했습니다.",
        },
        {
          label: "Collaboration",
          content:
            "프론트엔드 개발자와 협업하여 보이지 않는 데이터는 렌더링하지 않는 Lazy Loading을 적용해 해결했습니다. (특허 등록)",
        },
      ],
      outcome: "검색 과업량 26.43% 증가 및 UI/UX 설계 기술 특허 등록.",
      lesson:
        "기술적 제약을 UX로 풀지 않고, 개발자와 함께 기술 자체를 고도화했을 때 진정한 혁신이 나온다는 것을 배웠습니다.",
      visualColor: "#EEF2FF",
    },
    {
      id: "project-4",
      brand: "리스닝마인드",
      title: "디자인 시스템 구축을 통한\n서버 준비 시간 0.247로 단축",
      subtitle: "디자인 시스템 구축: 개발 생산성 극대화 및 기술 부채 청산",
      period: "약 6개월",
      role: "기획(50%), 디자인(50%)",
      team: "FE 4, PD 2",
      imageFiles: {
        cover: project4Cover,
        problem: "project4_problem.png",
        solution: "project4_solution.png",
      },
      tags: ["Design System", "Design Ops", "Dev Collaboration"],
      problem: (
        <>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>서버 구동 30초, 빌드 5분 등 </span>
          <strong style={{ color: "var(--color-text-primary)" }}>디자인 수정 시마다 개발팀 전체가 멈추는 비효율</strong>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>이 있었습니다.</span>
        </>
      ),
      cause:
        "디자이너의 하드코딩과 중복 코드가 1.3만 라인에 달하는 '디자인 부채'가 원인이었습니다.",
      solution:
        "컬러/폰트를 토큰화하고, MUI 라이브러리를 커스터마이징하여 '복사+붙여넣기' 환경을 구축했습니다.",
      processTitle: "설득의 언어를 '심미성'에서 '생산성'으로 바꾸다",
      processDetails: [
        {
          label: "Conflict",
          content: "'지금 바쁜데 시스템 만들 시간 없다'는 개발팀의 난색.",
        },
        {
          label: "Persuasion",
          content:
            "'일관성' 대신 '퇴근 시간 30분 단축'이라는 생산성의 언어로 설득하여 합의를 이끌어냈습니다.",
        },
      ],
      outcome: "서버 준비 시간 98% 단축(0.247s) 및 전체 코드 라인 40% 감축.",
      lesson:
        "디자인 시스템은 예쁜 컴포넌트 모음집이 아니라, 팀의 커뮤니케이션 비용을 줄이는 강력한 비즈니스 도구입니다.",
      visualColor: "#F0F9FF",
    },
    {
      id: "project-side",
      brand: "당근 모임",
      title: "당근 모임 열혈 유저 사용성 기반\n온보딩 설계로 참여자 4배 증가",
      subtitle: "당근 모임: 정체된 커뮤니티를 지역 1위로 성장시킨 온보딩 설계",
      period: "2개월 (Ongoing)",
      role: "Community Lead (기획, 운영, 디자인)",
      team: "Solo / Community Member",
      imageFiles: {
        cover: project5Cover,
        problem: "sideproject_problem.png",
        solution: "sideproject_solution.png",
      },
      tags: ["Community Building", "Gamification", "Branding"],
      problem: (
        <>
          <strong style={{ color: "var(--color-text-primary)" }}>신규 회원이 '재미없다'며 1회만 나오고 이탈하는 문제</strong>
          <span style={{ fontWeight: 600, color: "#5b5b5b" }}>가 심각했습니다.</span>
        </>
      ),
      cause:
        "기존 멤버들끼리만 친한 분위기와 신규 유저를 위한 성취감/목표 부재가 원인이었습니다.",
      solution:
        "'3회 출석 시 굿즈 증정'이라는 프리퀀시 모델 도입 및 온보딩 설계.",
      processTitle: "유저의 반응을 보며 보상 체계를 튜닝하다",
      processDetails: [
        {
          label: "History",
          content:
            "처음엔 커피 쿠폰을 줬으나 반응이 미미했습니다. 인터뷰를 통해 '소속감' 니즈를 발견하고 자체 제작 굿즈(키링)로 변경 후 반응이 폭발했습니다.",
        },
      ],
      outcome: "참여자 수 4배 증가 및 지역 1위 모임 달성.",
      lesson: "보상의 크기보다 중요한 건 보상의 '의미(소속감)'였습니다.",
      visualColor: "#ECFDF5",
      isSideProject: true,
    },
  ];

  return (
    <>
      {/* Listening Mind Context Slide */}
      <section id="projects" className="slide context-slide">
        <div className="container">
          <div className="context-grid" style={{ justifyContent: 'center', gap: '100px', paddingBottom: '0'}}>
            {/* Left Column */}
            <div className="context-left">
              <div
                style={{
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={listeningMindLogo}
                  alt="ListeningMind Logo"
                  style={{ width: "32px" }}
                />
                <span>리스닝마인드 | 주요 프로젝트 소개</span>
              </div>
              <h2 className="context-title">
                리스닝마인드는
                <br />
                고객의 검색 의도를 탐색
                <br />
                하는 서비스입니다
              </h2>

              <h3 className="context-subtitle">주요 해결 과제</h3>
              <p className="context-desc">
                기존 데이터에서 발견되는 편향적인 특성을 보완하는 검색 데이터를
                다년 간 수집하여,
                <br />
                해당 데이터를 기반으로 타겟 키워드, 검색 경로, 유저 그룹 분석
                등을 제공합니다.
              </p>

              <h3 className="context-subtitle">실제 유저 보이스</h3>
              <ul className="user-voices">
                <li className="voice-item">
                  <span className="voice-icon">👗</span>
                  <p>
                    데이터로 트렌드를 확신하게 되어 내부 보고서의 신뢰도가
                    향상되었고, 연구팀을 넘어 마케팅, MD 등 전사적으로 활용이
                    확대되었어요 (패션 회사 / 데이터 기반 트렌드 예측 및 발굴)
                  </p>
                </li>
                <li className="voice-item">
                  <span className="voice-icon">💊</span>
                  <p>
                    질병 시장 성장성 판단 등 중장기 포트폴리오 구축 시 핵심
                    의사결정 도구로 활용하고 있어요 (제약 회사 / 브랜드 전략
                    수립 및 슬로건 개발)
                  </p>
                </li>
                <li className="voice-item">
                  <span className="voice-icon">🧴</span>
                  <p>
                    검색 데이터 분석 결과 기반으로 '선 올인원' 제품을 출시하여
                    시장에서 좋은 반응을 얻었어요 (뷰티 회사 / 숨겨진 시장 발굴
                    및 히트 상품 개발)
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="context-right">
              {/* Diagram Placeholder */}
              <div className="data-diagram-container">
                <img
                  src={listeningMindChart}
                  alt="Data Diagram"
                  className="data-diagram-img"
                />
              </div>

              {/* Bar Chart */}
              <div className="search-volume-chart">
                <h4 className="chart-title">총 검색량</h4>
                <div className="chart-container">
                  {/* Annotation */}
                  <div className="growth-annotation">
                    8개월만에 전년 대비
                    <br />
                    75% 달성
                  </div>

                  {/* 2022 */}
                  <div className="chart-column">
                    <span className="bar-value">17,846</span>
                    <div className="chart-bar" style={{ height: "5%" }}></div>
                    <span className="bar-label">2022</span>
                  </div>

                  {/* 2023 */}
                  <div className="chart-column">
                    <span className="bar-value">225,755</span>
                    <div className="chart-bar" style={{ height: "63%" }}></div>
                    <span className="bar-label">2023</span>
                  </div>

                  {/* 2024 */}
                  <div className="chart-column">
                    <span className="bar-value">354,699</span>
                    <div className="chart-bar" style={{ height: "100%" }}></div>
                    <span className="bar-label">2024</span>
                  </div>

                  {/* 2025/08 */}
                  <div className="chart-column">
                    <span className="bar-value" style={{ color: "#F43F5E" }}>
                      267,997
                    </span>
                    <div
                      className="chart-bar highlight"
                      style={{ height: "75%" }}
                    ></div>
                    <span className="bar-label">2025/08</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render Projects as Slides */}
      {projectData.map((project, index) => (
        <React.Fragment key={project.id}>
          {/* Side Project Context Slide (Page 25) */}
          {project.isSideProject && (
            <section className="slide context-slide">
              <div className="container">
                <div className="context-grid side-project-grid">
                  {/* Left Column */}
                  <div className="context-left">
                    <div
                      style={{
                        marginBottom: "24px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#FF8A3D",
                        fontWeight: "bold",
                      }}
                    >
                      <img
                        src={dangenLogo}
                        alt="Dangen Logo"
                        style={{ width: "32px" }}
                      />
                      <span>당근 모임 운영 | 사이드프로젝트 소개</span>
                    </div>
                    <h2 className="context-title">
                      지역 내 자기계발 모임 1위를
                      <br />
                      달성하고 사용자들에게
                      <br />
                      성장과 유대 전달
                    </h2>

                    <h3 className="context-subtitle">주요 해결 과제</h3>
                    <p className="context-desc">
                      성장을 목표로 하는 지역 내 회원들을 대상으로 학습 공간
                      대여 및 동기 부여를 제공하며, 회원들에게 모임 내에서
                      유대감과 성취감을 얻을 수 있는 환경을 만들고 있습니다.
                    </p>

                    <h3 className="context-subtitle">실제 유저 보이스</h3>
                    <ul className="user-voices">
                      <li className="voice-item">
                        <span className="voice-icon">🧘</span>
                        <p>
                          집에선 집중이 안 됐는데, 여긴 회비 부담 없이 '의지'만
                          있으면 '집중 환경'이 만들어져서 좋았어요. 옆 사람
                          보면서 자극도 받고, 결과보단 과정에 집중하는 '수련장'
                          같아요.
                        </p>
                      </li>
                      <li className="voice-item">
                        <span className="voice-icon">🙆</span>
                        <p>
                          '50분 공부, 10분 휴식' 방식이 저랑 잘 맞았어요. 꾸준히
                          열려서 '안정감' 있고, 성장 의지 있는 사람들과 부담
                          없이 소통하며 서로 응원하는 분위기가 정말 최고예요.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="context-right">
                    <div className="side-visual-grid">
                      <div className="side-card">
                        <h4 className="side-card-title">
                          모임 TOP 50에서 순위권 유지
                        </h4>
                        <img
                          src={dangenImg1}
                          alt="Top 50 Image"
                          className="side-card-img"
                        />
                      </div>
                      <div className="side-card">
                        <h4 className="side-card-title">LV 4 레벨 유지</h4>
                        <img
                          src={dangenImg2}
                          alt="Lv 4 Badge"
                          className="side-card-img"
                        />
                      </div>
                      <div className="side-card">
                        <h4 className="side-card-title">
                          사용성 기반 모임 운영
                        </h4>
                        <img
                          src={dangenImg3}
                          alt="Sticker Pack"
                          className="side-card-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Slide 1: Title & Overview */}
          {/* Slide 1: Title & Overview */}
          <section className="slide project-cover-slide" style={{ padding: 0 }}>
             <ProjectCover project={project} />
          </section>



          {/* Slide 2: Problem */}
          <section className="slide project-problem-slide">
            <div className="container">
              <h3
                className="section-label"
                style={{
                  fontSize: "1.25rem",
                  color: "var(--color-accent)",
                  marginBottom: "32px",
                }}
              >
                1. 문제 발견
              </h3>
              <div className="grid-12">
                <div style={{ gridColumn: "1 / span 4", height: "100%" }}>
                  <div className="problem-text-column">                    
                    <h2 className="problem-title">
                      {project.problem}
                    </h2>
                    {project.id === "project-1" && (
                      <div className="problem-cards">
                          <div className="problem-card">
                              <span className="problem-card-title">매월 검색 데이터 다운로드를 진행하는 고객사</span>
                              <p className="problem-card-text">핵심 고객사가 매월 검색 데이터 추출 업무를 수행하고, 이후 엑셀에서 수기로 시계열 데이터를 비교 분석하는 작업을 진행하고 있었습니다.</p>
                          </div>
                          <div className="problem-card">
                              <span className="problem-card-title">해당 월 데이터를 다운받지 못하면 리포트에 공백이 발생</span>
                              <p className="problem-card-text">서비스에서는 월 변경이 이루어질 시 이전 월의 데이터 확인이 불가능합니다.</p>
                          </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    gridColumn: "5/ span 8",
                    /* border: "2px dashed var(--color-border)", */
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%", 
                  }}
                >
                  <img
                    src={project.imageFiles.problem}
                    alt="Problem Context"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "fill",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3: Cause */}
          {project.cause && (
            <section className="slide project-cause-slide">
              <div className="container">
                <h3
                  className="section-label"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-accent)",
                    marginBottom: "32px",
                  }}
                >
                  2. 원인 분석
                </h3>
                <div
                  className="cause-box"
                  style={{
                    padding: "60px",
                    backgroundColor: "var(--color-bg-alt)",
                    borderRadius: "24px",
                    textAlign: "center",
                    maxWidth: "900px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",                    
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "var(--color-text-primary)",
                      marginBottom: "24px",
                    }}
                  >
                    CAUSE
                  </span>
                  <p style={{ fontSize: "1.75rem", lineHeight: "1.5" }}>{project.cause}</p>
                </div>
              </div>
            </section>
          )}

          {project.id === "project-1" ? (
             <>
                 <section className="slide p1-solution-slide" style={{ padding: 0 }}>
                     <Project1Solution />
                 </section>
                 <section className="slide p1-history-slide" style={{ padding: 0 }}>
                     <Project1History />
                 </section>
             </>
          ) : (
            <>
              {/* Slide 3: Solution */}
              <section className="slide project-solution-slide" style={{ padding: 0 }}>
                <ProjectSolution 
                  title={project.subtitle}
                  subtitle={project.solution}
                  asis={{
                    annotationDesc: project.problem
                  }}
                  tobe={{
                    image: project.imageFiles.solution,
                    annotationDesc: "Solved: Key usability improvements implemented."
                  }}
                />
              </section>

              {/* Slide 4: History & Process (NEW) */}
              <section className="slide project-process-slide" style={{ padding: 0 }}>
                <ProjectProcess 
                  title={project.processTitle}
                  steps={project.processDetails}
                />
              </section>
            </>
          )}

          {/* Slide 5: Impact */}
          <section className="slide project-impact-slide">
            <div className="container">
              <h3 className="section-label">
                5. 성과 (Impact)
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: "900px",
                  margin: "auto",
                }}
              >
                <h2
                  style={{
                    fontSize: "4rem",
                    fontWeight: "800",
                    color: "var(--color-primary)",
                    marginBottom: "40px",
                    lineHeight: "1.2",
                  }}
                >
                  {project.outcome}
                </h2>
                {project.lesson && (
                  <div
                    className="lesson-box"
                    style={{
                      marginTop: "40px",
                      padding: "40px",
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontStyle: "italic",
                        color: "var(--color-text-secondary)",
                      }}
                    >
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
