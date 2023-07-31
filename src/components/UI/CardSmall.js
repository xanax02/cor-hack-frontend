import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CardSmall = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="group hover:bg-white/5 duration-100 flex flex-col items-center justify-center h-[200px] shrink-0 w-[220px] bg-[#171D21] mr-6 mb-6 rounded-lg text-lg font-medium cursor-pointer relative"
    >
      <p>{props.create}</p>
      <p>{props.title}</p>
      {props.isDelete && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            props.onDelete();
          }}
          className="absolute hidden right-4 bottom-2 rounded-full hover:bg-white/10 group-hover:block duration-200 px-2 py-1"
        >
          <DeleteIcon />{" "}
        </span>
      )}
    </div>
  );
};

export default CardSmall;
