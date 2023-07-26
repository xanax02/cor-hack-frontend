import React, { forwardRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";

const TerminalInput = forwardRef((props, ref) => {
  return (
    <>
      <p className="mb-2">Name</p>
      <input
        ref={ref.nameRef}
        placeholder="Name for the command"
        className="bg-[#242E34] focus:outline-none h-[40px] flex-grow px-4 placeholder:text-gray-600 block w-full"
      />
      <p className="my-2">Description</p>
      <input
        placeholder="Description for the command"
        ref={ref.descRef}
        className="bg-[#242E34] focus:outline-none h-[40px] flex-grow px-4 placeholder:text-gray-600 block w-full"
      />
      <p className="my-2">command</p>
      <CodeMirror
        ref={ref.commandRef}
        className="w-full"
        minHeight="40px"
        readOnly={false}
        extensions={[StreamLanguage.define(shell)]}
        theme={"dark"}
        style={{ fontSize: "14px" }}
        placeholder={"Your commands here"}
      />
      <div className="text-right">
        <button className="bg-[#171D21] px-8 h-9" onClick={props.onClick}>
          Add
        </button>
      </div>
    </>
  );
});

export default TerminalInput;
