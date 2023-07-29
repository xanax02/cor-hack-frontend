import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../util/baseURL";
import { hostSliceAction } from "../../store/hosts-slice";

const DashboardData = () => {
  const userToken = localStorage.getItem("token");
  const appId = useSelector((state) => state.currentApp?.app?._id);
  const [hosts, setHosts] = useState();

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
          setHosts(result.count);
          dispatch(hostSliceAction.setHosts(result));
        });
    } catch (err) {
      console.log(err);
    }
  }, [userToken]);

  return (
    <div className="p-8">
      <div>
        <p>Number of hosts: </p>
        <p>{hosts}</p>
      </div>
      <div>
        <p>Bundles: </p>
        <p>Processed bundles: </p>
        <p>Fresh bundles: </p>
      </div>
    </div>
  );
};

export default DashboardData;
