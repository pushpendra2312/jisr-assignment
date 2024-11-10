import fileIcon from "../../../../assets/file.svg";
import imgIcon from "../../../../assets/imgIcon.svg";
import jsIcon from "../../../../assets/jsIcon.svg";

export const getFileIcon = (type: string) => {
  if (type === "img") {
    return imgIcon;
  }

  if (type === "js") {
    return jsIcon;
  }

  return fileIcon;
};
