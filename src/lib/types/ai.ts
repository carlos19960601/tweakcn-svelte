import type { UIMessage } from "ai";
import type { ThemeStyles } from "./theme";


export type PromptImage = {
  url: string;
}

export type AIPromptData = {
  content: string;
  mentions: MentionReference[];
  images?: PromptImage[];
}

export type MyMetadata = {
  promptData?: AIPromptData;
  themeStyles?: ThemeStyles;
};


export type ChatMessage = UIMessage<MyMetadata, MyUIDataParts, MyUITools>;