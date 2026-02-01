import project1Cover from "../assets/img/project1_cover.png";
import project2Cover from "../assets/img/project2_cover.png";
import project3Cover from "../assets/img/project3_cover.png";
import project4Cover from "../assets/img/project4_cover.png";
import project5Cover from "../assets/img/project5_cover.png";
import myKeyword1 from "../assets/img/myKeyword_1.png";

export const projectData = [
    {
      id: "project-1",
      // Page 1: Overview
      overview: {
        headline: "매달 반복되는 엑셀 '복사+붙여넣기' 지옥,\n클릭 한 번으로 탈출시키다.",
        summary: "사용자가 매달 3일씩 걸려 만들던 엑셀 보고서를, 버튼 하나로 1분 만에 끝내는 자동화 기능을 만들었습니다. 데이터가 사라지지 않고 나의 자산이 되는 경험을 설계했습니다.",
        keyMetrics: ["Time -99% (3d→1m)", "Keywords +4,400", "Excel Free"],
        role: "Product Designer (100%)",
        contribution: "UX/UI Design, Prototyping, QA",
        period: "2023.11 - 2024.07",
        team: "PM 1, FE 1, BE 1, PD 1",
        coverImage: project1Cover,
        tags: ["Automation", "Data Archiving", "Hook Model"]
      },
      // Page 2: Problem Definition
      problem: {
        background: "\"이번 달 데이터가 나왔네? 빨리 다운로드 받아야지. 안 그러면 사라지니까.\" 사용자는 지난달 성적과 비교하기 위해 매달 엑셀을 켜고 '복사+붙여넣기'를 반복하는 '엑셀 지옥'에 살고 있었습니다.",
        quantitative: "리포트 작성에 3일 소요 (단순 반복 노동), 서비스 내 비교 분석 기능 부재",
        qualitative: "\"작년 이맘때랑 비교해야 진짜 유행인지 알 수 있죠. 기능이 없어서 매달 엑셀로 노가다를 하고 있습니다.\" (매일유업 실무자)",
        image: myKeyword1
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "Hook Model:\n엑셀 대신 우리 서비스를 쓰게 만들기",
        description: "어떻게 하면 사용자가 엑셀 대신 우리 서비스를 매일 쓰고 싶게 만들까?",
        framework: "Hook Model",
        frameworkDesc: "Trigger(알림) -> Action(버튼 클릭) -> Reward(과거 데이터 발견) -> Investment(데이터 축적)의 선순환 구조",
        hypothesis: "사용자에게 '과거 데이터(Reward)'라는 강력한 보상을 즉시 제공하면, 엑셀을 켜는 대신 우리 서비스에 데이터를 저장(Action)하고 지속적으로 방문(Investment)할 것이다."
      },
      // Page 4: Solution A (Core Feature)
      solutionA: {
        title: "타임머신 분석 & 다이내믹 그룹핑",
        description: "오늘 저장해도 시스템이 알아서 1년 전 데이터까지 찾아오는 '타임머신(Auto-Backfill)' 기능으로 기다림을 없앴습니다. 또한 원하는 대로 묶어보는 '그룹핑'으로 엑셀 작업을 대체했습니다.",
        image: "project1_solution.png"
      },
      // Page 5: Solution B (Detail & Deep Dive)
      solutionB: {
        title: "보이지 않던 데이터를 보이게 하다",
        description: "깨알 같은 엑셀 숫자 대신, 상승/하락이 직관적으로 보이는 그래프와 자동 계산된 증감률을 제공했습니다.",
        asIs: {
            image: "project1_asis.png",
            desc: "머리 아픈 엑셀 숫자 나열 (계산 필요)"
        },
        toBe: {
            image: "project1_tobe.png",
            desc: "직관적인 선 그래프와 자동 증감률 표시"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: "리포트 작성 시간 90% 단축 (3일 → 1분) 및 키워드 등록 4,400개 돌파",
        lesson: "진짜 디자인은 예쁜 그림이 아니라, 사용자의 '귀찮음'을 없애주는 것이다. 고객이 서비스 밖에서 힘들게 하던 일을 안으로 가져올 때, 비로소 팬이 된다는 것을 배웠습니다."
      },
      isSideProject: false
    },
    {
      id: "project-2",
      // Page 1: Overview
      overview: {
        headline: "숨겨져 있던 88%의 시장을 깨우다:\n일 평균 사용량 0건에서 3,700건으로",
        summary: "기능을 만드는 것보다 중요한 건, '쓰게 만드는 것'입니다. 데이터 분석을 통해 사용자가 놓치고 있던 핵심 가치를 찾아내고, 클릭 한 번으로 경험하게 만든 UX 개선 프로젝트입니다.",
        keyMetrics: ["Daily Usage 0→3,700", "Market Coverage 88.6%", "Click Depth Minimized"],
        role: "기획 & 프로덕트 디자인 100%",
        contribution: "Problem Definition, Ideation, QA, Data Analysis",
        period: "2024.07.30 - 2024.11.08",
        team: "PM 1, FE 1, BE 1, PD 1",
        coverImage: project2Cover,
        tags: ["Automation", "Nudge Strategy", "Data Visualization"]
      },
      // Page 2: Problem Definition
      problem: {
        background: "우리 서비스엔 1억 8천만 개의 키워드가 있지만, 단 1.2%의 키워드가 전체 검색량의 88.6%를 차지합니다. 마치 백화점 매출의 80%가 VIP 20%에서 나오는 파레토 법칙과 같습니다.",
        quantitative: "핵심 기능 사용률 4.5% 불과 (User Depth Issue)",
        qualitative: "깊은 뎁스(Depth)로 인해 사용자가 기능을 찾기 위해 '검색 → 스크롤 → 필터 탐색'의 고된 과정을 거쳐야 했습니다.",
        image: "project2_problem.png"
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "사용자가 찾기 전에,\n시스템이 먼저 쟁반에 담아주기",
        description: "사용자가 힘들게 보석을 캐게 하지 말고, 이미 캐낸 보석을 건네주자.",
        framework: "Automation & Nudge",
        frameworkDesc: "Re-placement (위치 변경) + Auto-Suggest (자동 제안) 전략",
        hypothesis: "시스템이 알아서 '가장 값비싼 보석 500개'를 골라내어 진입 시점에 팝업으로 제안한다면, 사용자는 고민 없이 버튼 하나만 누르게 되어 사용률이 급증할 것이다."
      },
      // Page 4: Solution A (Core Feature)
      solutionA: {
        title: "원클릭 일괄 등록 & 토픽 그룹핑",
        description: "검색어를 입력하면 상위 500개를 자동으로 뽑아주는 '일괄 등록'과, 흩어진 키워드를 대표 주제로 묶어주는 '자동 그룹핑'으로 분석 편의성을 극대화했습니다.",
        image: "project2_solution.png"
      },
      // Page 5: Solution B (Detail & Deep Dive)
      solutionB: {
        title: "\"누가 1등인지\" 한눈에 보이는 시각화",
        description: "단순히 높낮이만 보여주던 막대그래프를, 시장 점유율(%)을 직관적으로 보여주는 스택/도넛 차트로 개선했습니다.",
        asIs: {
            image: "project2_asis.png",
            desc: "비교가 힘든 단순 막대그래프"
        },
        toBe: {
            image: "project2_tobe.png",
            desc: "점유율(%)이 보이는 스택 & 도넛 차트"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: "배포 직후 일 평균 등록 수 0건 → 3,700건 달성 (Max) 및 상위 키워드 활용성 극대화",
        lesson: "발견이 곧 사용이다. 아무리 좋은 기능도 깊숙이 숨겨두면 없는 것과 같습니다. 사용자의 동선을 파악하고 적재적소에 배치하는 것이 UX의 핵심임을 깨달았습니다."
      },
      isSideProject: false
    },
    {
      id: "project-3",
      overview: {
        headline: "패스파인더 듀얼뷰 (Dual View):\n데이터를 두 개의 눈으로 비교하다",
        summary: "공격력과 방어력을 한눈에 비교하듯, 두 개의 데이터를 동시에 비교하고 분석할 수 있는 기능을 만들었습니다. 사용자가 기억력에 의존하지 않고 데이터를 직관적으로 파악하게 돕습니다.",
        keyMetrics: ["Search Volume +26.43%", "Patent Registered", "Dual Sync Tech"],
        role: "기획(80%), 디자인(100%), 퍼블리싱(100%)",
        contribution: "UI Patent Design, Performance Optimization",
        period: "약 2개월",
        team: "PM 1, FE 1, BE 1, PD 1",
        coverImage: project3Cover,
        tags: ["Dual View", "Patent Registered", "Business Impact"]
      },
      problem: {
        background: "예전에는 '갤럭시' 데이터를 보고 나서 '아이폰' 데이터를 보려면 화면을 껐다 켜야 했습니다. 맥락이 끊겨 기억이 나지 않는 '기억력 테스트'를 해야만 했습니다.",
        quantitative: "사용자 10명 중 7명은 비교를 위해 화면 캡처나 엑셀 작업을 별도로 수행 (노가다 작업)",
        qualitative: "\"내 제품이 라이벌보다 잘 팔릴까?\" 경쟁사와의 차이와 진짜 의도를 한 화면에서 파악하기 어려웠습니다.",
        image: "project3_problem.png"
      },
      strategy: {
        title: "세 가지 마법의 안경\n(Three Magic Glasses)",
        description: "사용자가 가장 궁금해하는 세 가지를 볼 수 있도록 '세 가지 비교 모드'를 만들었습니다.",
        framework: "3-Mode Comparison",
        frameworkDesc: "의도(Persona), 시점(Time), 경쟁사(Keyword) 비교 모드 제공",
        hypothesis: "사용자가 궁금해하는 3가지 관점(의도, 시점, 경쟁사)을 바로 옆에 놓고 비교할 수 있게 하면, 맥락이 유지되어 깊이 있는 분석을 할 것이다."
      },
      solutionA: {
        title: "따로 또 같이 움직이는 '동기화' 기술",
        description: "데칼코마니처럼 왼쪽 화면을 움직이면 오른쪽도 0.1초 만에 반응하는 'Sync Interaction' 특허 기술로, 한 번의 클릭으로 양쪽을 동시에 분석하게 만들었습니다.",
        image: "project3_solution.png"
      },
      solutionB: {
        title: "공부 잘되는 깔끔한 책상 만들기",
        description: "도구 상자를 정리하고 서랍장을 이동시켜 데이터를 볼 수 있는 공간(View Area)을 30% 넓혀, 복잡한 지도도 시원하게 볼 수 있게 개선했습니다.",
        asIs: {
            image: "project3_asis.png",
            desc: "도구가 화면을 가려 복잡함"
        },
        toBe: {
            image: "project3_tobe.png",
            desc: "상단/사이드바 정리로 넓어진 뷰"
        }
      },
      impact: {
        outcome: "검색 작업량 26.43% 증가 및 대한민국 특허 등록",
        lesson: "좋은 디자인은 단순히 보기 예쁜 것이 아니라, 사용자가 복잡한 정보를 쉽게 이해하고 '맥락'을 찾을 수 있도록 도와주는 강력한 도구입니다."
      },
      isSideProject: false
    },
    {
      id: "project-4",
      overview: {
        headline: "서버 준비 시간 0.247초로 단축 및\n개발 생산성 극대화",
        summary: "디자인 수정 시마다 개발팀 전체가 멈추는 비효율을 해결하기 위해, 1.3만 라인의 디자인 부채를 청산하고 시스템을 구축했습니다.",
        keyMetrics: ["Build Time -98%", "Lines of Code -40%", "Prod Speed UP"],
        role: "기획(50%), 디자인(50%)",
        contribution: "Design Token Architecture, Component Lib",
        period: "약 6개월",
        team: "FE 4, PD 2",
        coverImage: project4Cover,
        tags: ["Design System", "Design Ops", "Dev Collaboration"]
      },
      problem: {
        background: "디자인 수정이 발생하면 빌드 프로세스 전체가 돌아가며 팀의 병목이 되고 있었습니다.",
        quantitative: "서버 구동 30초, 빌드 5분 소요 (수정마다)",
        qualitative: "개발팀: \"지금 바빠서 디자인 수정 반영할 시간 없어요.\"",
        image: "project4_problem.png"
      },
      strategy: {
        title: "설득의 언어를\n심미성에서 생산성으로",
        description: "디자인 시스템을 예쁜 컴포넌트가 아닌, 개발 효율화 도구로 정의하다",
        framework: "Atomic Design & Tokenization",
        frameworkDesc: "모든 디자인 요소를 더 이상 쪼갤 수 없는 단위(Atom)에서 시작하여 조립하는 방식",
        hypothesis: "디자인 요소를 코드로 토큰화하고 공통 컴포넌트를 제공하면, 커뮤니케이션 비용 없이도 일관된 UI를 유지할 수 있을 것이다."
      },
      solutionA: {
        title: "디자인 시스템 & UI 키트",
        description: "MUI 기반으로 커스터마이징된 컴포넌트 라이브러리와 디자인 토큰 시스템을 구축하여 '복사+붙여넣기' 환경을 제공했습니다.",
        image: "project4_solution.png"
      },
      solutionB: {
        title: "개발자와의 협업 프로토콜",
        description: "단순 가이드 문서가 아닌, 실제 코드 레벨에서 동기화되는 시스템을 구축했습니다.",
        asIs: {
            image: "project4_asis.png",
            desc: "매번 하드코딩으로 불일치 발생"
        },
        toBe: {
            image: "project4_tobe.png",
            desc: "토큰 기반의 자동화된 스타일링"
        }
      },
      impact: {
        outcome: "서버 준비 시간 98% 단축(0.247s) 및 전체 코드 라인 40% 감축.",
        lesson: "디자인 시스템은 예쁜 컴포넌트 모음집이 아니라, 팀의 커뮤니케이션 비용을 줄이는 강력한 비즈니스 도구입니다."
      },
      isSideProject: false
    },
    {
      id: "project-side",
      overview: {
        headline: "참여자 4배 증가를 달성한\n커뮤니티 온보딩 설계",
        summary: "신규 회원이 1회만 나오고 이탈하는 문제를 해결하기 위해, 게임화(Gamification) 요소와 소속감 강화 시스템을 도입했습니다.",
        keyMetrics: ["Participants 4x", "Regional Rank 1st", "Retention UP"],
        role: "Community Lead (기획, 운영, 디자인)",
        contribution: "Branding, Event Planning, Viral Marketing",
        period: "2개월 (Ongoing)",
        team: "Solo / Community Member",
        coverImage: project5Cover,
        tags: ["Community Building", "Gamification", "Branding"]
      },
      problem: {
        background: "오픈채팅방 인원은 많으나 실제 모임 참여율이 저조하고 이탈률이 높았습니다.",
        quantitative: "1회 참여 후 이탈률 80% 상회",
        qualitative: "\"나가기 뻘줌해서 그냥 있어요.\", \"재미없어요.\"",
        image: "sideproject_problem.png"
      },
      strategy: {
        title: "유저의 반응을 보며\n보상 체계를 튜닝하다",
        description: "단순한 모임을 넘어 '성장'과 '보상'이 있는 게임처럼 설계",
        framework: "Hook Model",
        frameworkDesc: "Trigger(알림) -> Action(참여) -> Reward(굿즈) -> Investment(기여)의 선순환 구조",
        hypothesis: "참여에 대한 확실한 보상(굿즈)과 소속감을 주는 온보딩(명함/자기소개)을 제공하면 재방문율이 높아질 것이다."
      },
      solutionA: {
        title: "프리퀀시 & 굿즈 리워드",
        description: "스타벅스 프리퀀시처럼 3회 출석 시 자체 제작 키링을 증정하여 '모으는 재미'와 도전 의식을 자극했습니다.",
        image: "sideproject_solution.png"
      },
      solutionB: {
        title: "소속감 중심의 온보딩",
        description: "단순 환영 인사를 넘어, 전용 명함을 발급해주고 역할을 부여하여 소속감을 고취시켰습니다.",
        asIs: {
            image: "sideproject_asis.png",
            desc: "방치된 신규 회원 (소속감)"
        },
        toBe: {
            image: "sideproject_tobe.png",
            desc: "환대받는 신규 회원 (소속감)"
        }
      },
      impact: {
        outcome: "참여자 수 4배 증가 및 지역 1위 모임 달성.",
        lesson: "보상의 크기보다 중요한 건 보상의 '의미(소속감)'였습니다."
      },
      isSideProject: true
    },
  ];
