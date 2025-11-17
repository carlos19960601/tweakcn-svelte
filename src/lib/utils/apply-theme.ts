import { COMMON_STYLES } from "$lib/config/theme";
import type { ThemeEditorState } from "$lib/types/editor";
import type { Theme, ThemeStyles } from "$lib/types/theme";
import { setMode } from 'mode-watcher';
import { colorFormatter } from ".";
import { applyStyleToElement } from "./apply-style-to-element";


const COMMON_NON_COLOR_KEYS = COMMON_STYLES;

export function applyThemeToElement(themeState: ThemeEditorState, rootElement: HTMLElement) {
  const { currentMode: mode, styles: themeStyles } = themeState;

  if (!rootElement) return;

  setMode(mode)

  // Apply mode-specific colors
  applyThemeColors(rootElement, themeStyles, mode);
}

const applyThemeColors = (root: HTMLElement,
  themeStyles: ThemeStyles,
  mode: Theme) => {

  Object.entries(themeStyles[mode]).forEach(([key, value]) => {
    if (typeof value === "string" && !COMMON_NON_COLOR_KEYS.includes(key)) {
      const hslValue = colorFormatter(value, "hsl", "4");
      applyStyleToElement(root, key, hslValue);
    }
  })
} 