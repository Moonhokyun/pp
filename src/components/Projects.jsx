import React from "react";
import "./Projects.css";

import listeningMindLogo from "../assets/listeningMind.svg";

// Data
import { projectData } from "../data/projectData";

// Components
import ProjectCover from "./ProjectCover";
import ProjectProblem from "./ProjectProblem";
import ProjectStrategy from "./ProjectStrategy";
import ProjectSolutionA from "./ProjectSolutionA";
import ProjectSolution from "./ProjectSolution"; // Reused for Solution B
import ProjectImpact from "./ProjectImpact";

const Projects = () => {
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
            </div>
             {/* Right Column (Simplified) */}
             <div className="context-right">
                 <div style={{width:'100%', height:'100%', background:'#f5f5f5', display:'flex', alignItems:'center', justifyContent:'center'}}>
                     Context Chart Placeholder
                 </div>
             </div>
          </div>
        </div>
      </section>

      {projectData.map((project) => (
        <React.Fragment key={project.id}>
          {/* Page 1: Overview */}
          <section className="slide project-cover-slide" style={{ padding: 0 }}>
             <ProjectCover project={project} />
          </section>

          {/* Page 2: Problem Definition */}
          <section className="slide project-problem-slide">
             <ProjectProblem problem={project.problem} />
          </section>

          {/* Page 3: Strategy & Hypothesis */}
          <section className="slide project-strategy-slide" style={{ padding: 0 }}>
             <ProjectStrategy strategy={project.strategy} />
          </section>

          {/* Page 4: Solution A (Core Feature) */}
          <section className="slide project-solution-a-slide" style={{ padding: 0 }}>
             <ProjectSolutionA solutionA={project.solutionA} />
          </section>

          {/* Page 5: Solution B (Detail & Deep Dive) */}
          <section className="slide project-solution-b-slide" style={{ padding: 0 }}>
             <ProjectSolution 
                sectionTitle="4. 디테일 솔루션 (Detail Solution)"
                title={project.solutionB?.title} 
                subtitle={project.solutionB?.description}
                asis={{
                    image: project.solutionB?.asIs?.image,
                    annotationDesc: project.solutionB?.asIs?.desc
                }}
                tobe={{
                    image: project.solutionB?.toBe?.image,
                    annotationDesc: project.solutionB?.toBe?.desc
                }}
             />
          </section>

          {/* Page 6: Impact & Lesson */}
          <section className="slide project-impact-slide">
             <ProjectImpact impact={project.impact} />
          </section>
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
