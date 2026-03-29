# PROJECT_SPEC.md — Portfolio Web Specification

> **Last updated:** 2026-03-29
> **Update rule:** projectData.js, ko.json, 컴포넌트 구조가 변경될 때마다 이 문서를 함께 업데이트할 것.

---

## Table of Contents

1. [기술 아키텍처 & 스택](#1-기술-아키텍처--스택)
2. [콘텐츠 구성 가이드 (6-Slide Standard)](#2-콘텐츠-구성-가이드-6-slide-standard)
3. [차트/시각화 생성 워크플로우](#3-차트시각화-생성-워크플로우)
4. [프로젝트별 현황 요약](#4-프로젝트별-현황-요약)
5. [새 프로젝트 추가 체크리스트](#5-새-프로젝트-추가-체크리스트)
6. [명세 유지보수 가이드](#6-명세-유지보수-가이드)

---

## 1. 기술 아키텍처 & 스택

### 1.1 Tech Stack

| 영역 | 기술 | 버전 |
|------|------|------|
| UI Library | React | 19.2.0 |
| Build Tool | Vite | 5.4.11 |
| CSS Framework | Tailwind CSS (PostCSS) | 4.1.18 |
| PDF Export | jsPDF + html2canvas | 4.0.0 / 1.4.1 |
| Linting | ESLint + react-hooks/react-refresh | 9.39.1 |
| Package Manager | npm | — |
| Module System | ESM (`"type": "module"`) | — |

**라우터 없음** — 단일 페이지 스크롤 방식 (anchor link 기반 네비게이션).

### 1.2 디렉토리 구조

```
portfolio-web/
├── src/
│   ├── App.jsx                  # 루트 컴포넌트, 헤더, PDF export 핸들러
│   ├── App.css                  # 헤더, 스크롤, PDF-mode 스타일
│   ├── index.css                # 디자인 토큰, 리셋, 그리드 유틸리티
│   ├── main.jsx                 # React 진입점
│   ├── components/              # 13개 컴포넌트 (.jsx + .css 쌍)
│   │   ├── Hero.jsx/css
│   │   ├── KeyAchievements.jsx/css
│   │   ├── IndexPage.jsx/css
│   │   ├── Projects.jsx/css     # 프로젝트 반복 렌더링 오케스트레이터
│   │   ├── ProjectCover.jsx/css
│   │   ├── ProjectProblem.jsx/css
│   │   ├── ProjectStrategy.jsx/css
│   │   ├── ProjectSolutionA.jsx/css
│   │   ├── ProjectSolution.jsx/css  # Solution B용 (재사용 컴포넌트)
│   │   ├── ProjectImpact.jsx/css
│   │   ├── About.jsx/css
│   │   ├── AboutResume.jsx/css
│   │   └── Footer.jsx/css
│   ├── data/
│   │   └── projectData.js       # 전체 프로젝트 구조 정의 (키 참조)
│   ├── hooks/
│   │   └── useText.js           # i18n 텍스트 조회 훅
│   ├── locales/
│   │   └── ko.json              # 한국어 텍스트 (405개 키)
│   ├── utils/
│   │   └── textParser.jsx       # **bold** 및 [link](url) 마크다운 파싱
│   └── assets/
│       ├── img/                 # 프로젝트 커버 이미지 (project1~7_cover.png/svg)
│       └── *.svg, *.png         # 브랜드 로고, 기타 이미지
├── public/
│   └── stitch_source/           # 50개 SVG 시각화 파일
├── scripts/
│   ├── json-to-csv.js           # ko.json → content_data.csv
│   └── csv-to-json.js           # content_data.csv → ko.json
├── content_data.csv             # ko.json의 CSV 미러
├── package.json
├── vite.config.js
└── PROJECT_SPEC.md              # 이 문서
```

### 1.3 컴포넌트 계층 & 슬라이드 흐름

`App.jsx`의 `<main>` 내부 렌더링 순서:

```
App.jsx
├── <Hero />                     # 슬라이드 1: 랜딩 타이틀
├── <KeyAchievements />          # 슬라이드 2: 핵심 성과 4개 카드
├── <IndexPage />                # 슬라이드 3: 목차 (TOC)
├── <Projects />                 # 슬라이드 4~: 프로젝트 섹션
│   ├── Context Slide            # ListeningMind 소개 (1슬라이드)
│   └── projectData.map()        # 각 프로젝트별 5~6슬라이드
│       ├── <ProjectCover />
│       ├── <ProjectProblem />
│       ├── <ProjectStrategy />
│       ├── <ProjectSolutionA />
│       ├── <ProjectSolution />  # solutionB가 있을 때만 (조건부)
│       └── <ProjectImpact />
├── <AboutResume />              # About & 이력
└── <Footer />                   # 푸터
```

**핵심:** `Projects.jsx`는 `projectData` 배열을 **순서대로** 반복한다. 배열 순서가 곧 슬라이드 표시 순서.

### 1.4 데이터 흐름

3계층 아키텍처:

```
projectData.js          ko.json               textParser.jsx
(구조 + 키 참조)    →   (실제 텍스트)      →   (마크다운 변환)
    │                       │                       │
    │  키 문자열             │  useText(key)          │  parseForBold(text)
    │  예: "P1_HEADLINE"    │  → ko["P1_HEADLINE"]   │  → **bold** → <strong>
    │                       │  → fallback: key자체    │  → [link](url) → <a>
    ▼                       ▼                       ▼
          컴포넌트에서 조합하여 렌더링
```

**`useText` 훅** (`src/hooks/useText.js`):
```javascript
export const useText = (key) => ko[key] || key;
```
- ko.json에서 키로 텍스트 조회
- 키가 없으면 키 문자열 자체를 반환 (fallback)

**`parseForBold`** (`src/utils/textParser.jsx`):
- `**텍스트**` → `<strong>텍스트</strong>`
- `[텍스트](URL)` → `<a href="URL">텍스트</a>`
- 모든 텍스트 필드에서 사용 가능

### 1.5 디자인 토큰 (CSS Custom Properties)

`src/index.css`의 `:root`에 정의:

**색상:**
| 변수 | 값 | 용도 |
|------|-----|------|
| `--color-bg` | `#FFFFFF` | 기본 배경 |
| `--color-bg-alt` | `#F9F9F9` | 섹션 분리용 밝은 회색 |
| `--color-text-primary` | `#111111` | 본문 텍스트 |
| `--color-text-secondary` | `#555555` | 보조 텍스트 |
| `--color-text-tertiary` | `#888888` | 3차 텍스트 |
| `--color-primary` | `#0F172A` | Deep Navy (제목, 강조) |
| `--color-accent` | `#3B82F6` | 포인트 컬러 (인터랙티브) |
| `--color-border` | `#E5E7EB` | 테두리 |

**타이포그래피:**
| 변수 | 값 | 비고 |
|------|-----|------|
| `--font-family` | `'Pretendard', 'Inter', system-ui, sans-serif` | 한글: Pretendard |
| `--font-size-h1` | `4.5rem` (72px) | 모바일: 2.5rem |
| `--font-size-h2` | `3rem` (48px) | 모바일: 2rem |
| `--font-size-h3` | `2rem` (32px) | 모바일: 1.5rem |
| `--font-size-body` | `1.125rem` (18px) | — |
| `--font-size-small` | `0.875rem` (14px) | — |

**레이아웃:**
| 변수 | 값 |
|------|-----|
| `--container-width` | `1440px` (≤1440: 1200px, ≤768: 100%) |
| `--header-height` | `80px` |
| `--grid-columns` | `12` |
| `--grid-gutter` | `24px` |
| `--transition-fast` | `0.2s ease` |

### 1.6 레이아웃 시스템

- **슬라이드 컨테이너** (`.container`): `max-width: 1920px`, `height: 1080px`, `padding: 80px 80px 140px`
- **12컬럼 그리드** (`.grid-12`): `gap: 60px`, `min-height: 800px`, `padding: 60px`
- **콘텐츠 그리드** (`.content-grid`): `gap: 80px`, `padding: 140px 0`
- **시각화 영역** (`.project-viz-column`): `grid-column: 6 / span 7` (12컬럼 중 6~12열, 약 58%)
- **텍스트:시각화 비율**: 약 5:7 (좌측 텍스트, 우측 SVG)
- **시각화 컨테이너**: `border-radius: 20px`, `overflow: hidden`

### 1.7 빌드 & 스크립트

```json
{
  "dev": "vite",                    // 로컬 개발 서버
  "build": "vite build",            // 프로덕션 빌드 → dist/
  "preview": "vite preview",        // 빌드 결과 미리보기
  "lint": "eslint .",               // 코드 린팅
  "content:export": "node scripts/json-to-csv.js",  // ko.json → CSV
  "content:import": "node scripts/csv-to-json.js"   // CSV → ko.json
}
```

### 1.8 콘텐츠 관리 워크플로우 (JSON ↔ CSV)

```
ko.json  ──content:export──▶  content_data.csv  ──(외부 편집)──▶  content_data.csv  ──content:import──▶  ko.json
```

1. `npm run content:export` — `ko.json`을 `content_data.csv`로 변환 (Key,Value 형식)
2. Google Sheets나 Excel에서 CSV를 열어 텍스트 편집
3. `npm run content:import` — 편집된 CSV를 다시 `ko.json`으로 변환
4. CSV는 RFC 표준 따옴표 처리 (큰따옴표 이스케이프)

### 1.9 PDF Export

`App.jsx`의 `handleDownloadPDF`:
- `jsPDF` landscape 포맷: `1920 x 1080px`
- `html2canvas` scale: `2` (고해상도)
- DOM 복제 후 `.pdf-mode` 컨테이너에서 오프스크린 렌더링
- 각 `.slide` 요소를 순회하며 캡처 → JPEG 0.95 품질
- 출력 파일명: `MoonHoKyun_Portfolio_2026.pdf`

---

## 2. 콘텐츠 구성 가이드 (6-Slide Standard)

### 2.0 핵심 철학

포트폴리오의 개별 프로젝트는 **'논리적인 문제 해결 과정(Logical Problem Solving)'**을 보여주는 구조로 구성한다. 단순한 결과물 나열이 아니라, `왜(Why) → 무엇이 문제인가(Problem) → 어떻게 접근했는가(Strategy) → 무엇을 만들었는가(Solution) → 어떤 결과를 얻었는가(Impact)` 의 논리적 흐름을 따른다.

### 2.1 6-Slide 구조

각 프로젝트는 최대 6개 슬라이드로 구성된다 (Solution B는 선택적).

---

#### Slide 1: Project Cover (프로젝트 표지)

**컴포넌트:** `ProjectCover.jsx`
**목적:** 3초 안에 프로젝트 핵심을 요약. 채용 담당자가 계속 읽을지 결정하는 단계.

**projectData 스키마:**
```javascript
overview: {
  headline: "{P}_HEADLINE",        // 프로젝트 제목 + 핵심 성과 (예: "리포트 작성 시간 99% 단축\n(3일→1분)")
  summary: "{P}_SUMMARY",          // 한 줄 요약
  keyMetrics: [                    // 핵심 지표 3개
    "{P}_KEY_METRIC_1",
    "{P}_KEY_METRIC_2",
    "{P}_KEY_METRIC_3"
  ],
  role: "{P}_ROLE",                // 역할
  contribution: "{P}_CONTRIBUTION",// 기여도 (예: "디자인 100%")
  period: "{P}_PERIOD",            // 기간
  team: "{P}_TEAM",                // 팀 구성
  coverImage: import된_이미지,      // src/assets/img/ 내 이미지
  tags: [                          // 태그 3개
    "{P}_TAG_1",
    "{P}_TAG_2",
    "{P}_TAG_3"
  ]
}
```

**필요한 ko.json 키 (10개):**
`{P}_HEADLINE`, `{P}_SUMMARY`, `{P}_KEY_METRIC_1~3`, `{P}_ROLE`, `{P}_CONTRIBUTION`, `{P}_PERIOD`, `{P}_TEAM`, `{P}_TAG_1~3`

---

#### Slide 2: Problem Definition (배경 & 문제 정의)

**컴포넌트:** `ProjectProblem.jsx`
**목적:** "왜 이 프로젝트를 했는가?" — 비즈니스/사용자 관점의 당위성과 구체적 문제 제시.

**projectData 스키마:**
```javascript
problem: {
  title: "{P}_PROBLEM_TITLE",         // 섹션 제목
  background: "{P}_PROBLEM_BACKGROUND",// 배경 설명 (Why)
  quantitative: "{P}_PROBLEM_QUANT",   // 정량적 데이터 (이탈률, 수치 등)
  qualitative: "{P}_PROBLEM_QUAL",     // 정성적 데이터 (VOC, 인터뷰 등)
  image: "/stitch_source/p{N}Problem.svg"  // 문제 시각화 SVG
}
```

**필요한 ko.json 키 (4개):**
`{P}_PROBLEM_TITLE`, `{P}_PROBLEM_BACKGROUND`, `{P}_PROBLEM_QUANT`, `{P}_PROBLEM_QUAL`

**콘텐츠 작성 가이드:**
- background: 비즈니스 또는 사용자 관점의 시작 당위성
- quantitative: 반드시 구체적 수치 포함 (예: "이탈률 23% 증가")
- qualitative: 사용자 인터뷰, VOC 인용 (예: "— PM, A사")

---

#### Slide 3: Hypothesis & Strategy (가설 & 전략)

**컴포넌트:** `ProjectStrategy.jsx`
**목적:** 문제의 근본 원인 분석과 해결 가설 제시.

**projectData 스키마:**
```javascript
strategy: {
  title: "{P}_STRATEGY_TITLE",       // 섹션 제목
  description: "{P}_STRATEGY_DESC",   // 전략 설명
  cause: "{P}_STRATEGY_CAUSE",        // 근본 원인
  causeDesc: "{P}_STRATEGY_CAUSE_DESC", // 원인 상세 설명
  hypothesis: "{P}_STRATEGY_HYPO",    // 가설 ("A를 해결하면 B가 될 것이다")
  image: "/stitch_source/p{N}Strategy.svg"
}
```

**필요한 ko.json 키 (5개):**
`{P}_STRATEGY_TITLE`, `{P}_STRATEGY_DESC`, `{P}_STRATEGY_CAUSE`, `{P}_STRATEGY_CAUSE_DESC`, `{P}_STRATEGY_HYPO`

---

#### Slide 4: Solution A (핵심 솔루션)

**컴포넌트:** `ProjectSolutionA.jsx`
**목적:** 핵심 기능/디자인의 구체적 설명. UI가 앞서 정의한 문제를 어떻게 해결하는지에 집중.

**projectData 스키마:**
```javascript
solutionA: {
  title: "{P}_SOL_A_TITLE",          // 솔루션 제목
  summary: "{P}_SOL_A_SUMMARY",      // 솔루션 요약
  description: [                     // 상세 설명 (0~3개, 가변)
    {
      title: "{P}_SOL_A_DESC_1_TITLE",
      desc: "{P}_SOL_A_DESC_1_DESC"
    },
    // ... 추가 항목
  ],
  image: "/stitch_source/p{N}SolutionA.svg"
}
```

**필요한 ko.json 키 (2 + 2×N개):**
`{P}_SOL_A_TITLE`, `{P}_SOL_A_SUMMARY`, `{P}_SOL_A_DESC_{N}_TITLE`, `{P}_SOL_A_DESC_{N}_DESC`

**주의:** description 배열 길이는 프로젝트마다 다름 (0~3개). 빈 배열 `[]`도 유효.

---

#### Slide 5: Solution B (심화 솔루션) — Optional

**컴포넌트:** `ProjectSolution.jsx` (범용 솔루션 컴포넌트, 재사용)
**목적:** AS-IS / TO-BE 비교를 포함한 심화 솔루션 설명.

**projectData 스키마:**
```javascript
solutionB: {                         // ⚠️ 이 필드가 없으면 슬라이드 자체가 생략됨
  title: "{P}_SOL_B_TITLE",
  summary: "{P}_SOL_B_SUMMARY",
  description: [                     // 0~3개, 가변
    { title: "{P}_SOL_B_DESC_1_TITLE", desc: "{P}_SOL_B_DESC_1_DESC" },
  ],
  image: "/stitch_source/p{N}SolutionB.svg",
  asIs: {                            // AS-IS 비교 (선택적)
    image: "파일경로_또는_SVG경로",
    desc: "{P}_SOL_B_ASIS_DESC"
  },
  toBe: {                            // TO-BE 비교 (선택적)
    image: "파일경로_또는_SVG경로",
    desc: "{P}_SOL_B_TOBE_DESC"
  }
}
```

**조건부 렌더링:** `project.solutionB`가 존재할 때만 이 슬라이드가 표시됨 (Projects.jsx line 94).

**필요한 ko.json 키 (2 + 2×N + 2개):**
`{P}_SOL_B_TITLE`, `{P}_SOL_B_SUMMARY`, `{P}_SOL_B_DESC_{N}_TITLE/DESC`, `{P}_SOL_B_ASIS_DESC`, `{P}_SOL_B_TOBE_DESC`

---

#### Slide 6: Impact & Lesson (결과 & 회고)

**컴포넌트:** `ProjectImpact.jsx`
**목적:** 정량/정성적 성과 증명 + 배운 점.

**projectData 스키마:**
```javascript
impact: {
  outcome: [                         // 성과 2~3개
    {
      title: "{P}_IMPACT_OUTCOME_1_TITLE",   // 성과 제목
      desc: "{P}_IMPACT_OUTCOME_1_DESC",     // 성과 상세
      image: "/stitch_source/p{N}Impact1.svg" // 성과 시각화
    },
    // ... 추가 항목 (2~3개)
  ],
  lesson: "{P}_IMPACT_LESSON"        // 회고/배운 점
}
```

**필요한 ko.json 키 (1 + 2×N개):**
`{P}_IMPACT_OUTCOME_{N}_TITLE`, `{P}_IMPACT_OUTCOME_{N}_DESC`, `{P}_IMPACT_LESSON`

**콘텐츠 작성 가이드:**
- outcome: 가설과 결과의 인과관계가 논리적으로 연결되어야 함
- 정량적 성과 우선 (전환율, 리텐션, 체류시간 등)
- 정량 데이터가 없으면 사용자 피드백, 동료 평가 등 정성적 증거
- lesson: 아쉬운 점 + "다음에 한다면" 개선 방향

---

### 2.2 콘텐츠 품질 기준

| 원칙 | 설명 |
|------|------|
| **논리적 흐름** | 배경→문제→가설→솔루션→검증→회고의 일관된 스토리라인 |
| **정량적 근거** | 모든 주장에 구체적 수치 뒷받침 (예: "이탈률 20% 감소", "등록 0→261건") |
| **과정 > 결과** | 완성된 UI뿐 아니라 스케치, 와이어프레임, 실패한 시안 등 반복(iteration) 과정 포함 |
| **UI = 문제해결** | "버튼 누르면 팝업 뜸" 같은 기능 나열이 아닌, "이 UI가 문제를 어떻게 해결하는지" 설명 |
| **마크다운 지원** | 텍스트에 `**볼드**`, `[링크](URL)` 사용 가능 (parseForBold 처리) |
| **줄바꿈** | headline 등에서 `\n`으로 2줄 포맷 가능 |

### 2.3 디자인 & 레이아웃 원칙

| 원칙 | 적용 |
|------|------|
| **미니멀리즘** | 불필요한 장식 제거, 여백(Negative Space) 적극 활용 |
| **그리드 시스템** | 12컬럼 그리드로 정보 구조화, 시각적 균형 유지 |
| **가독성** | Pretendard 산세리프 서체, body 18px, line-height 1.7 |
| **일관된 레이아웃** | 페이지마다 급격한 변화 없이 단순하고 일관된 구조 유지 |
| **색상 절제** | 무채색 기반 + 포인트 컬러(`#3B82F6`) 1개만 사용 |
| **1920×1080** | 모든 슬라이드는 landscape A4 비율 고정 |

### 2.4 로컬라이제이션 키 네이밍 컨벤션

**패턴:** `{PROJECT_PREFIX}_{SECTION}_{FIELD}`

**프로젝트 Prefix:**
| Prefix | 대상 |
|--------|------|
| `P1_` ~ `P4_` | ListeningMind 프로젝트 1~4 |
| `P6_` | MUNOART 프로젝트 |
| `P7_` | ListeningMind AI Agent (Hubble) |
| `SIDE_` | 당근 모임 사이드 프로젝트 |

**글로벌 키 Prefix:**
| Prefix | 대상 |
|--------|------|
| `NAV_` | 네비게이션 |
| `HERO_` | 히어로 섹션 |
| `INDEX_` | 목차 |
| `ACH_`, `ACHIEVEMENT_` | 핵심 성과 |
| `PROJECTS_` | 프로젝트 섹션 소개 |
| `SECTION_LABEL_` | 슬라이드 섹션 헤더 |
| `ABOUT_`, `RESUME_` | About & 이력 |
| `FOOTER_` | 푸터 |

---

## 3. 차트/시각화 생성 워크플로우

### 3.1 Step 1: 데이터 추출 & 차트 타입 결정

입력된 자료에서 시각화할 핵심 데이터를 추출하고 차트 형태를 결정한다.

**데이터 추출:** `[항목(X축) - 수치(Y축)]` 또는 `[비교 대상 - 결과값]` 형태로 정리.

**차트 타입 결정:**
| 데이터 특성 | 차트 타입 |
|-------------|-----------|
| 추이/변화 | **Line Chart** (선 그래프) |
| 비교/순위 | **Bar Chart** (막대 그래프) |
| 비중/점유율 | **Donut Chart** (도넛 차트) |
| 프로세스/단계 | **Flow Chart** (순서도) |
| 핵심 강조 | **Big Number with Trend** (핵심 숫자 강조) |

### 3.2 Step 2: Stitch 시각화 프롬프트 작성

Stitch(이미지 생성 도구)가 포트폴리오에 바로 넣을 수 있는 그래프를 생성하도록 영문 프롬프트를 작성한다.

**Design Style Guide:**

| 항목 | 규칙 |
|------|------|
| **Style Keyword** | "Swiss Style", "Minimalist Infographic", "High-fidelity Data Visualization" |
| **Clean Lines** | 그래프 선은 얇고 정교하게 (Fine lines) |
| **No Clutter** | 불필요한 눈금선, 복잡한 범례, 배경 장식 모두 제거 |
| **Background** | 순백색(`#FFFFFF`) 또는 투명한 느낌의 밝은 회색 |
| **Color** | 무채색(Mono-tone) 기본, 강조 데이터에만 포인트 컬러 1개 (Blue or Brand Color) |
| **Typography** | San-serif, 간결하고 가독성 있는 숫자/라벨 배치 |

### 3.3 SVG 파일 네이밍 컨벤션

**기본 패턴:** `p{N}{SlideType}.svg`

| 슬라이드 | 네이밍 예시 |
|----------|------------|
| Problem | `p1Problem.svg` |
| Strategy | `p1Strategy.svg` |
| Solution A | `p1SolutionA.svg` |
| Solution B | `p1SolutionB.svg` |
| Impact (1~3) | `p1Impact1.svg`, `p1Impact2.svg` |
| AS-IS/TO-BE | `p6SolutionB_asis.svg`, `p6SolutionB_tobe.svg` |

**주의 — 예외 사항:**
| 프로젝트 | 예외 | 이유 |
|----------|------|------|
| **P4** | 하이픈 사용: `p4Solution-A.svg`, `p4Impact-1.svg` | 레거시 네이밍 |
| **Side Project** | `p5` prefix 사용: `p5Problem.svg` 등 | 로컬라이제이션은 `SIDE_`이지만 SVG는 `p5` |

### 3.4 출력 포맷 템플릿

**1. [Data Summary]**
- **Type:** (차트 종류, 예: Bar Chart)
- **Key Data:** (핵심 데이터 3~4개 요약)
- **Message:** (이 그래프가 증명하는 핵심 성과 한 줄)

**2. [Stitch Visual Prompt]**
```
"A minimal [Chart Type] visualization showing [Data Topic]. The chart features [Data description, e.g., three bars comparing A, B, and C].

**Design:** Swiss design style, clean and flat aesthetics.
**Colors:** White background. Elements are light grey, with the highest value highlighted in [Accent Color].
**Details:** Minimal typography, thin lines, high contrast. Professional presentation deck quality, isolated on white."
```

### 3.5 현재 SVG 파일 목록 (50개)

```
public/stitch_source/
├── p1: Problem, Strategy, SolutionA, SolutionB, Impact1, Impact2, Impact3 (7개)
├── p2: Problem, Strategy, SolutionA, SolutionB, Impact1, Impact2 (6개)
├── p3: Problem, Strategy, SolutionA, SolutionB, Impact1, Impact2 (6개)
├── p4: Problem, Strategy, Solution-A, Solution-B, Impact-1, Impact-2, Impact-3 (7개)
├── p5: Problem, Strategy, Solution, Impact-1, Impact-2, Impact-3 (6개)
├── p6: Problem, Strategy, SolutionA, SolutionB, SolutionB_asis, SolutionB_tobe, Impact1, Impact2, Impact3 (9개)
└── p7: Problem, Strategy, SolutionA, SolutionB, SolutionB_asis, SolutionB_tobe, Impact1, Impact2, Impact3 (9개)
```

---

## 4. 프로젝트별 현황 요약

> **배열 순서** = 슬라이드 표시 순서. ID 숫자 순서와 다름에 주의.

| # | ID | Prefix | 브랜드 | 헤드라인 | 슬라이드 | SVG 수 | solutionB |
|---|-----|--------|--------|---------|----------|--------|-----------|
| 1 | project-1 | `P1_` | ListeningMind | 리포트 작성 시간 99% 단축 (3일→1분) | 6 | 7 | O |
| 2 | project-2 | `P2_` | ListeningMind | 일평균 등록 0건→261건, 숨은 88% 시장 발굴 | 6 | 6 | O |
| 3 | project-3 | `P3_` | ListeningMind | 검색량 +26.4% 증가, 특허 등록 달성 | 6 | 6 | O |
| 4 | project-4 | `P4_` | ListeningMind | 서버 구동 22초→0.2초, 코드 40% 감축 | 6 | 7 | O |
| 5 | project-7 | `P7_` | ListeningMind | AI 에이전트(Hubble) — 1,000개 키워드→40초 전략 | 6 | 9 | O |
| 6 | project-side | `SIDE_` (SVG:`p5`) | 당근 모임 | 심리적 장벽을 넘는 커뮤니티 300% 성장 | **5** | 6 | **X** |
| 7 | project-6 | `P6_` | MUNOART | 팬덤 VOC→영업이익률 50.5% 비즈니스 | 6 | 9 | O |

**Index 페이지 (목차) 매핑:**

| 목차 번호 | 설명 | 시작 페이지 |
|-----------|------|------------|
| LM 1 | 분석/저장 이슈 해결 (P1) | 5 |
| LM 2 | 검색량 필터 사용 개선 (P2) | 11 |
| LM 3 | 차트 비교 UI 설계 (P3) | 17 |
| LM 4 | 디자인 시스템 구축 (P4) | 23 |
| LM 5 | AI 에이전트(Hubble) 설계 (P7) | 29 |
| 당근 모임 | 온보딩 설계 (Side) | 35 |
| 무노아트 | 브랜드 운영 (P6) | 40 |

---

## 5. 새 프로젝트 추가 체크리스트

### Step 1: 기본 설정
- [ ] 프로젝트 prefix 결정 (예: `P8_`)
- [ ] 프로젝트 ID 결정 (예: `project-8`)
- [ ] `isSideProject` 여부 결정

### Step 2: 커버 이미지 준비
- [ ] 커버 이미지를 `src/assets/img/project{N}_cover.png` (또는 `.svg`)로 저장
- [ ] `src/data/projectData.js` 상단에 import 추가:
  ```javascript
  import project8Cover from "../assets/img/project8_cover.png";
  ```

### Step 3: projectData.js에 프로젝트 객체 추가
- [ ] `projectData` 배열에 새 프로젝트 객체 추가 (표시하고 싶은 위치에 삽입)
- [ ] 6-Slide 스키마에 맞춰 모든 필드 작성 (Section 2.1 참조)
- [ ] `solutionB`가 필요 없으면 필드 자체를 생략

### Step 4: ko.json에 텍스트 키 추가
- [ ] 최소 필수 키 추가 (약 20~30개):
  - Cover: 10개 (`{P}_HEADLINE`, `{P}_SUMMARY`, `{P}_KEY_METRIC_1~3`, `{P}_ROLE`, `{P}_CONTRIBUTION`, `{P}_PERIOD`, `{P}_TEAM`, `{P}_TAG_1~3`)
  - Problem: 4개 (`{P}_PROBLEM_TITLE/BACKGROUND/QUANT/QUAL`)
  - Strategy: 5개 (`{P}_STRATEGY_TITLE/DESC/CAUSE/CAUSE_DESC/HYPO`)
  - Solution A: 2 + 2×N개 (`{P}_SOL_A_TITLE/SUMMARY` + description 항목)
  - Solution B: 2 + 2×N + 2개 (Optional)
  - Impact: 1 + 2×N개 (`{P}_IMPACT_OUTCOME_{N}_TITLE/DESC` + `{P}_IMPACT_LESSON`)

### Step 5: SVG 시각화 파일 생성
- [ ] Section 3의 워크플로우에 따라 SVG 생성
- [ ] `public/stitch_source/`에 네이밍 컨벤션에 맞춰 저장
- [ ] 최소 필요 SVG: Problem, Strategy, SolutionA, Impact×N (4~7개)
- [ ] solutionB가 있으면: SolutionB, (선택적) SolutionB_asis, SolutionB_tobe 추가

### Step 6: 동기화 & 테스트
- [ ] `npm run content:export` 실행 (CSV 동기화)
- [ ] `npm run dev`로 로컬에서 확인
- [ ] 모든 슬라이드가 정상 렌더링되는지 확인
- [ ] PDF 다운로드 테스트

### Step 7: Index 페이지 업데이트
- [ ] `src/components/IndexPage.jsx`에 새 프로젝트 항목 추가
- [ ] 페이지 번호 계산: 이전 프로젝트 마지막 페이지 + 1 (프로젝트당 5~6페이지)
- [ ] `src/locales/ko.json`에 `INDEX_` 관련 키 추가

### Step 8: 이 명세 업데이트
- [ ] Section 4 테이블에 새 프로젝트 행 추가
- [ ] Section 3.5 SVG 목록 업데이트
- [ ] 최상단 Last updated 날짜 갱신

---

## 6. 명세 유지보수 가이드

### 업데이트가 필요한 시점

| 변경 사항 | 업데이트할 섹션 |
|-----------|----------------|
| 프로젝트 추가/제거 | Section 4, 3.5, Index 매핑 |
| 디자인 토큰 변경 | Section 1.5 |
| 새 컴포넌트 추가 | Section 1.2, 1.3 |
| 키 네이밍 패턴 변경 | Section 2.1, 2.4 |
| 빌드/스크립트 변경 | Section 1.7 |
| 기술 스택 변경 | Section 1.1 |

### 유지보수 원칙

1. **즉시 업데이트**: 코드 변경과 함께 이 문서도 같은 커밋에서 업데이트
2. **날짜 갱신**: 최상단 `Last updated` 날짜를 항상 최신으로 유지
3. **검증 우선**: 키 패턴이나 파일 경로를 기재할 때는 실제 파일과 대조 확인
4. **간결함 유지**: 코드에서 직접 읽을 수 있는 내용(구현 상세)보다 구조와 규칙 중심으로 기재
