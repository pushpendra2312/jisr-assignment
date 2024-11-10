import { useState } from "react";
import FileExplorer from "../..";
import { Folder, File } from "../../../../types/types";

import folderClosed from "../../../../assets/folderClosed.svg";
import folderOpen from "../../../../assets/folderOpen.svg";

import "./Folder.css";

interface FolderProps {
  name: string;
  itemList: (File | Folder)[];
}

const FolderComp = ({ name, itemList }: FolderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openFolder = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="folderContainer" onClick={openFolder}>
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
