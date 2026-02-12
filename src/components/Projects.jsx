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

import { useText } from "../hooks/useText";

const Projects = () => {
  const t = useText;
  
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
                <span>{t('PROJECTS_INTRO_TITLE')}</span>
              </div>
              <h2 className="context-title">
                  {t('PROJECTS_CONTEXT_TITLE').split('\n').map((line, i) => (
                      <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))}
              </h2>

              <h3 className="context-subtitle">{t('PROJECTS_CONTEXT_SUBTITLE')}</h3>
              <p className="context-desc">
                  {t('PROJECTS_CONTEXT_DESC').split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                          {line}<br/>
                      </React.Fragment>
                  ))}
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
                sectionTitle={t('SECTION_LABEL_SOLUTION_B')}
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
                image={project.solutionB?.image}
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
