import React from "react";
import DataListItems from "./DataListItems";
import { useParams } from "react-router-dom";

const BundleList = (props) => {
  const appId = useParams().id;
  return (
    <div className="bg-[#171D21]/70 p-4 rounded-sm">
      <p className="mb-2">{props.title}:</p>
      {props.data?.map((item, index) => {
        return (
          <DataListItems
            link={`/app/${appId}/bundles/details/${item._id}`}
            data={item.bundleName}
            key={index + 1}
          />
        );
      })}
    </div>
  );
};

export default BundleList;
