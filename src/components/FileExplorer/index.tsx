import { useState } from "react";

import { Folder, ItemType } from "../../types/types";
import {
  ContextMenuState,
  FileExplorerProps,
} from "../../interfaces/interfaces";

import FolderComp from "./components/Folder";
import FileComp from "./components/File";
import ContextMenu from "./components/ContextMenu";

import "./FileExplorer.css";

const initialContextMenuState: ContextMenuState = {
  contextMenuLeft: 0,
  contextMenuTop: 0,
  isContextMenuVisible: false,
  selectedFileName: null,
};

const FileExplorer: React.FC<FileExplorerProps> = ({ itemList }) => {
  const [contextMenu, setContextMenu] = useState({
    ...initialContextMenuState,
  });

  const openContextMenu = ({
    e,
    fileName,
  }: {
    e: React.MouseEvent<HTMLDivElement>;
    fileName: string;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    const left = e.clientX;
    const top = e.clientY;
    setContextMenu({
      contextMenuLeft: left,
      contextMenuTop: top,
      isContextMenuVisible: true,
      selectedFileName: fileName,
    });
  };

  const closeContextMenu = () => {
    setContextMenu({
      ...initialContextMenuState,
    });
  };

  return (
    <>
      {contextMenu?.isContextMenuVisible && (
        <ContextMenu
          contextMenu={contextMenu}
          closeContextMenu={closeContextMenu}
        />
      )}
      <div className="fileExplorerContainer">
        {itemList.map((item) => {
          const { name, type } = item;
          const list = type === ItemType.Folder ? (item as Folder).data : [];

          return (
            <div
              key={name}
              onContextMenu={(e) => openContextMenu({ e, fileName: name })}
            >
              {type === ItemType.Folder ? (
                <FolderComp key={name} name={name} itemList={list} />
              ) : (
                <FileComp key={name} name={name} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FileExplorer;
