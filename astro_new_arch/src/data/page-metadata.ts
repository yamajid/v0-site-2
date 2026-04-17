export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  datePublished?: string;
  dateModified?: string;
  faqItems?: FAQItem[];
  steps?: HowToStep[];
  softwareName?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const pageMetadata: Record<string, PageMeta> = {

  "/": {
    title: "v0 by Vercel — AI UI Generator for React & Next.js",
    description:
      "v0 turns plain-text prompts into production-ready React components. The fastest way to prototype dashboards, SaaS UIs, and admin panels without writing boilerplate.",
    datePublished: "2024-11-01",
    dateModified: "2026-04-01",
    faqItems: [
      {
        question: "What is v0 by Vercel?",
        answer:
          "v0 is an AI-powered UI generation tool by Vercel. You describe a component or page in plain English and v0 generates clean React + Tailwind code you can copy directly into your project.",
      },
      {
        question: "Is v0 free to use?",
        answer:
          "v0 has a free tier with limited monthly generations. Paid plans unlock higher limits and priority access.",
      },
      {
        question: "Does v0 work with Next.js?",
        answer:
          "Yes. v0 is built by the Vercel team and outputs components that are optimised for Next.js and the App Router out of the box.",
      },
    ],
  },

  "/what-is-v0-by-vercel/": {
    title: "What Is v0 by Vercel? The Complete Guide (2026)",
    description:
      "A plain-English explanation of v0 by Vercel — how it works, who it's for, and why developers call it basically cheating if you're already in the Next.js ecosystem.",
    datePublished: "2024-11-15",
    dateModified: "2026-04-01",
    faqItems: [
      {
        question: "What does v0 actually do?",
        answer:
          "v0 takes a natural-language prompt and returns a working React component with Tailwind CSS styling. It can also iterate on designs based on follow-up instructions.",
      },
      {
        question: "Is v0 the same as GitHub Copilot?",
        answer:
          "No. Copilot is an in-editor code completion tool. v0 is a standalone UI generation service — you describe a full component and get deployable code, not just autocomplete suggestions.",
      },
      {
        question: "Who makes v0?",
        answer:
          "v0 is made by Vercel, the company behind Next.js and the Vercel deployment platform.",
      },
    ],
  },

  "/pricing/": {
    title: "v0 Pricing Plans 2026 — Free vs Pro vs Team",
    description:
      "Full breakdown of v0 by Vercel pricing: what you get on the free plan, when to upgrade to Pro, and whether the Team plan is worth it for agencies.",
    datePublished: "2024-12-01",
    dateModified: "2026-04-01",
    faqItems: [
      {
        question: "How many generations do you get on the v0 free plan?",
        answer:
          "The free plan includes a limited number of monthly credits. Each generation (or regeneration) uses one credit.",
      },
      {
        question: "Does v0 Pro include unlimited generations?",
        answer:
          "Pro plans come with a significantly higher credit ceiling. Check the official v0 pricing page for the current limits as they update regularly.",
      },
    ],
  },

  "/compare/v0-vs-replit/": {
    title: "v0 vs Replit — Which AI Builder Is Right for You? (2026)",
    description:
      "Hands-on comparison of v0 by Vercel and Replit. We cover UI quality, deployment, pricing, and which tool wins for React developers vs beginners.",
    datePublished: "2025-01-10",
    dateModified: "2026-04-01",
    faqItems: [
      {
        question: "Is v0 better than Replit for React projects?",
        answer:
          "For pure UI generation in a React/Next.js stack, v0 produces cleaner component code. Replit's strength is full-stack app scaffolding and a built-in cloud IDE.",
      },
      {
        question: "Can Replit deploy to Vercel?",
        answer:
          "Not natively. Replit has its own hosting. v0 outputs are designed to paste directly into Vercel-hosted Next.js projects.",
      },
    ],
  },

  "/compare/v0-vs-bolt/": {
    title: "v0 vs Bolt — AI UI Generation Compared (2026)",
    description:
      "v0 by Vercel versus Bolt.new — a direct comparison of output quality, framework support, pricing, and the GitHub sync workflow.",
    datePublished: "2025-01-20",
    dateModified: "2026-04-01",
    faqItems: [
      {
        question: "What is Bolt.new?",
        answer:
          "Bolt.new is an AI-powered full-stack app builder by StackBlitz. It runs a full Node environment in the browser and can scaffold complete apps.",
      },
      {
        question: "Which has better React output — v0 or Bolt?",
        answer:
          "v0 is specifically tuned for React component generation with Tailwind. Bolt generates broader app scaffolds but component quality can vary.",
      },
    ],
  },

  "/use-cases/admin-dashboards/": {
    title: "Build Admin Dashboards with v0 by Vercel",
    description:
      "How to use v0 to generate admin dashboard UIs in minutes. Includes prompt templates, real examples, and tips for wiring to a live data source.",
    datePublished: "2025-02-01",
    dateModified: "2026-04-01",
    steps: [
      {
        name: "Describe your dashboard layout",
        text: "Open v0 and type a prompt like: 'Create a SaaS admin dashboard with a sidebar nav, top stats row, and a data table for user management.'",
      },
      {
        name: "Iterate on the generated component",
        text: "Use follow-up prompts to refine — change colours, swap the chart library, or add a modal. Each iteration uses one credit.",
      },
      {
        name: "Copy the code into your Next.js project",
        text: "Click 'Copy code', paste into your pages or app directory, install any missing shadcn/ui components, and run npm run dev.",
      },
      {
        name: "Connect your real data",
        text: "Replace the static placeholder arrays with your actual API calls or server components. The component structure is ready — only the data layer changes.",
      },
    ],
  },

  "/use-cases/prototyping/": {
    title: "Rapid UI Prototyping with v0 — From Idea to Component in Minutes",
    description:
      "Skip Figma for early-stage prototypes. Use v0 to generate interactive React prototypes your team can click through and iterate on the same day.",
    datePublished: "2025-02-15",
    dateModified: "2026-04-01",
  },

  "/blog/getting-started/": {
    title: "How to Use v0 by Vercel — Getting Started Guide (2026)",
    description:
      "A step-by-step walkthrough for first-time v0 users. From writing your first prompt to pushing a working component to GitHub.",
    datePublished: "2025-03-01",
    dateModified: "2026-04-01",
    steps: [
      {
        name: "Create a free v0 account",
        text: "Go to v0.dev and sign in with your Vercel or GitHub account. The free tier activates immediately.",
      },
      {
        name: "Write your first prompt",
        text: "Start simple: 'A login form with email, password, and a forgot password link using Tailwind CSS.' The more specific you are, the better the output.",
      },
      {
        name: "Review and regenerate",
        text: "If the first result isn't right, use the chat input to refine it. Try: 'Make the button full-width' or 'Switch to a dark theme.'",
      },
      {
        name: "Copy into your project",
        text: "Hit Copy Code, paste into your Next.js app directory, and run npm install for any shadcn/ui components the output requires.",
      },
      {
        name: "Sync to GitHub",
        text: "Use the GitHub sync feature inside v0 to push your iterations directly to a branch. This is the workflow that makes v0 feel like a real professional tool.",
      },
    ],
  },

  "/guides/github-sync/": {
    title: "v0 GitHub Sync — How to Push AI Components Directly to Your Repo",
    description:
      "Complete guide to v0's GitHub sync feature. Connect your repo, push components to branches, and ship faster without copy-pasting.",
    datePublished: "2025-03-15",
    dateModified: "2026-04-01",
  },

  "/guides/production-ready-code/": {
    title: "Is v0 Output Production-Ready? What to Check Before Shipping",
    description:
      "v0 generates great starting points but production code needs review. This guide covers accessibility, bundle size, and error handling checks.",
    datePublished: "2025-03-20",
    dateModified: "2026-04-01",
  },
};

export function getPageMeta(pathname: string): PageMeta {
  // normalise trailing slash
  const key = pathname.endsWith("/") ? pathname : pathname + "/";
  return (
    pageMetadata[key] ??
    pageMetadata[pathname] ?? {
      title: "v0 by Vercel — AI UI Generator",
      description:
        "Learn how to use v0 by Vercel to build React UIs faster with AI.",
    }
  );
}