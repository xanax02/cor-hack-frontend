import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import BorderedContainer from "../layout/BorderedContainer";
import ServiceInput from "../UI/ServiceInput";
import ButtonOutline from "../UI/ButtonOutline";
import { appConfigurationActions } from "../../store/appconfiguration-slice";
import TerminalInput from "./TerminalInput";

const Inputs = () => {
  const folderRef = useRef();
  const fileRef = useRef();
  const commandRef = useRef();

  const dispatch = useDispatch();

  const addHandler = (type) => {
    if (type === "folder") {
      dispatch(appConfigurationActions.addFolder(folderRef.current.value));
      folderRef.current.value = "";
    }
    if (type === "file") {
      dispatch(appConfigurationActions.addFile(fileRef.current.value));
      fileRef.current.value = "";
    }
  };

  return (
    <>
      <BorderedContainer>
        <p className="mb-4">CronString</p>
        <p>* * * * *</p>
      </BorderedContainer>
      <BorderedContainer>
        <p className="mb-2">Configure App</p>
        <ServiceInput
          title="folder"
          placeholder="Your folder path"
          ref={folderRef}
          onClick={() => {
            addHandler("folder");
          }}
        />
        <ServiceInput
          title="files"
          placeholder="Your file path"
          ref={fileRef}
          onClick={() => {
            addHandler("file");
          }}
        />
        <TerminalInput />
        <div className="text-right mt-6">
          <ButtonOutline title="Save" />
        </div>
      </BorderedContainer>
    </>
  );
};

export default Inputs;
