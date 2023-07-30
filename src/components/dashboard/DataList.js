import React from "react";
import DataListItems from "./DataListItems";

const DataList = (props) => {
  let dataArray = [];

  console.log(props.data[0].bundleName);
  if (props.bundles) {
    props.data.map((item) => dataArray.push(item.bundleName));
  } else {
    dataArray = props.data;
  }

  return (
    <div className="bg-[#171D21]/70 p-4 rounded-sm">
      <p className="mb-2">{props.title}:</p>
      {dataArray?.map((item, index) => {
        return <DataListItems link={""} data={item} key={index + 1} />;
      })}
    </div>
  );
};

export default DataList;
