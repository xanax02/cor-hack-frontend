import React from "react";
import { Link, useParams } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AppList from "./AppList";

const AsideLeft = () => {
  const appId = useParams().id;

  return (
    <div className="flex-shrink-0 w-[250px] min-h-[calc(100vh-70px)] bg-[#171D21] py-3">
      <AppList />
      <div className="h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer">
        <DashboardIcon />
        <p className="ml-2">Dashboard</p>
      </div>
      <div className="h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer">
        <BackupTableIcon />
        <p className="ml-2">Bundles</p>
      </div>
      <Link to={`app/${appId}/settings/configure`}>
        <div className="h-[88px] flex items-center pl-16 hover:bg-white/10 duration-200 cursor-pointer">
          <SettingsIcon />
          <p className="ml-2">Settings</p>
        </div>
      </Link>
    </div>
  );
};

export default AsideLeft;
