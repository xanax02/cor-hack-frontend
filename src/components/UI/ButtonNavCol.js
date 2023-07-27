import React from "react";

const ButtonNavCol = (props) => {
  return (
    <div
      className="bg-[#0D253F] flex px-8 py-2 rounded-md items-center cursor-pointer"
      onClick={props.onClick}
    >
      <button className="text-2xl">{props.title}</button>
    </div>
  );
};

export default ButtonNavCol;
