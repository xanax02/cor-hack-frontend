import React from "react";
import { useSelector } from "react-redux";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import DataList from "./DataList";
import SmallLineChart from "../chart/SmallLineChart";
import DataListNavigation from "./DataListNavigation";

const SystemData = () => {
  const systems = useSelector((state) => state.systems?.systems);

  return (
    <div className="w-[70%] mx-auto">
      {/* Header */}
      <DataListNavigation />
      {/* System details */}
      <BorderedGrayContainer>
        <div className="flex justify-between">
          <p className="text-gray-300">Number of systems connected :</p>
          <div className="flex items-center">
            <p className="mr-2">{systems.count}</p>
            <SmallLineChart value={80} />
          </div>
        </div>
      </BorderedGrayContainer>
      {/* list */}
      <DataList title={"Systems"} data={systems.hostnameList} />
    </div>
  );
};

export default SystemData;
