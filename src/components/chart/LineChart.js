import React, { useState, useEffect } from "react";

const LineChart = (props) => {
  const [widthValue, setWidthValue] = useState(0);

  useEffect(() => {
    setWidthValue(props.value);
  }, []);

  return (
    <div className="w-[150px] h-2 bg-blue-200 rounded-xl">
      <div
        className="h-2 bg-blue-700 rounded-2xl"
        style={{
          width: `${widthValue}%`,
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default LineChart;
