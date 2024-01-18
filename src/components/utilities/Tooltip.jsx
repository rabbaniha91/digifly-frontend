import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import React from "react";

const CustomTooltip = ({ title, children }) => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "var(--title-color)",
      color: "var(--text-color)",
      boxShadow: theme.shadows[1],
      fontSize: "0.889rem",
      fontFamily: "vazir_medium",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: "var(--title-color)",
    },
  }));
  return (
    <LightTooltip title={title} arrow>
      {children}
    </LightTooltip>
  );
};

export default CustomTooltip;
