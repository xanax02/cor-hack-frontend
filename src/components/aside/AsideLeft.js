import React from "react";

import SidebarDropdown from "./SidebarDropdown";
import { Link, useParams } from "react-router-dom";

const AsideLeft = () => {
  const appId = useParams().id;

  return (
    <div className="flex-shrink-0 w-[300px] min-h-[calc(100vh-70px)] bg-[#171D21]">
      <SidebarDropdown title={"Apps"} />
      <div className="h-[88px] flex items-center justify-center hover:bg-[#1E272D] duration-200">
        <p>Dashboard</p>
      </div>
      <div className="h-[88px] flex items-center justify-center hover:bg-[#1E272D] duration-200">
        <p>Bundles</p>
      </div>
      <Link to={`app/${appId}/settings/configure`}>
        <div className="h-[88px] flex items-center justify-center hover:bg-[#1E272D] duration-200">
          <p>Settings</p>
        </div>
      </Link>
    </div>
  );
};

export default AsideLeft;
