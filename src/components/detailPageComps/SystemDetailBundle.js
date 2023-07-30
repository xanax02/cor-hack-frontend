import React from "react";
import CardReport from "../UI/CardReport";
import { useParams } from "react-router-dom";

const SystemDetailBundle = (props) => {
  const appId = useParams().id;
  return (
    <div className="bg-[#171D21]/20 p-4 rounded-sm max-h-[50vh] overflow-scroll scroll-hide">
      <p className="mb-4">System Bundles: </p>
      <div className="flex flex-wrap justify-around">
        <CardReport
          numbers={props.data?.count}
          title={"Total bundles"}
          value={100}
          link={`/app/${appId}/bundles/?hostname=${props.hostname}`}
          button={"View"}
        />
        <CardReport
          numbers={props.data?.count}
          title={"Processed bundles"}
          value={100}
          link={`/app/${appId}/bundles/?hostname=${props.hostname}&status=processed`}
          button={"View"}
        />
        <CardReport
          numbers={props.data?.count}
          title={"Fresh bundles"}
          value={100}
          link={`/app/${appId}/bundles/?hostname=${props.hostname}&status=fresh`}
          button={"View"}
        />
      </div>
    </div>
  );
};

export default SystemDetailBundle;
