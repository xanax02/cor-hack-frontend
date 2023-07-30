import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../util/baseURL";
import LaptopIcon from "@mui/icons-material/Laptop";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import Navigation from "../UI/Navigation";
import SystemDetailBundle from "./SystemDetailBundle";

const SystemDetailComp = () => {
  const appId = useParams().id;
  const hostname = useParams().hostname;
  const userToken = localStorage.getItem("token");
  const [systemBundles, setSystemBundles] = useState();

  useEffect(() => {
    try {
      fetch(`${baseURL}/report/hosts/${hostname}?appId=${appId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => setSystemBundles(result));
    } catch (err) {
      console.log(err);
    }
  }, [userToken, appId, hostname]);

  return (
    <>
      <Navigation />
      <div className="w-[50%] mt-4">
        <BorderedGrayContainer>
          <div className="flex items-center justify-between px-16">
            <LaptopIcon style={{ fontSize: "200px" }} />
            <div className="ml-8">
              <div className="flex">
                <p className="text-gray-400 text-xl">Hostname: </p>
                <p className="ml-3 text-xl">{hostname}</p>
              </div>
              <div className="flex">
                <p className="text-gray-400 text-xl">Total Bundles: </p>
                <p className="ml-3 text-xl">{systemBundles?.count}</p>
              </div>
            </div>
          </div>
        </BorderedGrayContainer>
      </div>
      <SystemDetailBundle
        hostname={hostname}
        title={"System bundles"}
        data={systemBundles}
      />
    </>
  );
};

export default SystemDetailComp;
