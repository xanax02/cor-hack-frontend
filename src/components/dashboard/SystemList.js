import React from "react";
import DataListItems from "./DataListItems";
import { useParams } from "react-router-dom";

const SystemList = (props) => {
  const appId = useParams().id;
  return (
    <div className="bg-[#171D21]/70 p-4 rounded-sm">
      <p className="mb-2">{props.title}:</p>
      {props.data?.map((item, index) => {
        return (
          <DataListItems
            link={`/app/${appId}/system/details/${item}`}
            data={item}
            key={index + 1}
          />
        );
      })}
    </div>
  );
};

export default SystemList;
