import React from "react";
import Navigation from "../UI/Navigation";

const DataListNavigation = (props) => {
  return (
    <div className="mb-4 flex justify-between">
      <Navigation />
      {props.show && (
        <div>
          <button>button1</button>
          <button>button2</button>
          <button>button3</button>
        </div>
      )}
    </div>
  );
};

export default DataListNavigation;
