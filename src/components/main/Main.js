import React from "react";

const Main = (props) => {
  return (
    <div className="bg-[#1E272D] h-[calc(100vh-70px)] flex-grow  rounded-md overflow-scroll scroll-hide">
      {props.children}
    </div>
  );
};

export default Main;
