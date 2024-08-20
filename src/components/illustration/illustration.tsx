import React from "react";
import { IIllustration } from "./illustrations";
import { Box, SxProps, Theme } from "@mui/material";

interface IIconProps {
  sx?: SxProps<Theme>;
  width?: string;
  height?: string;
  illustration: IIllustration;
}

const defaultSx = {
  width: "100px",
  height: "100px",
};

export const Illustration = (params: IIconProps) => {
  const { illustration, sx, height, width } = params;

  return (
    <Box
      sx={{
        ...defaultSx,
        height: height ?? defaultSx.height,
        width: width ?? defaultSx.width,
        ...sx,
        display: "inline-block",
      }}
    >
      <img
        src={illustration.illustration}
        alt={illustration.title}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};
