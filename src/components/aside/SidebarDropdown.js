import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { baseURL } from "../../util/baseURL";
import { IoMdArrowDropdown } from "react-icons/io";

const SidebarDropdown = (props) => {
  const [drop, setDrop] = useState(true);
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
    <div className="w-full flex flex-col items-center text-lg border-y-2 border-gray-500 cursor-pointer">
      <div
        className={`${
          drop ? "-mb-2" : ""
        } h-16 flex shrink-0 items-center cursor-pointer w-full justify-center pl-3`}
        onClick={() => {
          setDrop((drop) => (drop = !drop));
        }}
      >
        <p className="mr-1">{props.title}</p>
        <IoMdArrowDropdown className="mt-1 text-xl" />
      </div>
      <div
        className={`${
          drop ? "flex flex-col mb-4 items-center justify-center" : "hidden"
        } duration-200 w-full`}
      >
        {apps?.map((app, index) => {
          return (
            <Link to={`/app/${app._id}`} key={index + 1} className="w-full">
              <DropDownItem title={app.appName} />
            </Link>
          );
        })}
        <div className="flex w-full items-center justify-center pt-2 border-t-2 border-white/5 px-4">
          <Link to={"/new/app"} className="-ml-2">
            <span className="text-[#ffffff] font-bold text-xl mr-1">+</span> Add
            app
          </Link>
        </div>
      </div>
    </div>
  );
};

const DropDownItem = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="h-12 hover:bg-white/10 w-full flex justify-center items-center "
    >
      <p>{props.title}</p>
    </div>
  );
};

export default SidebarDropdown;
