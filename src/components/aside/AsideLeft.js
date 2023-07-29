import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AppList from "./AppList";

const AsideLeft = () => {
  const appId = useParams().id;

  return (
    <div className="flex-shrink-0 w-[250px] min-h-[calc(100vh-70px)] bg-[#171D21] py-3">
      <AppList />
      <NavLink
        to={`/app/${appId}/dashboard`}
        children={({ isActive }) => {
          return (
            <div
              className={`h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer ${
                isActive ? "bg-white/10" : ""
              }`}
            >
              <DashboardIcon />
              <p className="ml-2">Dashboard</p>
            </div>
          );
        }}
      />
      <NavLink
        to={``}
        children={({ isActive }) => {
          return (
            <div
              className={`h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer ${
                isActive ? "bg-white/10" : ""
              }`}
            >
              <PersonalVideoIcon />
              <p className="ml-2">Systems</p>
            </div>
          );
        }}
      />
      <NavLink
        to={``}
        children={({ isActive }) => {
          return (
            <div
              className={`h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer ${
                isActive ? "bg-white/10" : ""
              }`}
            >
              <BackupTableIcon />
              <p className="ml-2">Bundles</p>
            </div>
          );
        }}
      />
      <NavLink
        to={`app/${appId}/settings/configure`}
        children={({ isActive }) => {
          return (
            <div
              className={`h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer ${
                isActive ? "bg-white/10" : ""
              }`}
            >
              <SettingsIcon />
              <p className="ml-2">Settings</p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default AsideLeft;
