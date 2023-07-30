import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Navigation = (props) => {
  const navigate = useNavigate();

  const handleBefore = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate(1);
  };

  return (
    <div className="">
      <Link to={""}>
        <NavigateBeforeIcon onClick={handleBefore} />
        <NavigateNextIcon onClick={handleNext} />
      </Link>
    </div>
  );
};

export default Navigation;
