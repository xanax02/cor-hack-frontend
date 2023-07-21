import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import cronstrue from "cronstrue";
import cronParser from "cron-parser";

import ButtonNavCol from "../components/UI/ButtonNavCol";

const CreateApp = () => {
  const navigate = useNavigate();
  const appName = useRef();
  const appDesc = useRef();
  const cronString = useRef();
  const [validCron, setValidCron] = useState(false);
  const [allFieldsValid, setAllFieldsValid] = useState(false);

  // when the submit button is clicked
  const submitHandler = () => {
    //fetchapi
    console.log(appName.current.value);
    console.log(appDesc.current.value);
    navigate("/", { replace: true });
  };

  // on every cron string change this function will run and parse the cron string
  const validator = (event) => {
    let isValidator = true;
    try {
      cronParser.parseExpression(event.target.value);
    } catch (e) {
      isValidator = false;
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
          ref={cronString}
          onChange={validator}
        />
        <p>Not a valid cron string</p>

        <label className="block mb-2 text-lg font-medium mt-8 ">
          Description
        </label>
        <textarea
          className="resize-none block p-2.5 w-full h-[150px] text-lg rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none"
          placeholder="Write something about your app..."
          ref={appDesc}
        />
        <div className="flex mt-4 items-center justify-end">
          <ButtonNavCol
            disable={true}
            title="Continue"
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateApp;
