import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import DisplayDiv from "./DisplayDiv";
import { appConfigurationActions } from "../../store/appconfiguration-slice";
import { baseURL } from "../../util/baseURL";
import SnackBar from "../UI/SnackBar";

const ConfigDetails = (props) => {
  const folders = useSelector((state) => state.appConfiguration?.folders);
  const files = useSelector((state) => state.appConfiguration?.files);
  const commands = useSelector((state) => state.appConfiguration?.scripts);
  const appId = useSelector((state) => state.currentApp.app._id);
  const disable = useSelector((state) => state.appConfiguration?.isPresent);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token");

  const submitHandler = () => {
    props.onClick({ folders, files, commands, appId });
    dispatch(appConfigurationActions.setDataPresent(true));
  };

  const cancelHandler = () => {
    dispatch(appConfigurationActions.resetData());
  };

  const deleteHandler = async () => {
    dispatch(appConfigurationActions.resetData());
    dispatch(appConfigurationActions.setDataPresent(false));
    await fetch(`${baseURL}/spec/${props.specId}`, {
      method: "DELETE",
      headers: {
        authorization: userToken,
      },
    });
    setOpen(true);
  };

  return (
    <>
      <SnackBar
        open={open}
        message={"Successfully deleted the configuration"}
        serverity="success"
        setOpen={setOpen}
      />
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
              className="text-xl px-4 mr-4 rounded-md outline outline-red-600 text-red-500"
              onClick={disable ? deleteHandler : cancelHandler}
            >
              {disable ? "Delete" : "Cancel"}
            </button>
            <button
              className={`text-xl px-4  rounded-md outline outline-[#24c58f] text-[#24c58f] ${
                disable ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={submitHandler}
              disabled={disable}
            >
              Save
            </button>
          </div>
        )}
      </BorderedGrayContainer>
    </>
  );
};

export default ConfigDetails;
