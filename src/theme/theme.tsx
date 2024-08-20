import { createTheme, PaletteMode } from "@mui/material";
import { orange } from "@mui/material/colors";
import { createTypography } from "./typography";



declare module '@mui/material/styles' {
  interface TypographyVariants {
    code: React.CSSProperties;
    imperial: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code?: React.CSSProperties;
    imperial?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true;
    imperial: true;
  }
}
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}


const createCustomTheme = (mode: PaletteMode) => {
  const theme = createTheme({
    components: {
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            height: '3px', // Default height for the Divider
            backgroundColor: theme.palette.primary.dark, // Use primary color from the palette
            border: 'none'
          }),
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: 'rgb(43 42 101 / 83%)',
            border: 'none'
          }),
        },
      },
    },
    status: {
      danger: orange[500],
    },
    typography: createTypography(mode),
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            // primary: amber,
            // divider: amber[200],
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
            // common: {
            //   black: 'red'
            // },
            // color:'red',
            // primary: {
            //   main: 'red',
            // },
            background: {
              default:'rgb(234 241 255)',
              paper: 'rgb(234 241 255)',
            },
            // text: {
            //   primary: "red",
            // },
          }
        : {
            // palette values for dark mode
            // primary: deepOrange,
            // divider: deepOrange[700],
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
            common: {
              black: 'white'
            },
            text: {
              primary: "#fff",
              // secondary: grey[500],
            },
          }),
      primary: { main: "#3f51b5" },
    },
  });

//@ts-ignore
  theme.typography.allVariants = {
    color: 'red' //theme.palette.common.black,
  };
  console.log('theme',theme)

  
  return theme

}

export default createCustomTheme
