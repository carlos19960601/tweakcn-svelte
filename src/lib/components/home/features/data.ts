import { BrainCircuitIcon, CodeIcon, ContrastIcon, FileCodeIcon, LayersIcon, PaintbrushIcon } from "@lucide/svelte";

export const features = [
  {
    title: "Color Control",
    description:
      "Customize background, text, and border colors with an intuitive color picker interface. We even integrate with the latest Tailwind v4 color palette.",
    icon: PaintbrushIcon,
  },
  {
    title: "Typography Settings",
    description: "Fine-tune font size, weight, and text transform to create the perfect look.",
    icon: FileCodeIcon,
  },
  {
    title: "Tailwind v4 & v3 Support",
    description:
      "Seamlessly switch between Tailwind v4 and v3, with support for multiple color formats including OKLCH & HSL.",
    icon: CodeIcon,
  },
  {
    title: "Tailwind Properties",
    description:
      "Fine-tune every aspect of your components with precise control over radius, spacing, shadows, and other Tailwind properties.",
    icon: LayersIcon,
  },
  {
    title: "Contrast Checker",
    description:
      "Ensure your designs meet accessibility standards with built-in contrast ratio checking between text and background colors.",
    icon: ContrastIcon,
  },
  {
    title: "AI Theme Generation",
    description:
      "Create stunning, ready-to-use themes in seconds. Just provide an image or a text prompt, and our AI does the rest.",
    icon: BrainCircuitIcon,
    pro: true,
  },
];

export type Feature = (typeof features)[number];