import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../util/baseURL";
import { hostSliceAction } from "../../store/hosts-slice";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";
import { Link } from "react-router-dom";

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
    <div className="p-8 flex">
      <div className="w-[350px]">
        <p className="mb-2">Hosts </p>
        <BorderedGrayContainer>
          <Link>
            <div className="py-2 px-3 hover:bg-white/10 duration-200 cursor-pointer">
              <p className="inline-block text-gray-300">Number of Host: </p>
              <p className="inline-block ml-2">{hosts}</p>
            </div>
          </Link>
        </BorderedGrayContainer>
      </div>
      <div className="w-[450px] ml-4">
        <p className="mb-2">Bundles </p>
        <BorderedGrayContainer>
          <Link>
            <div className="py-2 px-3 hover:bg-white/10 duration-200 cursor-pointer">
              <p className="inline-block text-gray-300">Total Bundles: </p>
              <p className="inline-block ml-2">{hosts}</p>
            </div>
          </Link>
          <Link>
            <div className="py-2 px-3 hover:bg-white/10 duration-200 cursor-pointer">
              <p className="inline-block text-gray-300">
                Number of processed bundles:{" "}
              </p>
              <p className="inline-block ml-2">{hosts}</p>
            </div>
          </Link>
          <Link>
            <div className="py-2 px-3 hover:bg-white/10 duration-200 cursor-pointer">
              <p className="inline-block text-gray-300">
                Number of processed bundles:{" "}
              </p>
              <p className="inline-block ml-2">{hosts}</p>
            </div>
          </Link>
        </BorderedGrayContainer>
      </div>
    </div>
  );
};

export default DashboardData;
