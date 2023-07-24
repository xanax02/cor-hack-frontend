import React from "react";

import BorderedGrayContainer from "../components/layout/BorderedGrayContainer";
import Inputs from "../components/appConfiguration/Inputs";

const Settings = (props) => {
  return (
    <div className="flex m-8 justify-between">
      <div className="w-[60%] ">
        <Inputs />
      </div>
      <div className="w-[38%]">
        <BorderedGrayContainer>
          <p>Configuration</p>
        </BorderedGrayContainer>
      </div>
    </div>
  );
};

export default Settings;
