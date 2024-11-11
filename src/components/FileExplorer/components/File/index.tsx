import { useContext } from "react";
import FileExplorerContext from "../../../../context/fileExplorer";
import { FileProps } from "../../../../interfaces";
import { getFileIcon } from "./utils";

import "./File.css";

const File: React.FC<FileProps> = ({ name, type }) => {
  const fileExplorerContext = useContext(FileExplorerContext);

  const highlightItem = fileExplorerContext?.highlightItem;
  const highlightItemHandler = fileExplorerContext?.highlightItemHandler;

  const handleFileClick = () => {
    highlightItemHandler?.(name);
  };

  return (
    <div
      className={`${
        highlightItem === name ? "fileContainer--highlighted" : ""
      } fileContainer`}
      onClick={handleFileClick}
    >
      <img className="fileIcon" src={getFileIcon(type)} />
      {name}
    </div>
  );
};

export default File;
