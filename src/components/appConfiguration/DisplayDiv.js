import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";

const DisplayDiv = (props) => {
  return (
    <Accordion
      style={{
        backgroundColor: "#212c33",
        color: "white",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-white" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p>{props.title}</p>
      </AccordionSummary>
      <AccordionDetails>
        <div className="mb-2">
          <p className="mb-1 text-gray-300 mr-2 inline-block">Desription - </p>
          <p className="inline-block text-gray-300">{props.desc}</p>
        </div>
        <div>
          <p className="mb-1 text-gray-300 inline-block mr-2">
            {props.type} -{" "}
          </p>
          {props.type !== "Command" && (
            <p className="text-gray-300 inline-block">{props.data}</p>
          )}
          {props.type === "Command" && (
            <CodeMirror
              value={props.data}
              className="w-full"
              minHeight="40px"
              readOnly={true}
              extensions={[StreamLanguage.define(shell)]}
              theme={"dark"}
              style={{ fontSize: "14px" }}
              placeholder={"Your commands here"}
            />
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default DisplayDiv;
