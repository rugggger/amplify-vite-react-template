import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ISVGIcon } from "./icons_new";
import { useTheme } from "@mui/material/styles";

interface IIconProps {
  sx?: React.CSSProperties;
  sxHover?: React.CSSProperties;
  icon: ISVGIcon;
  percentage?: number;
}

export const Icon = (params: IIconProps) => {
  const { icon, sx, sxHover, percentage = 100 } = params;
  const theme = useTheme();
  const clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;

  return (
    <SvgIcon
      sx={{
        "&:hover": sxHover
          ? { ...sxHover }
          : { color: theme.palette.primary.dark },
        "&": sx ? { ...sx } : { color: theme.palette.primary.light },
        clipPath,
      }}
      component={icon as ISVGIcon}
      inheritViewBox
    />
  );
};
