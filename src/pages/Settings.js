import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { baseURL } from "../util/baseURL";
import Inputs from "../components/appConfiguration/Inputs";
import ConfigDetails from "../components/appConfiguration/ConfigDetails";
import { useDispatch, useSelector } from "react-redux";
import { appConfigurationActions } from "../store/appconfiguration-slice";

const Settings = (props) => {
  const userToken = localStorage.getItem("token");
  const params = useParams();
  const dispatch = useDispatch();

  const handleData = (data) => {
    console.log(data.commands);
    dispatch(appConfigurationActions.setFiles(data.files));
    dispatch(appConfigurationActions.setFolders(data.folders));
    dispatch(appConfigurationActions.setCommands(data.commands));
    dispatch(appConfigurationActions.setDataPresent(true));
  };

  useEffect(() => {
    try {
      fetch(`${baseURL}/spec/?appId=${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) =>
          fetch(`${baseURL}/spec/${result}`, {
            method: "GET",
            headers: {
              authorization: userToken,
            },
          })
            .then((response) => response.json())
            .then((result) => handleData(result))
        );
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
