import { PaletteMode } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { COLORS } from "./colors";

export const createTypography = (mode: PaletteMode): TypographyOptions => {
  const defaultColor =
    mode === "light" ? COLORS["BASE_BLACK"] : COLORS["BASE_WHITE"]; // Red color
  return {
    fontFamily: [
      "Noto Sans Display",
      "Frank Ruhl Libre",
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      //fontFamily: "Arial, sans-serif",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: defaultColor.color,
    },
    h2: {
      //  fontFamily: "Arial, sans-serif",
      fontSize: "2rem",
      fontWeight: 700,
      color: defaultColor.color,
    },
    h3: {
      //  fontFamily: "Arial, sans-serif",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: defaultColor.color,
    },
    h4: {
      //  fontFamily: "Arial, sans-serif",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: defaultColor.color,
    },
    h5: {
      // fontFamily: "Arial, sans-serif",
      fontSize: "1.25rem",
      fontWeight: 700,
      color: defaultColor.color,
    },
    h6: {
      //  fontFamily: "Arial, sans-serif",
      fontSize: "1rem",
      fontWeight: 700,
      color: defaultColor.color,
    },
    body1: {
      //  fontFamily: "Georgia, serif",
      fontSize: "1rem",
      fontWeight: 400,
      color: defaultColor.color,
    },
    body2: {
      //  fontFamily: "Georgia, serif",
      fontSize: "0.875rem",
      fontWeight: 400,
      color: defaultColor.color,
    },
    subtitle1: {
      //  fontFamily: "Arial, sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
      color: defaultColor.color,
    },
    subtitle2: {
      //  fontFamily: "Arial, sans-serif",
      fontSize: "0.875rem",
      fontWeight: 400,
      color: defaultColor.color,
    },
    code: {
      fontFamily: "Source Code Pro",
      backgroundColor: COLORS["CODE"].bg,
      color: COLORS["CODE"].color,
      fontSize: "1.7rem",
      padding: '1rem'
    },
    imperial: {
      fontFamily: "Imperial Script, cursive",
      fontWeight: 400,
      fontSize: "4rem",
    },
    // Add other variants if needed
  };
};

// typography: {
//   allVariants: {
//     color: 'black', // Default base color for all typography variants
//   },
// },
