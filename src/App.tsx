import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import FileExplorerContext from "./context/fileExplorer";

import { FILES_DATA } from "./data/fileExplorer";

import "./App.css";

function App() {
  const [highlightItem, setHighlightItem] = useState<string | null>(null);

  const highlightItemHandler = (fileName: string) => {
    setHighlightItem(fileName);
  };

  const contextMenuState = {
    highlightItem,
    highlightItemHandler,
  };

  return (
    <FileExplorerContext.Provider value={contextMenuState}>
      <FileExplorer itemList={FILES_DATA.data} />
    </FileExplorerContext.Provider>
  );
}

export default App;
