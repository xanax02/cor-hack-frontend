import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordItem = (props) => {
  return (
    <Accordion
      style={{
        backgroundColor: "#212c33",
        color: "white",
        marginBottom: "4px",
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
        {props.name && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">Name - </p>
            <p className="inline-block text-gray-300">{props.name}</p>
          </div>
        )}
        {props.path && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">Path - </p>
            <p className="inline-block text-gray-300">{props.path}</p>
          </div>
        )}
        {props.description && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">
              Desription -{" "}
            </p>
            <p className="inline-block text-gray-300">{props.description}</p>
          </div>
        )}
        {props.size && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">Size - </p>
            <p className="inline-block text-gray-300">{props.size}</p>
          </div>
        )}
        {props.fileCounts && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">
              File counts -{" "}
            </p>
            <p className="inline-block text-gray-300">{props.fileCounts}</p>
          </div>
        )}
        {props.folderCounts && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">
              Folder counts -{" "}
            </p>
            <p className="inline-block text-gray-300">{props.folderCounts}</p>
          </div>
        )}
        {props.logFileCount && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">Log files - </p>
            <p className="inline-block text-gray-300">{props.logFileCount}</p>
          </div>
        )}
        {props.script && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">Script - </p>
            <p className="inline-block text-gray-300">{props.script}</p>
          </div>
        )}
        {props.output && (
          <div className="mb-2 hover:bg-white/10 px-4 rounded-md duration-200">
            <p className="mb-1 text-gray-400 mr-2 inline-block">Output - </p>
            <p className="inline-block text-gray-300">{props.output}</p>
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordItem;
