import React from "react";

import Navigation from "../UI/Navigation";
import DropDownList from "../UI/DropDownList";

const LogDetail = () => {
  return (
    <div className="w-full">
      <Navigation />
      <DropDownList />
      <div className="bg-[#171D21] max-h-[70vh] p-4 rounded-md mt-4"></div>
    </div>
  );
};

export default LogDetail;
