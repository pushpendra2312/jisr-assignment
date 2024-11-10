import { createContext } from "react";
import { FileExplorerContextType } from "../interfaces/interfaces";

const FileExplorerContext = createContext<FileExplorerContextType | null>(null);

export default FileExplorerContext;
