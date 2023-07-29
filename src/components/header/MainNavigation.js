import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { baseURL } from "../../util/baseURL";
import { createOverlayActions } from "../../store/createOverlay-slice";
import { IoMdArrowDropdown } from "react-icons/io";
import { currentAppActions } from "../../store/currentApp-slice";
import Profile from "./Profile";

const MainNavigation = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [app, setApp] = useState();
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    if (params.id) {
      try {
        fetch(`${baseURL}/app/${params.id}`, {
          method: "GET",
          headers: {
            authorization: userToken,
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setApp(result);
            dispatch(currentAppActions.setCurrentApp(result));
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      setApp("");
    }
  }, [params.id, userToken, dispatch]);

  return (
    <div className="h-[70px] bg-[#0D253F] flex pr-20 items-center justify-between">
      <div className="flex items-center">
        <div
          className={`w-[250px] ${
            props.sidebarFull ? "bg-[#171D21]" : ""
          } h-[70px] flex items-center justify-center`}
        >
          <h1
            className="text-4xl tracking-wider font-bold"
            style={{ fontFamily: "Righteous" }}
          >
            DiagSensei
          </h1>
        </div>
        {props.sidebarFull && (
          <>
            <div
              className="ml-5 rounded-lg flex items-center justify-center cursor-pointer text-gray-300 hover:text-white duration-100"
              onClick={() => {
                dispatch(createOverlayActions.setShowOverlay(true));
              }}
            >
              <p className="text-lg mr-1">Projects</p>
              <IoMdArrowDropdown className=" right-8 top-4" />
            </div>
            <p className="ml-12 opacity-90">{app?.appName}</p>
          </>
        )}
      </div>
      <div className="flex">
        <Profile />
      </div>
    </div>
  );
};

export default MainNavigation;
