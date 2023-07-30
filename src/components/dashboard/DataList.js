import React from "react";
import DataListItems from "./DataListItems";

const DataList = (props) => {
  return (
    <div className="bg-[#171D21]/70 p-4">
      <p className="mb-2">{props.title}:</p>
      {props.data?.map((item, index) => {
        return <DataListItems link={""} data={item} key={index + 1} />;
      })}
    </div>
  );
};

export default DataList;
