import React, { useRef } from "react";
import ServiceInput from "../components/UI/ServiceInput";
import ButtonOutline from "../components/UI/ButtonOutline";
import BorderedContainer from "../components/layout/BorderedContainer";

const Settings = () => {
  const folderRef = useRef();
  const fileRef = useRef();
  const commandRef = useRef();
  const cronRef = useRef();

  return (
    <div className="flex m-8">
      <div className="w-[60%] ">
        <BorderedContainer>
          <ServiceInput
            title="CronString"
            placeholder="Your cron string"
            ref={cronRef}
          />
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
      </div>
      <div></div>
    </div>
  );
};

export default Settings;
