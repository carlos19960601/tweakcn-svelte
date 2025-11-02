import type { ThemePreset } from "@/types/theme";

export const defaultPresets: Record<string, ThemePreset> = {
  "modern-minimal": {
    label: "Modern Minimal",
    styles: {
      light: {
        "background": "#ffffff",
        foreground: "#333333",
        primary: "#3b82f6",
        "primary-foreground": "#ffffff",
        secondary: "#f3f4f6",
        "secondary-foreground": "#4b5563",
        accent: "#e0f2fe",
        "accent-foreground": "#1e3a8a",
      },
      dark: {
        background: "#171717",
        foreground: "#e5e5e5",
        primary: "#3b82f6",
        "primary-foreground": "#ffffff",
        secondary: "#262626",
        "secondary-foreground": "#e5e5e5",
        accent: "#1e3a8a",
        "accent-foreground": "#bfdbfe",
      }
    }
  },
  twitter: {
    label: "Twitter",
    styles: {
      light: {
        background: "#ffffff",
        foreground: "#0f1419",
        primary: "#1e9df1",
        "primary-foreground": "#ffffff",
        secondary: "#0f1419",
        "secondary-foreground": "#ffffff",
        accent: "#E3ECF6",
        "accent-foreground": "#1e9df1",
      },
      dark: {
        background: "#000000",
        foreground: "#e7e9ea",
        primary: "#1c9cf0",
        "primary-foreground": "#ffffff",
        secondary: "#f0f3f4",
        "secondary-foreground": "#0f1419",
        accent: "#061622",
        "accent-foreground": "#1c9cf0",
      }
    }
  }
}