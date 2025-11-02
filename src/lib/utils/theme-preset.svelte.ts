import { defaultThemeState } from "@/config/theme";
import { themePresetStore } from "@/stores/theme-preset-store.svelte";
import type { ThemeStyles } from "@/types/theme";
import { get } from "svelte/store";

export function getPresetThemeStyle(name: string): ThemeStyles {
  const defaultTheme = defaultThemeState.styles;
  if (name === "default") {
    return defaultTheme;
  }

  const preset = get(themePresetStore).presets[name]
  if (!preset) return defaultTheme;

  return {
    light: {
      ...defaultTheme.light,
      ...(preset.styles.light || {})
    },
    dark: {
      ...defaultTheme.dark,
      ...(preset.styles.light || {})
    },
  }
}