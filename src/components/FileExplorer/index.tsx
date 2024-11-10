import type { File, Folder } from "../../types/types";

import "./FileExplorer.css";

interface FileExplorerProps {
  itemList: (File | Folder)[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ itemList }) => {
  return (
    <>
      {itemList.map((item) => {
        const { name } = item;

        return <div key={name}>{name}</div>;
      })}
    </>
  );
};

export default FileExplorer;
