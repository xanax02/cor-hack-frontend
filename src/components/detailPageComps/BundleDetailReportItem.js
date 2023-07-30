import React from "react";

const BundleDetailReportItem = (props) => {
  return (
    <div className="flex">
      <p className="text-gray-400 text-xl">{props.title} </p>
      <p className="ml-3 text-xl">{props.data}</p>
    </div>
  );
};

export default BundleDetailReportItem;
