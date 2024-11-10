export enum ItemType {
  File = "file",
  Folder = "folder",
}

export type File = {
  type: ItemType.File;
  meta: string;
  name: string;
};

export type Folder = {
  type: ItemType.Folder;
  name: string;
  data: Array<File | Folder>;
};

export type ActionType = "CUT" | "RENAME" | "DELETE";
