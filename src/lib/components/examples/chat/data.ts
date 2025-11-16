import { defaultPresets } from "$lib/constants/theme-presets";
import type { ChatMessage } from "$lib/types/ai";
import type { ThemeStyles } from "$lib/types/theme";

export const CHAT_PLACEHOLDER_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    parts: [
      {
        type: "text",
        text: "Can you generate a theme from this image?",
      },
    ],
    metadata: {
      promptData: {
        content: "Generate a theme from this image.",
        mentions: [],
        images: [
          {
            url: "/og-image.v050725.png",
          },
        ],
      },
    },
  },
  {
    id: "2",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "I've generated a Midnight Bloom theme based on your image. It features deep purples and blues for a calming, modern look.",
      },
    ],
    metadata: {
      themeStyles: defaultPresets["midnight-bloom"].styles as ThemeStyles,
    },
  },
  {
    id: "3",
    role: "user",
    parts: [
      {
        type: "text",
        text: "Can you generate a theme inspired by @Twitter?",
      },
    ],
  },
  {
    id: "4",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Alright, I've whipped up a Twitter-inspired theme. Expect bright blues and clean contrasts for a social, energetic vibe.",
      },
    ],
    metadata: {
      themeStyles: defaultPresets["twitter"].styles as ThemeStyles,
    },
  },
  {
    id: "5",
    role: "user",
    parts: [
      {
        type: "text",
        text: "How about a @Supabase theme?",
      },
    ],
  },
  {
    id: "6",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "I've generated a Supabase theme for you. It uses fresh greens and dark backgrounds for a modern, developer-friendly feel.",
      },
    ],
    metadata: {
      themeStyles: defaultPresets["supabase"].styles as ThemeStyles,
    },
  },
];
