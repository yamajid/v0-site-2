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
    dateModified: "2026-04-21",
    faqItems: [
      {
        question: "What is v0 by Vercel?",
        answer:
          "v0 is an AI-powered text-to-UI component generator by Vercel that transforms plain English descriptions into production-ready React code with Tailwind CSS styling. You prompt what you need, iterate with natural language refinements, and export clean, type-safe code directly into your project. It's built specifically for Next.js workflows and the modern React ecosystem.",
      },
      {
        question: "Is v0 free to use?",
        answer:
          "Yes, v0 has a free tier with limited monthly usage. Beyond that, you pay with token-based billing where costs depend on your prompt complexity, model choice (Mini/Pro/Max), and output size. Always check the official v0.app pricing page for current tier limits since they update regularly.",
      },
      {
        question: "Does v0 work with Next.js?",
        answer:
          "Yes, v0 is built by Vercel and outputs components optimized for Next.js App Router and Server Components by default. Generated code uses shadcn/ui, Tailwind CSS, and modern TypeScript patterns. It's the strongest match if your project is already Next.js-based.",
      },
    ],
  },

  "/what-is-v0-by-vercel/": {
    title: "What Is v0 by Vercel? The Complete Guide (2026)",
    description:
      "A plain-English explanation of v0 by Vercel — how it works, who it's for, and why developers call it basically cheating if you're already in the Next.js ecosystem.",
    datePublished: "2024-11-15",
    dateModified: "2026-04-21",
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
    title: "v0 Pricing 2026 — Token Billing, Model Tiers, and Team Plans",
    description:
      "Clear breakdown of v0 pricing in 2026: token-based usage, current model tiers, and when upgrading makes sense for teams.",
    datePublished: "2024-12-01",
    dateModified: "2026-04-21",
    faqItems: [
      {
        question: "How does v0 pricing work in 2026?",
        answer:
          "v0 switched to token-based billing in February 2026, replacing the fixed-credit model. You pay based on token consumption, which depends on prompt length, chosen model tier, and output size. Always check v0.app/pricing for current tier limits and free-tier allocation since these can shift. If you exceed your monthly allocation, you either upgrade or wait for reset.",
      },
      {
        question: "What are Mini, Pro, and Max models in v0?",
        answer:
          "v0 now offers three model tiers that trade speed and cost against quality. Mini is fastest and cheapest for simple iterations. Pro balances speed and output quality for everyday work. Max generates the highest-fidelity, most complete code but costs more tokens per generation. Your choice depends on task complexity and budget.",
      },
      {
        question: "Can v0 handle full-stack workflows now?",
        answer:
          "v0 now supports broader workflows than pre-2026 versions, including Git-connected iteration, sandbox runtime testing, and design-import features for Figma. However, for production apps, you still need to validate backend architecture, database design, authentication, and security controls in your own stack—don't rely entirely on generated code.",
      },
    ],
  },

  "/compare/v0-vs-replit/": {
    title: "v0 vs Replit — Which AI Builder Is Right for You? (2026)",
    description:
      "Hands-on comparison of v0 by Vercel and Replit. We cover UI quality, deployment, pricing, and which tool wins for React developers vs beginners.",
    datePublished: "2025-01-10",
    dateModified: "2026-04-21",
    faqItems: [
      {
        question: "Is v0 better than Replit for React projects?",
        answer:
          "For pure React/Next.js UI generation, v0 produces cleaner, more production-ready component code because it's optimized specifically for that stack. Replit's strength is full-stack app scaffolding with a built-in IDE and deployment environment. Choose v0 for component-first workflows; choose Replit if you need entire applications with infrastructure included.",
      },
      {
        question: "Can Replit deploy to Vercel?",
        answer:
          "No, not natively or automatically. Replit has its own hosting infrastructure. v0-generated code is specifically designed to export cleanly and paste directly into your own Vercel-hosted Next.js project, which is a key workflow advantage over Replit.",
      },
    ],
  },

  "/compare/v0-vs-bolt/": {
    title: "v0 vs Bolt — AI UI Generation Compared (2026)",
    description:
      "v0 by Vercel versus Bolt.new — a direct comparison of output quality, framework support, pricing, and the GitHub sync workflow.",
    datePublished: "2025-01-20",
    dateModified: "2026-04-21",
    faqItems: [
      {
        question: "What is Bolt.new?",
        answer:
          "Bolt.new is a full-stack AI app builder by StackBlitz that runs a complete Node.js environment in the browser. It generates entire applications with frontend, backend, database scaffolding, and deployment ready out of the box—going well beyond UI components.",
      },
      {
        question: "Which has better React output — v0 or Bolt?",
        answer:
          "v0 is specifically engineered for React component generation with Tailwind CSS and offers tightly integrated Next.js App Router and Server Component support. Bolt generates broader app scaffolds across multiple frameworks but may have less consistency in pure component quality. For React-only work, v0 typically edges out Bolt in code polish.",
      },
    ],
  },

  "/use-cases/admin-dashboards/": {
    title: "Build Admin Dashboards with v0 by Vercel",
    description:
      "How to use v0 to generate admin dashboard UIs in minutes. Includes prompt templates, real examples, and tips for wiring to a live data source.",
    datePublished: "2025-02-01",
    dateModified: "2026-04-21",
    steps: [
      {
        name: "Describe your dashboard layout",
        text: "Open v0 and type a prompt like: 'Create a SaaS admin dashboard with a sidebar nav, top stats row, and a data table for user management.'",
      },
      {
        name: "Iterate on the generated component",
        text: "Use follow-up prompts to refine — change colours, swap the chart library, or add a modal. Each iteration consumes tokens based on model and output size.",
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
    dateModified: "2026-04-21",
  },

  "/blog/getting-started/": {
    title: "How to Use v0 by Vercel — Getting Started Guide (2026)",
    description:
      "A step-by-step walkthrough for first-time v0 users. From writing your first prompt to pushing a working component to GitHub.",
    datePublished: "2025-03-01",
    dateModified: "2026-04-21",
    steps: [
      {
        name: "Create a free v0 account",
        text: "Go to v0.app and sign in with your Vercel or GitHub account. The free tier activates immediately.",
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
        text: "Use the Git integration inside v0 to push your iterations directly to a branch. This is the workflow that makes v0 practical for real team delivery.",
      },
    ],
  },

  "/guides/github-sync/": {
    title: "v0 GitHub Sync — How to Push AI Components Directly to Your Repo",
    description:
      "Complete guide to v0's GitHub sync feature. Connect your repo, push components to branches, and ship faster without copy-pasting.",
    datePublished: "2025-03-15",
    dateModified: "2026-04-21",
  },

  "/guides/production-ready-code/": {
    title: "Is v0 Output Production-Ready? What to Check Before Shipping",
    description:
      "v0 generates great starting points but production code needs review. This guide covers accessibility, bundle size, and error handling checks.",
    datePublished: "2025-03-20",
    dateModified: "2026-04-21",
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