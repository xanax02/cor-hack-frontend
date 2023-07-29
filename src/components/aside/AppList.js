import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { baseURL } from "../../util/baseURL";
import { NavLink, Link } from "react-router-dom";

const AppList = () => {
  const [apps, setApps] = useState();
  const projectId =
    useSelector((state) => state.currentProject.projectId) ||
    localStorage.getItem("currentProject");
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    try {
      fetch(`${baseURL}/app?projectId=${projectId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => setApps(result));
    } catch (err) {
      console.log(err);
    }
  }, [projectId, userToken]);

  return (
    <Accordion
      style={{
        backgroundColor: "#171D21",
        color: "white",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-white" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p className="text-lg ml-16">Apps</p>
      </AccordionSummary>
      <AccordionDetails>
        {apps?.map((app, index) => {
          return (
            <NavLink
              to={`/app/${app._id}/dashboard`}
              key={index + 1}
              children={({ isActive }) => {
                return (
                  <div
                    className={`pt-1.5 w-full pl-4 hover:bg-white/10 duration-200 h-10 ${
                      isActive ? "bg-white/10" : ""
                    }`}
                  >
                    <p>{app.appName}</p>
                  </div>
                );
              }}
            />
          );
        })}
        <div className="flex w-full items-center pl-12 pt-2 border-t-2 border-white/5 px-4">
          <Link to={"/new/app"}>
            <span className="text-[#ffffff] font-bold text-xl mr-1">
              <AddBoxIcon />
            </span>{" "}
            Add app
          </Link>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AppList;
