import React, { useState, useEffect } from "react";
import CardReport from "../UI/CardReport";
import { useParams } from "react-router-dom";
import { baseURL } from "../../util/baseURL";

const SystemDetailBundle = (props) => {
  const appId = useParams().id;
  const userToken = localStorage.getItem("token");
  const [processedBundles, setProcessedBundles] = useState();
  const [freshBundles, setFreshBundles] = useState();

  useEffect(() => {
    fetch(`${baseURL}/report?appId=${appId}&bundleStatus=processed`, {
      method: "GET",
      headers: {
        authorization: userToken,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setProcessedBundles(result);
        console.log(result);
      });
    //fourth req
    fetch(`${baseURL}/report?appId=${appId}&bundleStatus=fresh`, {
      method: "GET",
      headers: {
        authorization: userToken,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setFreshBundles(result);
      });
  }, [appId]);

  return (
    <div className="p-4 rounded-sm max-h-[50vh] overflow-scroll scroll-hide">
      <p className="mb-4">System Bundles: </p>
      <div className="flex flex-wrap justify-between">
        <CardReport
          numbers={props.data?.count}
          title={"Total bundles"}
          value={100}
          link={`/app/${appId}/bundles/?hostname=${props.hostname}`}
          button={"View"}
        />
        <CardReport
          numbers={processedBundles?.count}
          title={"Processed bundles"}
          value={(processedBundles?.count / props.data?.count) * 100}
          link={`/app/${appId}/bundles/?hostname=${props.hostname}&status=processed`}
          button={"View"}
        />
        <CardReport
          numbers={freshBundles?.count}
          title={"Fresh bundles"}
          value={(freshBundles?.count / props.data?.count) * 100}
          link={`/app/${appId}/bundles/?hostname=${props.hostname}&status=fresh`}
          button={"View"}
        />
      </div>
    </div>
  );
};

export default SystemDetailBundle;
