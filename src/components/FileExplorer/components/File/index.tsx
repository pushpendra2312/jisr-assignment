import { useContext } from "react";
import fileIcon from "../../../../assets/file.svg";
import FileExplorerContext from "../../../../context/fileExplorer";
import { FileProps } from "../../../../interfaces/interfaces";

import "./File.css";

const File: React.FC<FileProps> = ({ name }) => {
  const fileExplorerContext = useContext(FileExplorerContext);

  const { highlightItem, highlightItemHandler } = fileExplorerContext;

  const handleFileClick = () => {
    highlightItemHandler(name);
  };

  return (
    <div
      className={`${
        highlightItem === name ? "fileContainer--highlighted" : ""
      } fileContainer`}
      onClick={handleFileClick}
    >
      <img className="fileIcon" src={fileIcon} />
      {name}
    </div>
  );
};

export default File;
