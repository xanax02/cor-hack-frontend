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
      {folders?.length > 0 && <p className="mt-2">Folders</p>}
      {folders?.map((folder, index) => {
        return <DisplayDiv data={folder} key={index + 1} />;
      })}
      {files?.length > 0 && <p className="mt-2">Files</p>}
      {files?.map((file, index) => {
        return <DisplayDiv data={file} key={index + 1} />;
      })}
    </BorderedGrayContainer>
  );
};

export default ConfigDetails;
