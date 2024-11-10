import "./App.css";
import FileExplorer from "./components/FileExplorer";

import { FILES_DATA } from "./data/fileExplorer";

function App() {
  return <FileExplorer itemList={FILES_DATA.data} />;
}

export default App;
