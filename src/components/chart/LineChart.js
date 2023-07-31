import React, { useState, useEffect } from "react";

const LineChart = (props) => {
  const [widthValue, setWidthValue] = useState(0);

  useEffect(() => {
    if (props.value === NaN || props.value === Infinity || !props.value) {
      setWidthValue(0);
    } else {
      setWidthValue(props.value);
    }
  }, [props.value]);

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
