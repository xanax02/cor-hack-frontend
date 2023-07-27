import React from "react";

const BorderedGrayContainer = (props) => {
  return (
    <div className="mb-4 max-h-full border-2 w-full border-gray-600 rounded-lg p-4">
      {props.children}
    </div>
  );
};

export default BorderedGrayContainer;

//h-[calc(100vh-130px)]
