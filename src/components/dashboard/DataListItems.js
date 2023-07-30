import React from "react";
import { Link } from "react-router-dom";

const DataListItems = (props) => {
  return (
    <div className="bg-[#171D21] px-4 py-2 flex justify-between items-center hover:bg-white/10 rounded-md duration-200">
      <p>{props.data}</p>
      <Link to={props.link}>
        <p className="bg-[#0D253F] px-4 py-1 cursor-pointer rounded-lg">More</p>
      </Link>
    </div>
  );
};

export default DataListItems;
