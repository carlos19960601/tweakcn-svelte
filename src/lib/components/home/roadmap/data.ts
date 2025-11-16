import { FolderIcon, GridIcon, LayersIcon, PaletteIcon, RepeatIcon, UsersIcon } from "@lucide/svelte";

export const roadmapItems = [
  {
    title: "Global Theme Editor",
    description: "Create and manage complete themes with presets for your entire application.",
    status: "Done",
    icon: PaletteIcon,
  },
  {
    title: "Theme Import/Export",
    description: "Save and share your custom themes with others.",
    status: "Done",
    icon: RepeatIcon,
  },
  {
    title: "AI Theme Generation",
    description:
      "Generate and customize themes with AI assistance, making theme creation faster and more intuitive",
    status: "In Progress",
    icon: LayersIcon,
  },
  {
    title: "Community Themes",
    description: "Allow users to submit themes, vote on the best designs",
    status: "Coming Soon",
    icon: UsersIcon,
  },
  {
    title: "Multi-Project Management",
    description:
      "Save and manage multiple theme projects, making it easy to switch between designs.",
    status: "Planned",
    icon: FolderIcon,
  },
  {
    title: "Smart Theme Generator",
    description:
      "Generate beautiful themes from a single color, color pair, or even an image. Expand your customization options with AI-powered theme generation.",
    status: "Planned",
    icon: GridIcon,
  },
];

export type Roadmap = (typeof roadmapItems)[number];