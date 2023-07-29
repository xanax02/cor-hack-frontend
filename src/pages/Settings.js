import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { baseURL } from "../util/baseURL";
import Inputs from "../components/appConfiguration/Inputs";
import ConfigDetails from "../components/appConfiguration/ConfigDetails";

const Settings = (props) => {
  const userToken = localStorage.getItem("token");
  const params = useParams();

  useEffect(() => {
    try {
      fetch(`${baseURL}/spec/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => console.log(result));
    } catch (err) {
      console.log("error");
    }
  }, [userToken, params.id]);

  const submitHandler = async (data) => {
    if (!data) return;

    try {
      await fetch(`${baseURL}/spec`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: userToken,
        },
        body: JSON.stringify(data),
      });
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex m-8 justify-between">
      {params.id && (
        <>
          <div className="w-[60%] ">
            <Inputs />
          </div>
          <div className="w-[38%]">
            <ConfigDetails onClick={submitHandler} />
          </div>
        </>
      )}
    </div>
  );
};

export default Settings;
