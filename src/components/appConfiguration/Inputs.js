import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import BorderedContainer from "../layout/BorderedContainer";
import ServiceInput from "../UI/ServiceInput";
import { appConfigurationActions } from "../../store/appconfiguration-slice";
import TerminalInput from "./TerminalInput";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";

const Inputs = () => {
  const folderNameRef = useRef();
  const folderDescRef = useRef();
  const folderPathRef = useRef();
  const fileNameRef = useRef();
  const fileDescRef = useRef();
  const filePathRef = useRef();
  const commandNameRef = useRef();
  const commandDescRef = useRef();

  const dispatch = useDispatch();

  const addHandler = (type) => {
    if (type === "folder") {
      dispatch(
        appConfigurationActions.addFolder({
          name: folderNameRef.current?.value,
          description: folderDescRef.current?.value,
          path: folderPathRef.current?.value,
        })
      );
      folderDescRef.current.value = "";
      folderNameRef.current.value = "";
      folderPathRef.current.value = "";
    }
    if (type === "file") {
      dispatch(
        appConfigurationActions.addFile({
          name: fileNameRef.current?.value,
          description: fileDescRef.current?.value,
          path: filePathRef.current?.value,
        })
      );
      fileDescRef.current.value = "";
      fileNameRef.current.value = "";
      filePathRef.current.value = "";
    }
  };

  const commandAddHandler = (data) => {
    dispatch(
      appConfigurationActions.addCommand({
        name: commandNameRef.current.value,
        description: commandDescRef.current.value,
        script: data,
      })
    );
    commandDescRef.current.value = "";
    commandNameRef.current.value = "";
  };

  return (
    <>
      <BorderedContainer>
        <p className="mb-4">CronString</p>
        <p>* * * * *</p>
      </BorderedContainer>

      {/* app Configuration from here */}
      <BorderedContainer>
        <p className="mb-2">Configure App</p>
        <p className="mb-2">Folders</p>
        <BorderedGrayContainer>
          <ServiceInput
            placeholder={{ name: "Folder", place: "folder" }}
            ref={{
              nameRef: folderNameRef,
              descRef: folderDescRef,
              pathRef: folderPathRef,
            }}
            onClick={() => {
              addHandler("folder");
            }}
          />
        </BorderedGrayContainer>

        {/* file Configuration from here */}
        <p className="mb-2">Files</p>
        <BorderedGrayContainer>
          <p>Folders</p>
          <ServiceInput
            placeholder={{ name: "File", place: "file" }}
            ref={{
              nameRef: fileNameRef,
              descRef: fileDescRef,
              pathRef: filePathRef,
            }}
            onClick={() => {
              addHandler("file");
            }}
          />
        </BorderedGrayContainer>

        {/* commands from here */}
        <p className="mb-2">Commands</p>
        <BorderedGrayContainer>
          <TerminalInput
            ref={{
              nameRef: commandNameRef,
              descRef: commandDescRef,
            }}
            onClick={commandAddHandler}
          />
        </BorderedGrayContainer>
      </BorderedContainer>
    </>
  );
};

export default Inputs;
