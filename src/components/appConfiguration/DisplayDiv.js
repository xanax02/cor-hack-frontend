import React from "react";

const DisplayDiv = (props) => {
  return (
    <div className="mt-1">
      <p className="text-gray-500">{props.data}</p>
    </div>
  );
};

export default DisplayDiv;
