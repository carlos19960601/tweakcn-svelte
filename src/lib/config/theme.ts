import type { ThemeEditorState } from "$lib/types/editor";
import type { ThemeStyleProps } from "$lib/types/theme";

// these are common between light and dark modes
// we can assume that light mode's value will be used for dark mode as well
export const COMMON_STYLES = [
  "font-sans",
  "font-serif",
  "font-mono",
  "radius",
  "shadow-opacity",
  "shadow-blur",
  "shadow-spread",
  "shadow-offset-x",
  "shadow-offset-y",
  "letter-spacing",
  "spacing",
];

// Default light theme styles
export const defaultLightThemeStyles: ThemeStyleProps = {
  background: "oklch(1 0 0)",
  foreground: "oklch(0.145 0 0)",
  card: "oklch(1 0 0)",
  "card-foreground": "oklch(0.145 0 0)",
  primary: "oklch(0.205 0 0)",
  "primary-foreground": "oklch(0.985 0 0)",
  secondary: "oklch(0.97 0 0)",
  "secondary-foreground": "oklch(0.205 0 0)",
  accent: "oklch(0.97 0 0)",
  "accent-foreground": "oklch(0.205 0 0)",
}

// Default dark theme styles
export const defaultDarkThemeStyles = {
  ...defaultLightThemeStyles,
  background: "oklch(0.145 0 0)",
  foreground: "oklch(0.985 0 0)",
  card: "oklch(0.205 0 0)",
  "card-foreground": "oklch(0.985 0 0)",
  primary: "oklch(0.922 0 0)",
  "primary-foreground": "oklch(0.205 0 0)",
  secondary: "oklch(0.269 0 0)",
  "secondary-foreground": "oklch(0.985 0 0)",
  accent: "oklch(0.371 0 0)",
  "accent-foreground": "oklch(0.985 0 0)",
}

// Default theme state
export const defaultThemeState: ThemeEditorState = {
  styles: {
    light: defaultLightThemeStyles,
    dark: defaultDarkThemeStyles,
  },
}
