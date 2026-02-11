import React, { useState, useEffect } from 'react';
import './ProjectProblem.css';
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectProblem = ({ problem }) => {
  const t = useText;
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (!problem?.title) return;

    // Extract Project ID (e.g., "P1" from "P1_PROBLEM_TITLE")
    // Assuming problem.title is like "P1_PROBLEM_TITLE" key
    const projectIdMatch = problem.title.match(/^(P\d+)_/);
    if (projectIdMatch) {
      const projectId = projectIdMatch[1].toLowerCase(); // p1
      const htmlFileName = `${projectId}Problem.html`;

      fetch(`/stitch_source/${htmlFileName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load ${htmlFileName}`);
          }
          return response.text();
        })
        .then(html => {
          // Extract body content to avoid full HTML document injection
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          // Remove scripts for safety if needed, though local source is trusted
          const scripts = doc.querySelectorAll('script');
          scripts.forEach(script => script.remove());
          setHtmlContent(doc.body.innerHTML);
        })
        .catch(error => {
          console.warn(`Could not load HTML for ${projectId}:`, error);
          setHtmlContent(''); // Clear content on error
        });
    } else {
      setHtmlContent('');
    }
  }, [problem]);

  return (
    <div className="container">
      <div className="section-header">
        <h3 className="section-label">
          {parseForBold(t("SECTION_LABEL_PROBLEM"))}
        </h3>
        {problem?.title && (
          <h2 className="section-title left">{parseForBold(t(problem.title))}</h2>
        )}
      </div>
      <div className="content-grid">
        <div className="problem-text-column">
          <div className="problem-content-wrapper">
            <div className="problem-block">
              <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_BACKGROUND"))}</h4>
              <p className="problem-block-desc">{parseForBold(t(problem?.background))}</p>
            </div>
            <div className="problem-block">
              <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_DATA"))}</h4>
              <p className="problem-block-desc">{parseForBold(t(problem?.quantitative))}</p>
            </div>
            <div className="problem-block">
              <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_VOC"))}</h4>
              <p className="problem-block-desc">{parseForBold(t(problem?.qualitative))}</p>
            </div>
          </div>
        </div>
        <div className="problem-chart-column">
          {htmlContent && (
            <div
              className="problem-chart-container"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectProblem;

