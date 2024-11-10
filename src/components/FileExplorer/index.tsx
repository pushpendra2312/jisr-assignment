import { ItemType, type File, type Folder } from "../../types/types";
import FolderComp from "./components/Folder";
import FileComp from "./components/File";

import "./FileExplorer.css";

interface FileExplorerProps {
  itemList: (File | Folder)[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ itemList }) => {
  return (
    <div className="fileExplorerContainer">
      {itemList.map((item) => {
        const { name, type } = item;
        const list = type === ItemType.Folder ? (item as Folder).data : [];
        return type === ItemType.Folder ? (
          <FolderComp key={name} name={name} itemList={list} />
        ) : (
          <FileComp key={name} name={name} />
        );
      })}
    </div>
  );
};

export default FileExplorer;
