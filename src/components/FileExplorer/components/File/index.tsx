import "./File.css";
import fileIcon from "../../../../assets/file.svg";

interface FileProps {
  name: string;
}

const File: React.FC<FileProps> = ({ name }) => {
  return (
    <div className="fileContainer">
      <img className="fileIcon" src={fileIcon} />
      {name}
    </div>
  );
};

export default File;
