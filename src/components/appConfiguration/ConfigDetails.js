import React from "react";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import { useSelector } from "react-redux";
import DisplayDiv from "./DisplayDiv";

const ConfigDetails = () => {
  const folders = useSelector((state) => state.appConfiguration?.folders);
  const files = useSelector((state) => state.appConfiguration?.files);

  return (
    <BorderedGrayContainer>
      <p>Configuration</p>
      {folders?.length > 0 && <p className="my-2">Folders</p>}
      {folders?.map((folder, index) => {
        return (
          <DisplayDiv
            key={index + 1}
            title={folder.name}
            desc={folder.description}
            type={"Path"}
            data={folder.path}
          />
        );
      })}

      {/* Files */}
      {files?.length > 0 && <p className="my-2">Files</p>}
      {files?.map((file, index) => {
        return (
          <DisplayDiv
            key={index + 1}
            title={file.name}
            desc={file.description}
            type={"Path"}
            data={file.path}
          />
        );
      })}
    </BorderedGrayContainer>
  );
};

export default ConfigDetails;
