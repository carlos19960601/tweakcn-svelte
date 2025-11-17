import { defaultThemeState } from "$lib/config/theme";
import { getPresetThemeStyles } from "$lib/utils/theme-preset-helper.svelte";

const themeState = $state(defaultThemeState)

export function applyThemePreset(preset: string) {
  const newStyles = getPresetThemeStyles(preset);
  themeState.styles = newStyles
}