import React from "react";
import { useSelector } from "react-redux";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import SmallLineChart from "../chart/SmallLineChart";
import DataListNavigation from "./DataListNavigation";
import SystemList from "./SystemList";

const SystemData = () => {
  const systems = useSelector((state) => state.systems?.systems);
  return (
    <div className="w-[70%] mx-auto">
      {/* Header */}
      <DataListNavigation />
      {/* System details */}
      <BorderedGrayContainer>
        <div className="flex justify-between">
          <p className="text-gray-300 text-2xl">
            Number of systems connected :
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-2xl">{systems.count ? systems.count : 0}</p>
            <SmallLineChart value={systems.count ? 100 : 0} />
          </div>
        </div>
      </BorderedGrayContainer>
      {/* list */}
      <SystemList title={"Systems"} data={systems.hostnameList} />
    </div>
  );
};

export default SystemData;
