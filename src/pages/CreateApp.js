import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import cronstrue from "cronstrue";

import { baseURL } from "../util/baseURL";
import ButtonNavCol from "../components/UI/ButtonNavCol";
import { useSelector } from "react-redux";

const CreateApp = () => {
  const navigate = useNavigate();
  const appName = useRef();
  const appDesc = useRef();
  const cronStringRef = useRef();
  const [validCron, setValidCron] = useState(true);
  const [cronValue, setCronValue] = useState("");
  const userToken = localStorage.getItem("token");
  const projectId =
    useSelector((state) => state.currentProject.projectId) ||
    localStorage.getItem("currentProject");

  // when the submit button is clicked
  const submitHandler = async () => {
    // all feilds validator
    //fetchapi
    if (
      !validCron ||
      cronStringRef.current?.value === undefined ||
      cronStringRef.current?.value === "" ||
      appName.current?.value === undefined ||
      appName.current?.value === ""
    ) {
      alert("Please enter the valid details");
      return;
    }

    try {
      const response = await fetch(`${baseURL}/app`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: userToken,
        },
        body: JSON.stringify({
          cronString: cronStringRef.current.value,
          readableCron: cronValue,
          appName: appName.current.value,
          projectId,
          createdAt: new Date().toISOString(),
        }),
      });
      const appId = await response.text();
      navigate(`/app/${appId}`, { replace: true });
    } catch (err) {
      console.log(err);
      alert("something went wrong. Please try again");
    }
  };

  // on every cron string change this function will run and parse the cron string
  const validator = (event) => {
    try {
      const result = cronstrue.toString(event.target.value, { locale: "en" });
      setValidCron(true);
      setCronValue(result);
    } catch (err) {
      setValidCron(false);
    }
  };

  // returning jsx
  return (
    <div className="relative flex h-[100vh] w-[100vw]">
      <div className="absolute left-[5%] top-[20%]">
        <h2 className="text-6xl text-gray-200 font-medium">Create a new App</h2>
        <input
          type="text"
          className="bg-transparent focus:outline-none border-b-4 border-b-gray-200 text-4xl mt-8"
          placeholder="your app name"
          ref={appName}
        />

        <label className="block mb-2 text-lg font-medium mt-8 ">
          cronstring
        </label>
        <input
          type="text"
          className="bg-gray-700 focus:outline-none text-lg block rounded-lg border-gray-600 p-2.5"
          placeholder="cron-string"
          ref={cronStringRef}
          onChange={validator}
        />
        <p>
          {cronStringRef?.current?.value === undefined
            ? ""
            : validCron
            ? cronValue
            : "Not a valid cron"}
        </p>

        <label className="block mb-2 text-lg font-medium mt-8 ">
          Description
        </label>
        <textarea
          className="resize-none block p-2.5 w-full h-[150px] text-lg rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none"
          placeholder="Write something about your app..."
          ref={appDesc}
        />
        <div className="flex mt-4 items-center justify-end">
          <ButtonNavCol title="Continue" onClick={submitHandler} />
        </div>
      </div>
    </div>
  );
};

export default CreateApp;
