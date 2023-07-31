import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { baseURL } from "../util/baseURL";
import Inputs from "../components/appConfiguration/Inputs";
import ConfigDetails from "../components/appConfiguration/ConfigDetails";
import { useDispatch } from "react-redux";
import { appConfigurationActions } from "../store/appconfiguration-slice";
import SnackBar from "../components/UI/SnackBar";
import AppControls from "../components/appConfiguration/AppControls";

const Settings = (props) => {
  const userToken = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [specId, setSpecId] = useState();
  const params = useParams();
  const dispatch = useDispatch();

  const handleData = (data) => {
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
        .then((result) => {
          setSpecId(result);
          fetch(`${baseURL}/spec/${result}`, {
            method: "GET",
            headers: {
              authorization: userToken,
            },
          })
            .then((response) => response.json())
            .then((result) => handleData(result));
        });
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
      setOpen(true);
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {open && (
        <SnackBar
          open={open}
          serverity="success"
          message="Configuration saved sucessfully"
          setOpen={setOpen}
        />
      )}
      <div className="flex m-8 justify-between">
        {params.id && (
          <>
            <div className="w-[60%] ">
              <Inputs />
            </div>
            <div className="w-[38%]">
              <ConfigDetails specId={specId} onClick={submitHandler} />
              <AppControls />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Settings;
