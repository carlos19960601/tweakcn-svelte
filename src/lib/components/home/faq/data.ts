
export const faqs = [
  {
    question: "What is tweakcn?",
    answer:
      "tweakcn is a visual theme editor for shadcn/ui components with Tailwind CSS support. It comes with a set of pre-built themes that you can use to customize your project.",
  },
  {
    question: "Is tweakcn free to use?",
    answer:
      "Yes, tweakcn is completely free to use. We may introduce premium features in the future, but the core functionality will always remain free.",
  },
  {
    question: "What is tweakcn Pro and what does it include?",
    answer:
      "tweakcn Pro is a premium subscription service available for $8 per month. It unlocks all of tweakcn's advanced features, including powerful AI theme generation. You can cancel your subscription at any time and still benefit from the core functionality.",
  },
  {
    question: "How do I customize a shadcn/ui theme?",
    answer:
      "You can customize a shadcn/ui theme by selecting the a preset theme you want to use from the dropdown menu and then adjusting the colors to you liking. Once you are happy with the theme, you can export the code by either copying it or running the command to apply the theme to your project automatically.",
  },
  {
    question: "Does tweakcn support Tailwind CSS v4?",
    answer:
      "Yes, tweakcn supports Tailwind CSS v4 (and v3). You can choose the version of Tailwind CSS you want to use from the dropdown menu in the Code section. It also supports multiple color formats to best suit your project.",
  },
  {
    question: "Do I need to know Tailwind CSS to use tweakcn?",
    answer:
      "No, you don't need to know Tailwind CSS to use tweakcn. Our visual editor makes it easy to customize components without writing any code. However, having some knowledge of Tailwind CSS will help you understand the generated code better.",
  },
  {
    question: "Can I use tweakcn with my existing shadcn/ui project?",
    answer:
      "Yes, tweakcn is designed to work with existing shadcn/ui projects. You can export the generated code by either copying it or running the command to apply the theme to your project automatically.",
  },
  {
    question: "Is tweakcn open source?",
    answer:
      "Yes :) tweakcn is open source. You can find the source code on GitHub and contribute to the project if you'd like to help improve it. You can also join the discord server to get help from the community.",
  },
];


export type FAQ = (typeof faqs)[number];