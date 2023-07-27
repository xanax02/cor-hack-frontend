import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import DisplayDiv from "./DisplayDiv";
import { appConfigurationActions } from "../../store/appconfiguration-slice";

const ConfigDetails = (props) => {
  const folders = useSelector((state) => state.appConfiguration?.folders);
  const files = useSelector((state) => state.appConfiguration?.files);
  const commands = useSelector((state) => state.appConfiguration?.scripts);
  const appId = useSelector((state) => state.currentApp.app?.id);

  const dispatch = useDispatch();

  const submitHandler = () => {
    props.onClick({ folders, files, commands, appId });
    dispatch(appConfigurationActions.resetData());
  };

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

      {/* Commands */}
      {commands?.length > 0 && <p className="my-2">Commands</p>}
      {commands?.map((command, index) => {
        return (
          <DisplayDiv
            key={index + 1}
            title={command.name}
            desc={command.description}
            type={"Command"}
            data={command.script}
          />
        );
      })}

      {/* submit button */}
      {(folders.length !== 0 ||
        files.length !== 0 ||
        commands.length !== 0) && (
        <div className="text-right mt-6">
          {/* <ButtonOutline onClick={submitHandler} title="Save" /> */}
          <button
            className="text-xl px-4  rounded-md outline outline-[#24c58f] text-[#24c58f]"
            onClick={submitHandler}
          >
            Save
          </button>
        </div>
      )}
    </BorderedGrayContainer>
  );
};

export default ConfigDetails;
