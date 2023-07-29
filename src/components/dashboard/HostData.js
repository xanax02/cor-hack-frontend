import React, { useEffect, useState } from "react";

import { baseURL } from "../../util/baseURL";
import { useSelector } from "react-redux";

const HostData = () => {
  const userToken = localStorage.getItem("token");
  const appId = useSelector((state) => state.currentApp?.app?._id);
  const [hosts, setHosts] = useState();

  useEffect(() => {
    try {
      fetch(`${baseURL}/report/hosts?appId=${appId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => setHosts(result));
    } catch (err) {
      console.log(err);
    }
  }, [userToken, appId]);

  return <>{hosts.map((host) => console.log(host))}</>;
};

export default HostData;
