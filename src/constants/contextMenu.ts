import { ContextMenuOption } from "../interfaces/interfaces";
import { ActionType } from "../types/types";

export const ACTION_TYPE_CUT: ActionType = "CUT";
export const ACTION_TYPE_RENAME: ActionType = "RENAME";
export const ACTION_TYPE_DELETE: ActionType = "DELETE";

export const CONTEXT_MENU_OPTIONS: ContextMenuOption[] = [
  {
    action: ACTION_TYPE_CUT,
    label: "Cut",
  },
  {
    action: ACTION_TYPE_RENAME,
    label: "Rename",
  },
  {
    action: ACTION_TYPE_DELETE,
    label: "Delete",
  },
];
