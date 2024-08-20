import React, { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import createCustomTheme from "../theme/theme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Box, CssBaseline, PaletteMode } from "@mui/material";
import SettingsContext from "./context/settings-context";
import { MyRouter } from "../router/router";

export const AppContainer: React.FC = () => {
  const [mode, setMode] = useLocalStorage<PaletteMode>("light-mode", "light");
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return (
    <SettingsContext.Provider
      value={{
        mode,
        toggleMode: () => {
          setMode(mode === "dark" ? "light" : "dark");
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
        >
          <MyRouter />
        </Box>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};
