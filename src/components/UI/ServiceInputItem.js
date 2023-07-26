import React, { forwardRef } from "react";

const ServiceInputItem = forwardRef((props, ref) => {
  return (
    <>
      <p className="my-2">{props.title}</p>
      <input
        ref={ref}
        className="bg-[#242E34] focus:outline-none h-[40px] flex-grow px-4 placeholder:text-gray-600 block w-full"
        placeholder={props.placeholder}
      />
    </>
  );
});

export default ServiceInputItem;
