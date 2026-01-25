import React from "react";
import "./ProjectCover.css";

// SVG Paths from src/imports/svg-1b4tjv9841.ts
const svgPaths = {
  p160a1880: "M2570.18 309.572C2330.76 -263.987 1572.99 -659.262 1087.89 -270.601C651.185 79.2924 698.907 759.854 1087.89 1162.11C1490.25 1578.19 2281.52 1663.75 2570.18 1162.11C2736.24 873.521 2698.44 616.826 2570.18 309.572Z",
  p30372680: "M-397.162 -281.667C145.821 -504.918 915.828 -262.971 980.124 320.55C1038.01 845.866 551.55 1268.59 23.1225 1277.55C-523.46 1286.82 -1108.97 815.623 -966.629 287.8C-884.743 -15.8504 -688.037 -162.071 -397.162 -281.667Z",
  p7aab200: "M1208.41 650.975C844.394 501.363 328.115 663.671 284.936 1054.9C246.064 1407.1 572.155 1690.46 926.437 1696.4C1292.89 1702.55 1685.5 1386.56 1590.14 1032.7C1535.27 829.131 1403.41 731.121 1208.41 650.975Z",
};

function BackgroundGradient() {
  return (
    <div className="background-gradient">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 1910 1080">
        <g clipPath="url(#clip0_1_56)" id="Frame 1984079276" opacity="0.5">
          <rect fill="white" height="1080" width="1910" />
          <g id="Light Gradient 03" />
          <g filter="url(#filter0_f_1_56)" id="Vector 3">
            <path d={svgPaths.p30372680} fill="url(#paint0_radial_1_56)" />
          </g>
          <g filter="url(#filter1_f_1_56)" id="Vector 4">
            <path d={svgPaths.p160a1880} fill="url(#paint1_radial_1_56)" />
          </g>
          <g filter="url(#filter2_f_1_56)" id="Vector 5">
            <path d={svgPaths.p7aab200} fill="url(#paint2_radial_1_56)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1841.5" id="filter0_f_1_56" width="2173.1" x="-1088.28" y="-463.817">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_56" stdDeviation="50" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2133" id="filter1_f_1_56" width="2103" x="678" y="-526">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_56" stdDeviation="50" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2100.54" id="filter2_f_1_56" width="2322.86" x="-218.222" y="95.9508">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_56" stdDeviation="250" />
          </filter>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(8.36963e-06 2140.5 -2175.03 -0.0620116 545.385 20.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_56" r="1">
            <stop stopColor="#D6F5FE" />
            <stop offset="0.5" stopColor="#EDEFEF" />
            <stop offset="1" stopColor="#F6E4CF" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(2124.41 286.318 290.983 -2157.9 667.181 398.18)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_56" r="1">
            <stop stopColor="#DBF4FE" />
            <stop offset="0.5" stopColor="#EDEFEF" />
            <stop offset="1" stopColor="#F6E4CF" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.73043e-06 -907.315 -921.627 -0.0634328 870.342 1455.47)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_56" r="1">
            <stop stopColor="#EEF0F4" />
            <stop offset="0.5" stopColor="#F9D8CE" />
            <stop offset="1" stopColor="#F9DFBE" />
          </radialGradient>
          <clipPath id="clip0_1_56">
            <rect fill="white" height="1080" width="1910" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TitleField({ title, subtitle }) {
  return (
    <div className="title-section">
      <div className="title-field">
        <div className="title-text">
          <p className="mb-0">{title}</p>
          {subtitle && <p style={{ fontSize: '32px', marginTop: '16px', fontWeight: '500' }}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function WorkClassification({ tags }) {
  return (
    <div className="info-column">
      <div className="info-label">작업 분류</div>
      <div className="info-value">
        {tags && tags.length > 0 ? tags.join(" / ") : "신규 기능 기획 및 디자인"}
      </div>
    </div>
  );
}

function MyRole({ role }) {
  // Parsing "기획(60%), 디자인(100%), 퍼블리싱(100%)" into structured display
  // If parsing fails, display raw string.
  
  const roleParts = role.split(',').map(part => part.trim());
  const parsedRoles = roleParts.map(part => {
    const match = part.match(/^(.*?)\((.*?)\)$/);
    if (match) {
      return { activity: match[1], percent: match[2] };
    }
    return { activity: part, percent: '' };
  });

  return (
    <div className="info-column">
      <div className="info-label">나의 역할</div>
      <div className="role-list">
        {parsedRoles.map((item, idx) => (
          <div key={idx} className="role-row">
            <div className="font-['Pretendard'] text-[16px]">{item.activity}</div>
            <div className="font-['Pretendard'] text-[16px]">({item.percent})</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectPeriod({ period }) {
  return (
    <div className="info-column">
      <div className="info-label">프로젝트 기간</div>
      <div className="period-row">
        <div className="info-value">총</div>
        <div className="info-value">{period}</div>
      </div>
    </div>
  );
}

function TeamComposition({ team }) {
  return (
    <div className="info-column">
      <div className="info-label">팀 구성</div>
      <div className="info-value">{team}</div>
    </div>
  );
}

function ProjectInfo({ project }) {
  return (
    <div className="project-info">
      <WorkClassification tags={project.tags} />
      <MyRole role={project.role} />
      <ProjectPeriod period={project.period} />
      <TeamComposition team={project.team} />
    </div>
  );
}

function HeaderArea({ project }) {
  return (
    <div className="content-area">
      <ProjectInfo project={project} />
      <TitleField title={project.title} />
    </div>
  );
}


export default function ProjectCover({ project }) {
  return (
    <div className="project-cover-container">
      <div className="project-cover-wrapper">
        <BackgroundGradient />
        <HeaderArea project={project} />

      </div>
    </div>
  );
}
