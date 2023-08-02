import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export default function DropDownList() {
  const [log, setLog] = React.useState("");

  const handleChange = (event) => {
    setLog(event.target.value);
  };

  return (
    <Box sx={{ width: 520, marginTop: "16px", color: "white" }}>
      <FormControl sx={{ color: "white" }} fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          Log
        </InputLabel>
        <Select
          sx={{
            color: "white",
            outlineColor: "white",
            backgroundColor: "#171D21",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={log}
          label="Log"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>NONE</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
