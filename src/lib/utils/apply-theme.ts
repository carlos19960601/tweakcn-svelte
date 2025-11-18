import { COMMON_STYLES } from "$lib/config/theme";
import type { ThemeEditorState } from "$lib/types/editor";
import type { ThemeStyleProps, ThemeStyles } from "$lib/types/theme";
import { mode } from "mode-watcher";
import { colorFormatter } from ".";
import { applyStyleToElement } from "./apply-style-to-element";


const COMMON_NON_COLOR_KEYS = COMMON_STYLES;

export function applyThemeToElement(themeState: ThemeEditorState, rootElement: HTMLElement) {
  const { styles: themeStyles } = themeState;

  if (!rootElement) return;

  // Apply common styles (like border-radius) based on the 'light' mode definition
  applyCommonStyles(rootElement, themeStyles.light);
  // Apply mode-specific colors
  applyThemeColors(rootElement, themeStyles);
}

const applyCommonStyles = (root: HTMLElement, themeStyles: ThemeStyleProps) => {
  Object.entries(themeStyles)
    .filter(([key]) =>
      COMMON_NON_COLOR_KEYS.includes(
        key as (typeof COMMON_NON_COLOR_KEYS)[number]
      )
    )
    .forEach(([key, value]) => {
      if (typeof value === "string") {
        applyStyleToElement(root, key, value);
      }
    });
};


const applyThemeColors = (root: HTMLElement, themeStyles: ThemeStyles) => {
  const currentMode = mode.current ?? "light";

  Object.entries(themeStyles[currentMode]).forEach(([key, value]) => {
    if (typeof value === "string" && !COMMON_NON_COLOR_KEYS.includes(key)) {
      const hslValue = colorFormatter(value, "hsl", "4");
      applyStyleToElement(root, key, hslValue);
    }
  })
} 