import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { baseURL } from "../../util/baseURL";
import { createOverlayActions } from "../../store/createOverlay-slice";
import { currentProjectActions } from "../../store/currentProject-slice";
import { currentAppActions } from "../../store/currentApp-slice";

const Overlay = () => {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token");
  const [projects, setProjects] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseURL}/project`, {
      method: "GET",
      headers: {
        authorization: userToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProjects(result);
      });
  }, [userToken]);

  const changeProject = (id) => {
    dispatch(createOverlayActions.setShowOverlay(false));
    dispatch(currentProjectActions.setCurrentProject(id));
    dispatch(currentAppActions.setCurrentApp({}));
    navigate("/", { replace: true });
  };

  return (
    <>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-20 z-10"
        onClick={() => {
          dispatch(createOverlayActions.setShowOverlay(false));
        }}
      />
      <div className="absolute min-h-[144px] w-[50%] bg-[#242E34] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md p-2 flex z-10">
        <fieldset className="border-[5px] rounded-md border-gray-500 p-2 w-full">
          <legend className="text-2xl font-semibold">Your Projects</legend>
          {projects?.map((project, index) => {
            return (
              <div
                key={index + 1}
                className="w-full border border-gray-600 mb-2 rounded-sm px-4 py-2 cursor-pointer"
                onClick={() => {
                  changeProject(project._id);
                }}
              >
                <p>{project.projectName}</p>
              </div>
            );
          })}
          <div className="w-full text-right mt-3">
            <Link className=" right-2 bottom-2" to={"/new/project"}>
              <p className="text-lg font-semibold bg-[#171D21] px-4 py-2 rounded-lg inline-block">
                Create new project
              </p>
            </Link>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Overlay;
