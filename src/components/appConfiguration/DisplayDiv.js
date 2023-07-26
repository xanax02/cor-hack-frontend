import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DisplayDiv = (props) => {
  return (
    <Accordion style={{ backgroundColor: "#212c33", color: "white" }}>
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
          <p className="text-gray-300 inline-block">{props.data}</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default DisplayDiv;
