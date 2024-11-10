import { ActionType, File, Folder } from "../types/types";

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

export interface FileExplorerContextType {
  highlightItem: string | null;
  highlightItemHandler: (fileName: string) => void;
}

export interface FileExplorerProps {
  itemList: (File | Folder)[];
}

export interface FileProps {
  name: string;
}

export interface FolderProps {
  name: string;
  itemList: (File | Folder)[];
}
