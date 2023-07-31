import React from "react";
import LineChart from "../chart/LineChart";
import { Link } from "react-router-dom";

const CardReport = (props) => {
  return (
    <div className="bg-[#171D21] h-80 w-[350px] flex flex-col items-center justify-center rounded-md mb-4">
      <h2 className="text-6xl font-semibold mb-4">{props.numbers}</h2>
      <h3 className="text-xl mb-2">{props.title}</h3>
      <LineChart
        value={
          props.value !== NaN || props.value !== Infinity ? props.value : 0
        }
      />
      {props.link && (
        <Link to={props.link}>
          <p className="bg-[#0D253F] px-4 py-1 rounded-lg cursor-pointer mt-6">
            {props.button}
          </p>
        </Link>
      )}
    </div>
  );
};

export default CardReport;
