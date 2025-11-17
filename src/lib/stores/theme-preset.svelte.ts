import { defaultPresets } from "$lib/constants/theme-presets";
import type { ThemePreset } from "$lib/types/theme";
import { writable } from "svelte/store";

interface ThemePresetStore {
  presets: Record<string, ThemePreset>;
}

const initialState: ThemePresetStore = {
  presets: defaultPresets,
};

function createThemePresetStore() {
  const { subscribe } = writable<ThemePresetStore>(initialState);

  return {
    subscribe,
  };
}


export const themePresetStore = createThemePresetStore();