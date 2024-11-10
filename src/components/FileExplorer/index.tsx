import { ItemType, type File, type Folder } from "../../types/types";
import FolderComp from "./components/Folder";
import FileComp from "./components/File";

import "./FileExplorer.css";

interface FileExplorerProps {
  itemList: (File | Folder)[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ itemList }) => {
  return (
    <>
      {itemList.map((item) => {
        const { name, type } = item;
        const list = type === ItemType.Folder ? (item as Folder).data : [];
        if (type === ItemType.Folder) {
          return <FolderComp key={name} name={name} itemList={list} />;
        }
        return <FileComp key={name} name={name} />;
      })}
    </>
  );
};

export default FileExplorer;
