import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CardSmall = (props) => {
  const deleteHandler = (event) => {
    props.onDelete();
  };

  return (
    <div className="group hover:bg-white/5 duration-100  cursor-pointer relative h-[200px] w-[220px]">
      <div
        onClick={props.onClick}
        className="w-full h-full flex flex-col items-center justify-center  shrink-0  bg-[#171D21] mr-6 mb-6 rounded-lg text-lg font-medium"
      >
        <p>{props.create}</p>
        <p>{props.title}</p>
      </div>
      {props.isDelete && (
        <span
          onClick={deleteHandler}
          className="absolute right-4 bottom-2 rounded-full hover:bg-white/10 group-hover:block duration-200 px-2 py-1"
        >
          <DeleteIcon />{" "}
        </span>
      )}
    </div>
  );
};

export default CardSmall;
