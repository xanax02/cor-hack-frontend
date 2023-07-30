import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BorderedContainer from "../layout/BorderedContainer";
import ServiceInput from "../UI/ServiceInput";
import { appConfigurationActions } from "../../store/appconfiguration-slice";
import TerminalInput from "./TerminalInput";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import SnackBar from "../UI/SnackBar";

const Inputs = () => {
  const [open, setOpen] = useState(false);
  const folderNameRef = useRef();
  const folderDescRef = useRef();
  const folderPathRef = useRef();
  const fileNameRef = useRef();
  const fileDescRef = useRef();
  const filePathRef = useRef();
  const commandNameRef = useRef();
  const commandDescRef = useRef();

  const appCronString = useSelector(
    (state) => state.currentApp?.app?.cronString
  );
  const appCronStringReadable = useSelector(
    (state) => state.currentApp?.app?.readableCron
  );

  const dispatch = useDispatch();

  const addHandler = (type) => {
    if (type === "folder") {
      if (
        folderNameRef.current?.value !== "" &&
        folderDescRef.current?.value !== "" &&
        folderPathRef.current?.value !== ""
      ) {
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
      } else {
        setOpen(true);
      }
    }
    if (type === "file") {
      if (
        fileDescRef.current?.value !== "" &&
        fileNameRef.current?.value !== "" &&
        filePathRef.current?.value !== ""
      ) {
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
      } else {
        setOpen(true);
      }
    }
  };

  const commandAddHandler = (data) => {
    if (
      commandDescRef.current?.value !== "" &&
      commandNameRef.current?.value !== "" &&
      data
    ) {
      dispatch(
        appConfigurationActions.addCommand({
          name: commandNameRef.current.value,
          description: commandDescRef.current.value,
          script: data,
        })
      );
      commandDescRef.current.value = "";
      commandNameRef.current.value = "";
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <SnackBar
        open={open}
        message={"Plase provide necessary details"}
        severity="error"
        setOpen={setOpen}
      />
      <BorderedContainer>
        <p className="mb-4">CronString</p>
        <p className="inline-block">{appCronString}</p>
        <p className="inline-block ml-4 text-gray-400">
          {appCronStringReadable}
        </p>
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
