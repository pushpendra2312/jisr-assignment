import { ActionType } from "../types/types";

export interface ContextMenuOption {
  action: ActionType;
  label: string;
}

export interface ContextMenuState {
  contextMenuLeft: number;
  contextMenuTop: number;
  isContextMenuVisible: boolean;
  selectedFileName: string | null;
}
