import { useContext, useState } from "react";
import FileExplorer from "../..";

import FileExplorerContext from "../../../../context/fileExplorer";

import folderClosed from "../../../../assets/folderClosed.svg";
import folderOpen from "../../../../assets/folderOpen.svg";

import "./Folder.css";
import { FolderProps } from "../../../../interfaces/interfaces";

const FolderComp = ({ name, itemList }: FolderProps) => {
  const fileExplorerContext = useContext(FileExplorerContext);

  const highlightItem = fileExplorerContext?.highlightItem;
  const highlightItemHandler = fileExplorerContext?.highlightItemHandler;

  const [isExpanded, setIsExpanded] = useState(false);

  const openFolder = () => {
    setIsExpanded((prev) => !prev);
    if (highlightItemHandler) {
      highlightItemHandler(name);
    }
  };

  return (
    <>
      <div
        className={`${
          highlightItem === name ? "folderContainer--highlighted" : ""
        } folderContainer`}
        onClick={openFolder}
      >
        <img
          alt="folder-icon"
          src={isExpanded ? folderOpen : folderClosed}
          className="folderIcon"
        />
        {name}
      </div>
      {!!itemList.length && isExpanded && <FileExplorer itemList={itemList} />}
    </>
  );
};

export default FolderComp;
