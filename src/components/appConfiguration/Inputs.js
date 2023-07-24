import React, { useRef } from "react";
import BorderedContainer from "../layout/BorderedContainer";
import ServiceInput from "../UI/ServiceInput";
import ButtonOutline from "../UI/ButtonOutline";

const Inputs = () => {
  const folderRef = useRef();
  const fileRef = useRef();
  const commandRef = useRef();

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
          ref={fileRef}
        />
        <ServiceInput
          title="files"
          placeholder="Your file path"
          ref={commandRef}
        />
        <ServiceInput
          title="commands"
          placeholder="Your commands"
          ref={folderRef}
        />
        <div className="text-right mt-6">
          <ButtonOutline title="Save" />
        </div>
      </BorderedContainer>
    </>
  );
};

export default Inputs;
