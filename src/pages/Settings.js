import React from "react";

import { baseURL } from "../util/baseURL";
import Inputs from "../components/appConfiguration/Inputs";
import ConfigDetails from "../components/appConfiguration/ConfigDetails";

const Settings = (props) => {
  const userToken = localStorage.getItem("token");

  const submitHandler = async (data) => {
    if (!data) return;

    try {
      const response = await fetch(`${baseURL}/spec`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: userToken,
        },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex m-8 justify-between">
      <div className="w-[60%] ">
        <Inputs />
      </div>
      <div className="w-[38%]">
        <ConfigDetails onClick={submitHandler} />
      </div>
    </div>
  );
};

export default Settings;
