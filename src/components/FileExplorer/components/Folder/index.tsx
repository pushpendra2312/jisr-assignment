import FileExplorer from "../..";
import { Folder, File } from "../../../../types/types";

import "./Folder.css";

interface FolderProps {
  name: string;
  itemList: (File | Folder)[];
}

const FolderComp = ({ name, itemList }: FolderProps) => {
  return (
    <>
      <div>{name}</div>
      {!!itemList.length && <FileExplorer itemList={itemList} />}
    </>
  );
};

export default FolderComp;
