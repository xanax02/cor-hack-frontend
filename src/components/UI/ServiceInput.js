import React, { forwardRef } from "react";
import ServiceInputItem from "./ServiceInputItem";

const ServiceInput = forwardRef((props, ref) => {
  return (
    <div className="w-full mt-2">
      <ServiceInputItem
        title={"Name"}
        placeholder={`Name for your ${props.placeholder.place}`}
        ref={ref.nameRef}
      />
      <ServiceInputItem
        title="Description"
        placeholder={`Description for your ${props.placeholder.place}`}
        ref={ref.descRef}
      />
      <ServiceInputItem
        title="Path"
        placeholder={`Description for your ${props.placeholder.place}`}
        ref={ref.pathRef}
      />
      <div className="w-full text-right">
        <button className="bg-[#171D21] px-8 h-9" onClick={props.onClick}>
          Add
        </button>
      </div>
    </div>
  );
});

export default ServiceInput;

//242E34
