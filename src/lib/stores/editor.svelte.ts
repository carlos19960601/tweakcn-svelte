import { defaultThemeState } from "$lib/config/theme";
import type { ThemeEditorState } from "$lib/types/editor";
import { applyThemeToElement } from "$lib/utils/apply-theme";
import { getPresetThemeStyles } from "$lib/utils/theme-preset-helper.svelte";
import { writable } from "svelte/store";

interface EditorStore {
  themeState: ThemeEditorState;
}

const initialState: EditorStore = {
  themeState: defaultThemeState,
};

function createEditorStore() {
  const { subscribe, update } = writable<EditorStore>(initialState);

  const applyThemePreset = (preset: string) => {
    const newStyles = getPresetThemeStyles(preset);
    update((state) => {
      const newThemeState = { ...state.themeState, styles: newStyles }
      applyThemeToElement(newThemeState, document.documentElement)
      return { ...state, themeState: newThemeState }
    })
  }


  return {
    subscribe,
    applyThemePreset,
  };
}


export const editorStore = createEditorStore();