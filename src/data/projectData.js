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
        headline: "P1_HEADLINE",
        summary: "P1_SUMMARY",
        keyMetrics: ["P1_KEY_METRIC_1", "P1_KEY_METRIC_2", "P1_KEY_METRIC_3"],
        role: "P1_ROLE",
        contribution: "P1_CONTRIBUTION",
        period: "P1_PERIOD",
        team: "P1_TEAM",
        coverImage: project1Cover,
        tags: ["P1_TAG_1", "P1_TAG_2", "P1_TAG_3"]
      },
      // Page 2: Problem Definition
      problem: {
        title: "P1_PROBLEM_TITLE",
        background: "P1_PROBLEM_BACKGROUND",
        quantitative: "P1_PROBLEM_QUANT",
        qualitative: "P1_PROBLEM_QUAL",
        image: myKeyword1
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "P1_STRATEGY_TITLE",
        description: "P1_STRATEGY_DESC",
        cause: "P1_STRATEGY_CAUSE",
        causeDesc: "P1_STRATEGY_CAUSE_DESC",
        hypothesis: "P1_STRATEGY_HYPO",
        image: myKeyword1
      },
      // Page 4: Solution A (Core Feature)
      solutionA: {
        title: "P1_SOL_A_TITLE",
        summary: "P1_SOL_A_SUMMARY",
        description: [
          { title: "P1_SOL_A_DESC_1_TITLE", desc: "P1_SOL_A_DESC_1_DESC" },
          { title: "P1_SOL_A_DESC_2_TITLE", desc: "P1_SOL_A_DESC_2_DESC" }
        ],
        image: myKeyword1
      },
      // Page 5: Solution B (Detail & Deep Dive)
      solutionB: {
        title: "P1_SOL_B_TITLE",
        description: [
            { title: "P1_SOL_B_DESC_1_TITLE", desc: "P1_SOL_B_DESC_1_DESC" },
            { title: "P1_SOL_B_DESC_2_TITLE", desc: "P1_SOL_B_DESC_2_DESC" },
            { title: "P1_SOL_B_DESC_3_TITLE", desc: "P1_SOL_B_DESC_3_DESC" }
        ],
        image: "project1_sol_b.png",
        asIs: {
            image: "project1_asis.png",
            desc: "P1_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project1_tobe.png",
            desc: "P1_SOL_B_TOBE_DESC"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: [
            { title: "P1_IMPACT_OUTCOME_1_TITLE", desc: "P1_IMPACT_OUTCOME_1_DESC", image: "p1_outcome_1.png" },
            { title: "P1_IMPACT_OUTCOME_2_TITLE", desc: "P1_IMPACT_OUTCOME_2_DESC", image: "p1_outcome_2.png" },
            { title: "P1_IMPACT_OUTCOME_3_TITLE", desc: "P1_IMPACT_OUTCOME_3_DESC", image: "p1_outcome_3.png" }
        ],
        lesson: "P1_IMPACT_LESSON"
      },
      isSideProject: false
    },
    {
      id: "project-2",
      // Page 1: Overview
      overview: {
        headline: "P2_HEADLINE",
        summary: "P2_SUMMARY",
        keyMetrics: ["P2_KEY_METRIC_1", "P2_KEY_METRIC_2", "P2_KEY_METRIC_3"],
        role: "P2_ROLE",
        contribution: "P2_CONTRIBUTION",
        period: "P2_PERIOD",
        team: "P2_TEAM",
        coverImage: project2Cover,
        tags: ["P2_TAG_1", "P2_TAG_2", "P2_TAG_3"]
      },
      // Page 2: Problem Definition
      problem: {
        title: "P2_PROBLEM_TITLE",
        background: "P2_PROBLEM_BACKGROUND",
        quantitative: "P2_PROBLEM_QUANT",
        qualitative: "P2_PROBLEM_QUAL",
        image: "project2_problem.png"
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "P2_STRATEGY_TITLE",
        description: "P2_STRATEGY_DESC",
        cause: "P2_STRATEGY_CAUSE",
        causeDesc: "P2_STRATEGY_CAUSE_DESC",
        hypothesis: "P2_STRATEGY_HYPO",
        image: project2Cover
      },
      // Page 4: Solution A (Core Feature)
      solutionA: {
        title: "P2_SOL_A_TITLE",
        summary: "P2_SOL_A_SUMMARY",
        description: [
          { title: "P2_SOL_A_DESC_1_TITLE", desc: "P2_SOL_A_DESC_1_DESC" },
          { title: "P2_SOL_A_DESC_2_TITLE", desc: "P2_SOL_A_DESC_2_DESC" },
          { title: "P2_SOL_A_DESC_3_TITLE", desc: "P2_SOL_A_DESC_3_DESC" }
        ],
        image: myKeyword1
      },
      // Page 5: Solution B (Detail & Deep Dive)
      solutionB: {
        title: "P2_SOL_B_TITLE",
        description: [
            { title: "P2_SOL_B_DESC_1_TITLE", desc: "P2_SOL_B_DESC_1_DESC" },
            { title: "P2_SOL_B_DESC_2_TITLE", desc: "P2_SOL_B_DESC_2_DESC" },
            { title: "P2_SOL_B_DESC_3_TITLE", desc: "P2_SOL_B_DESC_3_DESC" }
        ],
        image: "project2_sol_b.png",
        asIs: {
            image: "project2_asis.png",
            desc: "P2_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project2_tobe.png",
            desc: "P2_SOL_B_TOBE_DESC"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: [
            { title: "P2_IMPACT_OUTCOME_1_TITLE", desc: "P2_IMPACT_OUTCOME_1_DESC", image: "p2_outcome_1.png" },
            { title: "P2_IMPACT_OUTCOME_2_TITLE", desc: "P2_IMPACT_OUTCOME_2_DESC", image: "p2_outcome_2.png" }
        ],
        lesson: "P2_IMPACT_LESSON"
      },
      isSideProject: false
    },
    {
      id: "project-3",
      overview: {
        headline: "P3_HEADLINE",
        summary: "P3_SUMMARY",
        keyMetrics: ["P3_KEY_METRIC_1", "P3_KEY_METRIC_2", "P3_KEY_METRIC_3"],
        role: "P3_ROLE",
        contribution: "P3_CONTRIBUTION",
        period: "P3_PERIOD",
        team: "P3_TEAM",
        coverImage: project3Cover,
        tags: ["P3_TAG_1", "P3_TAG_2", "P3_TAG_3"]
      },
      problem: {
        title: "P3_PROBLEM_TITLE",
        background: "P3_PROBLEM_BACKGROUND",
        quantitative: "P3_PROBLEM_QUANT",
        qualitative: "P3_PROBLEM_QUAL",
        image: "project3_problem.png"
      },
      strategy: {
        title: "P3_STRATEGY_TITLE",
        description: "P3_STRATEGY_DESC",
        cause: "P3_STRATEGY_CAUSE",
        causeDesc: "P3_STRATEGY_CAUSE_DESC",
        hypothesis: "P3_STRATEGY_HYPO",
        image: project3Cover
      },
      solutionA: {
        title: "P3_SOL_A_TITLE",
        summary: "P3_SOL_A_SUMMARY",
        description: [
          { title: "P3_SOL_A_DESC_1_TITLE", desc: "P3_SOL_A_DESC_1_DESC" },
          { title: "P3_SOL_A_DESC_2_TITLE", desc: "P3_SOL_A_DESC_2_DESC" },
          { title: "P3_SOL_A_DESC_3_TITLE", desc: "P3_SOL_A_DESC_3_DESC" }
        ],
        image: myKeyword1
      },
      solutionB: {
        title: "P3_SOL_B_TITLE",
        description: [
            { title: "P3_SOL_B_DESC_1_TITLE", desc: "P3_SOL_B_DESC_1_DESC" },
            { title: "P3_SOL_B_DESC_2_TITLE", desc: "P3_SOL_B_DESC_2_DESC" },
            { title: "P3_SOL_B_DESC_3_TITLE", desc: "P3_SOL_B_DESC_3_DESC" }
        ],
        image: "project3_sol_b.png",
        asIs: {
            image: "project3_asis.png",
            desc: "P3_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project3_tobe.png",
            desc: "P3_SOL_B_TOBE_DESC"
        }
      },
      impact: {
        outcome: [
            { title: "P3_IMPACT_OUTCOME_1_TITLE", desc: "P3_IMPACT_OUTCOME_1_DESC", image: "p3_outcome_1.png" },
            { title: "P3_IMPACT_OUTCOME_2_TITLE", desc: "P3_IMPACT_OUTCOME_2_DESC", image: "p3_outcome_2.png" },
            { title: "P3_IMPACT_OUTCOME_3_TITLE", desc: "P3_IMPACT_OUTCOME_3_DESC", image: "p3_outcome_3.png" }
        ],
        lesson: "P3_IMPACT_LESSON"
      },
      isSideProject: false
    },
    {
      id: "project-4",
      overview: {
        headline: "P4_HEADLINE",
        summary: "P4_SUMMARY",
        keyMetrics: ["P4_KEY_METRIC_1", "P4_KEY_METRIC_2", "P4_KEY_METRIC_3"],
        role: "P4_ROLE",
        contribution: "P4_CONTRIBUTION",
        period: "P4_PERIOD",
        team: "P4_TEAM",
        coverImage: project4Cover,
        tags: ["P4_TAG_1", "P4_TAG_2", "P4_TAG_3"]
      },
      problem: {
        title: "P4_PROBLEM_TITLE",
        background: "P4_PROBLEM_BACKGROUND",
        quantitative: "P4_PROBLEM_QUANT",
        qualitative: "P4_PROBLEM_QUAL",
        image: "project4_problem.png"
      },
      strategy: {
        title: "P4_STRATEGY_TITLE",
        description: "P4_STRATEGY_DESC",
        cause: "P4_STRATEGY_CAUSE",
        causeDesc: "P4_STRATEGY_CAUSE_DESC",
        hypothesis: "P4_STRATEGY_HYPO",
        image: project4Cover
      },
      solutionA: {
        title: "P4_SOL_A_TITLE",
        summary: "P4_SOL_A_SUMMARY",
        description: [
          { title: "P4_SOL_A_DESC_1_TITLE", desc: "P4_SOL_A_DESC_1_DESC" },
          { title: "P4_SOL_A_DESC_2_TITLE", desc: "P4_SOL_A_DESC_2_DESC" },
          { title: "P4_SOL_A_DESC_3_TITLE", desc: "P4_SOL_A_DESC_3_DESC" }
        ],
        image: myKeyword1
      },
      solutionB: {
        title: "P4_SOL_B_TITLE",
        description: [
            { title: "P4_SOL_B_DESC_1_TITLE", desc: "P4_SOL_B_DESC_1_DESC" },
            { title: "P4_SOL_B_DESC_2_TITLE", desc: "P4_SOL_B_DESC_2_DESC" },
            { title: "P4_SOL_B_DESC_3_TITLE", desc: "P4_SOL_B_DESC_3_DESC" }
        ],
        image: "project4_sol_b.png",
        asIs: {
            image: "project4_asis.png",
            desc: "P4_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project4_tobe.png",
            desc: "P4_SOL_B_TOBE_DESC"
        }
      },
      impact: {
        outcome: [
            { title: "P4_IMPACT_OUTCOME_1_TITLE", desc: "P4_IMPACT_OUTCOME_1_DESC", image: "p4_outcome_1.png" },
            { title: "P4_IMPACT_OUTCOME_2_TITLE", desc: "P4_IMPACT_OUTCOME_2_DESC", image: "p4_outcome_2.png" },
            { title: "P4_IMPACT_OUTCOME_3_TITLE", desc: "P4_IMPACT_OUTCOME_3_DESC", image: "p4_outcome_3.png" }
        ],
        lesson: "P4_IMPACT_LESSON"
      },
      isSideProject: false
    },
    {
      id: "project-side",
      overview: {
        headline: "SIDE_HEADLINE",
        summary: "SIDE_SUMMARY",
        keyMetrics: ["SIDE_KEY_METRIC_1", "SIDE_KEY_METRIC_2", "SIDE_KEY_METRIC_3"],
        role: "SIDE_ROLE",
        contribution: "SIDE_CONTRIBUTION",
        period: "SIDE_PERIOD",
        team: "SIDE_TEAM",
        coverImage: project5Cover,
        tags: ["SIDE_TAG_1", "SIDE_TAG_2", "SIDE_TAG_3"]
      },
      problem: {
        title: "SIDE_PROBLEM_TITLE",
        background: "SIDE_PROBLEM_BACKGROUND",
        quantitative: "SIDE_PROBLEM_QUANT",
        qualitative: "SIDE_PROBLEM_QUAL",
        image: "sideproject_problem.png"
      },
      strategy: {
        title: "SIDE_STRATEGY_TITLE",
        description: "SIDE_STRATEGY_DESC",
        cause: "SIDE_STRATEGY_CAUSE",
        causeDesc: "SIDE_STRATEGY_CAUSE_DESC",
        hypothesis: "SIDE_STRATEGY_HYPO",
        image: project5Cover
      },
      solutionA: {
        title: "SIDE_SOL_A_TITLE",
        summary: "SIDE_SOL_A_SUMMARY",
        description: [
          { title: "SIDE_SOL_A_DESC_1_TITLE", desc: "SIDE_SOL_A_DESC_1_DESC" },
          { title: "SIDE_SOL_A_DESC_2_TITLE", desc: "SIDE_SOL_A_DESC_2_DESC" },
          { title: "SIDE_SOL_A_DESC_3_TITLE", desc: "SIDE_SOL_A_DESC_3_DESC" }
        ],
        image: myKeyword1
      },
      solutionB: {
        title: "SIDE_SOL_B_TITLE",
        description: [
            { title: "SIDE_SOL_B_DESC_1_TITLE", desc: "SIDE_SOL_B_DESC_1_DESC" },
            { title: "SIDE_SOL_B_DESC_2_TITLE", desc: "SIDE_SOL_B_DESC_2_DESC" },
            { title: "SIDE_SOL_B_DESC_3_TITLE", desc: "SIDE_SOL_B_DESC_3_DESC" }
        ],
        image: "sideproject_sol_b.png",
        asIs: {
            image: "sideproject_asis.png",
            desc: "SIDE_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "sideproject_tobe.png",
            desc: "SIDE_SOL_B_TOBE_DESC"
        }
      },
      impact: {
        outcome: [
            { title: "SIDE_IMPACT_OUTCOME_1_TITLE", desc: "SIDE_IMPACT_OUTCOME_1_DESC", image: "side_outcome_1.png" },
            { title: "SIDE_IMPACT_OUTCOME_2_TITLE", desc: "SIDE_IMPACT_OUTCOME_2_DESC", image: "side_outcome_2.png" },
            { title: "SIDE_IMPACT_OUTCOME_3_TITLE", desc: "SIDE_IMPACT_OUTCOME_3_DESC", image: "side_outcome_3.png" }
        ],
        lesson: "SIDE_IMPACT_LESSON"
      },
      isSideProject: true
    },
  ];
