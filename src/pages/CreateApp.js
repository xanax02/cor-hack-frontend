import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import cronstrue from "cronstrue";
import MenuItem from "@mui/material/MenuItem";

import { baseURL } from "../util/baseURL";
import ButtonNavCol from "../components/UI/ButtonNavCol";
import { useSelector } from "react-redux";
import SnackBar from "../components/UI/SnackBar";

import { StyledMenu } from "../components/UI/StyledMenu";

const CreateApp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [appId, setAppId] = useState();
  const appName = useRef();
  const appDesc = useRef();
  const cronStringRef = useRef();
  const [validCron, setValidCron] = useState(true);
  const [cronValue, setCronValue] = useState("");
  const userToken = localStorage.getItem("token");
  const [downButton, setdownButton] = useState(false);
  const projectId =
    useSelector((state) => state.currentProject.projectId) ||
    localStorage.getItem("currentProject");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      setOpen(true);
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
      setAppId(appId);
      const response2 = await fetch(`${baseURL}/daemon/build/${appId}`, {
        method: "POST",
        headers: {
          authorization: userToken,
          host: baseURL,
        },
        body: JSON.stringify(cronStringRef.current.value),
      });
      console.log(response2);
      if (response.status === 201) {
        setdownButton(true);
      } else {
        throw new Error("something went wrong");
      }
      // navigate(`/app/${appId}`, { replace: true });
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

  const downloader = async (platform) => {
    const fileUrl = `${baseURL}/daemon/download/${appId}?platform=${platform}`; // Replace with the URL of your application file
    try {
      const response = await fetch(fileUrl, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      });

      // Check if the request was successful
      if (!response.ok) {
        // Handle the error if needed
        console.error("Failed to download the file.");
        return;
      }

      // Get the filename from the response headers (optional, but recommended)
      const filename = response.headers.get("Content-Disposition");
      const suggestedFilename = filename
        ? filename.split("filename=")[1]
        : "downloaded_application.zip"; // Replace with your desired default filename

      // Convert the response body to a blob
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = suggestedFilename;

      // Programmatically click the link to trigger the download
      link.click();

      // Clean up the temporary URL and link element
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error during file download:", error);
    }
  };

  const handleWinDown = () => {
    downloader("windows");
  };
  const handleLinDown = () => {
    downloader("linux");
  };

  // returning jsx
  return (
    <>
      <SnackBar
        open={open}
        message={"Plase provide necessary details"}
        severity="error"
        setOpen={setOpen}
      />
      <div className="relative flex h-[100vh] w-[100vw]">
        <div className="absolute left-[5%] top-[20%]">
          <h2 className="text-6xl text-gray-200 font-medium">
            Create a new App
          </h2>
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
            {!downButton && (
              <ButtonNavCol title="Continue" onClick={submitHandler} />
            )}
            {downButton && (
              <>
                <ButtonNavCol title="Download" onClick={handleClick} />
                <StyledMenu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open2}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleLinDown}>Linux</MenuItem>
                  <MenuItem onClick={handleWinDown}>Windows</MenuItem>
                </StyledMenu>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateApp;
