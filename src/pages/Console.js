import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { projectsActions } from "../store/projects-slice";
import { currentProjectActions } from "../store/currentProject-slice";

import MainNavigation from "../components/header/MainNavigation";
import CardSmall from "../components/UI/CardSmall";

const Console = () => {
  const userToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/project", {
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
        dispatch(projectsActions.setProjects(result));
        console.log(result);
      });
  }, [userToken, dispatch]);

  const selectProject = (projectId) => {
    dispatch(currentProjectActions.setCurrentProject(projectId));
    localStorage.setItem("currentProject", projectId);
  };

  return (
    <>
      <MainNavigation />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 w-[70%] mx-auto mt-14">
        <Link to={"/new/project"}>
          <CardSmall create={"+"} title={"Create Project"} />
        </Link>
        {projects.map((data, index) => {
          return (
            <Link to={"/"} key={index + 1}>
              <CardSmall
                title={data.projectName}
                onClick={() => {
                  selectProject(data._id);
                }}
              />
            </Link>
          );
        })}
      </main>
    </>
  );
};

export default Console;
