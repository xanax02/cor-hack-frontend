import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import ButtonNavCol from "../components/UI/ButtonNavCol";

const Project = () => {
  const projectName = useRef();
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const nextHandler = async () => {
    //fetch api for new project
    const token = localStorage.getItem("token");
    if (projectName.current?.value === undefined || projectName)
      try {
        await fetch("http://localhost:4200/project", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({
            projectName: projectName.current.value,
            createAt: new Date().toISOString(),
          }),
        });
        navigate("/", { replace: true });
      } catch (err) {
        if ((err.message = "no name")) {
          alert("please give a name to your project");
        } else {
          alert("Something went wrong. Please try again");
        }
      }
  };

  return (
    <div className="relative h-[100vh] w-[100vw]">
      <div className="absolute top-[20%] left-[5%]">
        <p className="text-gray-400 text-lg">01/01</p>
      </div>
      <div className="absolute top-[25%] left-[5%]">
        <h2 className="text-6xl text-gray-200 font-medium">
          Create a new Project
        </h2>
        <input
          type="text"
          className="bg-transparent focus:outline-none border-b-4 border-b-gray-200 text-4xl mt-8"
          placeholder="your project name"
          ref={projectName}
        />
        <div className="flex mt-8 justify-end">
          <ButtonNavCol title={"Continue"} onClick={nextHandler} />
        </div>
      </div>
    </div>
  );
};

export default Project;
