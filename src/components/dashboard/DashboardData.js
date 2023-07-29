import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../util/baseURL";
import { hostSliceAction } from "../../store/hosts-slice";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import { Link } from "react-router-dom";
import CardReport from "../UI/CardReport";

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
    <div className="p-8 flex flex-wrap">
      <CardReport
        numbers={69}
        title={"Systems Connected"}
        button={"show systems"}
        value={100}
      />
      <CardReport
        numbers={8940}
        title={"Processed Bundles"}
        button={"show bundles"}
        value={24}
      />
      <CardReport
        numbers={27000}
        title={"Fresh Bundles"}
        button={"show bundles"}
        value={76}
      />
    </div>
  );
};

export default DashboardData;
