import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../util/baseURL";
import CardReport from "../UI/CardReport";
import { systemsSliceActions } from "../../store/systems-slice";
import { useParams } from "react-router-dom";
import { bundlesSliceActions } from "../../store/bundles-slice";

const DashboardData = () => {
  const userToken = localStorage.getItem("token");
  const appId = useParams().id;
  const [systems, setSystems] = useState();
  const [bundles, setBundles] = useState();
  const [processedBundles, setProcessedBundles] = useState();
  const [freshBundles, setFreshBundles] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      fetch(`${baseURL}/report/hosts?appId=${appId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setSystems(result.count);
          dispatch(systemsSliceActions.setHosts(result));
        });
      fetch(`${baseURL}/report?appId=${appId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setBundles(result);
          dispatch(bundlesSliceActions.setBundles(result));
        });
      // third req
      fetch(`${baseURL}/report?appId=${appId}&bundleStatus=processed`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setProcessedBundles(result);
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
    } catch (err) {
      console.log(err);
    }
  }, [userToken, appId]);

  return (
    <div className="p-8 flex flex-wrap">
      <div className="mr-6">
        <CardReport
          numbers={systems}
          title={"Systems Connected"}
          button={"show systems"}
          value={100}
          link={`/app/${appId}/systems`}
        />
      </div>
      <div className="mr-6">
        <CardReport
          numbers={processedBundles?.count}
          title={"Processed Bundles"}
          button={"show bundles"}
          value={(processedBundles?.count / bundles?.count) * 100}
          link={`/app/${appId}/bundles`}
        />
      </div>
      <div className="mr-6">
        <CardReport
          numbers={freshBundles?.count}
          title={"Fresh Bundles"}
          button={"show bundles"}
          value={(freshBundles?.count / bundles?.count) * 100}
          link={`/app/${appId}/bundles`}
        />
      </div>
    </div>
  );
};

export default DashboardData;
