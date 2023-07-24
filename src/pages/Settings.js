import React from "react";

import Inputs from "../components/appConfiguration/Inputs";
import ConfigDetails from "../components/appConfiguration/ConfigDetails";

const Settings = (props) => {
  return (
    <div className="flex m-8 justify-between">
      <div className="w-[60%] ">
        <Inputs />
      </div>
      <div className="w-[38%]">
        <ConfigDetails />
      </div>
    </div>
  );
};

export default Settings;
