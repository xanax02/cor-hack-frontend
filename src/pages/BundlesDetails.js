import React, { useEffect, useState } from "react";
import BundleDetailComp from "../components/detailPageComps/BundleDetailComp";
import { useParams } from "react-router-dom";
import { baseURL } from "../util/baseURL";

const BundlesDetails = () => {
  const [report, setReport] = useState();
  const reportId = useParams().reportId;
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    try {
      fetch(`${baseURL}/report/${reportId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => setReport(result));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-[75%] mx-auto p-8">
      <BundleDetailComp data={report} />
    </div>
  );
};

export default BundlesDetails;
