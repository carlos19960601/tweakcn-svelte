import { defaultPresets } from "@/constants/theme-presets";
import type { ThemePreset } from "@/types/theme";
import { writable } from "svelte/store";

interface ThemePresetStore {
  presets: Record<string, ThemePreset>;
}

const initialState: ThemePresetStore = {
  presets: defaultPresets,
};

function createThemePresetStore() {
  const { subscribe, set, update } = writable<ThemePresetStore>(initialState);


  return {
    subscribe,
  };
}


export const themePresetStore = createThemePresetStore();