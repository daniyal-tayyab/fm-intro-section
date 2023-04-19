import React from "react";
import { Box } from "./DropDownItem.styles";

const DropdownItem = ({ icon, title }) => {
  return (
    <Box>
      <img src={icon} />
      <p>{title}</p>
    </Box>
  );
};

export default DropdownItem;
