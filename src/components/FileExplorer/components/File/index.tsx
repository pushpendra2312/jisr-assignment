import "./File.css";

interface FileProps {
  name: string;
}

const File: React.FC<FileProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default File;
