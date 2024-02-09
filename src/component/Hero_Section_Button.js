import React from "react";
import { Button, Typography } from "@mui/material";

export const Hero_Section_Button = ({
  border,
  backgroundColor,
  variant,
  text,
  color,
}) => {
  return (
    <Button
      className="sec-hero-btn"
      sx={{
        
        border: border,
        color: color,
        gap: "10px",
        backgroundColor: backgroundColor,
        variant: variant,
        borderRadius: "30px",
        gap: "10px",
        fontFamily:'Inter',
        fontSize:'22px',
        px:3,
        py:1
      }}
    >
        {text}
    </Button>
  );
};
