import { z } from "zod";

export const themeStylePropsSchema = z.object({
  background: z.string().describe("The default background color, paired with `foreground`."),
  foreground: z.string().describe("Paired with `background`."),
  card: z.string().describe("The background color for cards, paired with `card-foreground`."),
  "card-foreground": z.string().describe("Paired with `card`."),
  primary: z.string().describe("The main color, paired with `primary-foreground`."),
  "primary-foreground": z.string().describe("Paired with `primary`."),
  secondary: z.string().describe("A secondary color, paired with `secondary-foreground`."),
  "secondary-foreground": z.string().describe("Paired with `secondary`."),
  accent: z
    .string()
    .describe("Subtle color for hover or highlight, paired with `accent-foreground`."),
  "accent-foreground": z.string().describe("Paired with `accent`."),
})

export const themeStylesSchema = z.object({
  light: themeStylePropsSchema,
  dark: themeStylePropsSchema
})

export type ThemeStyleProps = z.infer<typeof themeStylePropsSchema>;
export type ThemeStyles = z.infer<typeof themeStylesSchema>;


export interface ThemePreset {
  source?: "SAVED" | "BUILT_IN",
  created_at?: string,
  label?: string,
  styles: {
    light: Partial<ThemeStyleProps>,
    dark: Partial<ThemeStyleProps>
  }
}