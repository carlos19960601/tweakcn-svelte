export const steps = [
  {
    step: "01",
    title: "Select Theme Preset",
    description: "Choose the theme you want to customize from our growing library.",
  },
  {
    step: "02",
    title: "Customize Visually",
    description:
      "Use our intuitive interface to adjust colors, dimensions, typography, and other properties.",
  },
  {
    step: "03",
    title: "Copy Code",
    description: "Copy the generated Tailwind CSS code directly into your project.",
  },
];


export type Step = (typeof steps)[number];