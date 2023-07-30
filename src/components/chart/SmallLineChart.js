import React, { useState, useEffect } from "react";

const SmallLineChart = (props) => {
  const [widthValue, setWidthValue] = useState(0);

  useEffect(() => {
    setWidthValue(props.value);
  }, []);

  return (
    <div className="w-[50px] h-0.5 bg-blue-200 rounded-xl">
      <div
        className="h-0.5 bg-blue-700 rounded-2xl"
        style={{
          width: `${widthValue}%`,
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default SmallLineChart;
