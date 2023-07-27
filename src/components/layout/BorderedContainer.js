import React from "react";

const BorderedContainer = (props) => {
  return (
    <div className="mb-4 border-2 border-white rounded-lg p-4">
      {props.children}
    </div>
  );
};

export default BorderedContainer;
