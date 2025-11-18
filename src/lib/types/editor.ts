import type { ThemeStyles } from "./theme";

// Base interface for any editor's state
export interface BaseEditorState {
  styles: ThemeStyles;
}


export interface ThemeEditorState extends BaseEditorState {
  preset?: string;
  hslAdjustments?: {
    hueShift: number,
    saturationScale: number;
    lightnessScale: number;
  }
}
