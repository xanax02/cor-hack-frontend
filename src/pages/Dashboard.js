import React, { useEffect, useState } from "react";

import { baseURL } from "../util/baseURL";
import { useSelector } from "react-redux";
import DashboardData from "../components/dashboard/DashboardData";

const Dashboard = () => {
  const userToken = localStorage.getItem("token");
  const appId = useSelector((state) => state.currentApp?.app?._id);
  const [reports, setReports] = useState();

  useEffect(() => {
    try {
      fetch(`${baseURL}/report?appId=${appId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => setReports(result));
    } catch (err) {
      console.log(err);
    }
  }, [userToken]);

  if (reports) {
    return <DashboardData data={reports} />;
  }
  return <h1>Loading</h1>;
};

export default Dashboard;
