import React from "react";

const ButtonOutline = (props) => {
  return (
    <button
      className="text-xl px-4  rounded-md outline outline-[#24c58f] text-[#24c58f]"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default ButtonOutline;
