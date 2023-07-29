import React from "react";
import BorderedGrayContainer from "../layout/BorderedGrayContainer";

const DashboardData = (props) => {
  console.log(props.data);

  props.data.map((report, index) => {
    console.log(index, report);
    return <h1>this is a report</h1>;
  });
};

export default DashboardData;
