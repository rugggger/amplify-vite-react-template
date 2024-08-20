import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { Container, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : "rgb(30, 41, 59)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Footer = () => {
  const theme = useTheme();
  return (
    <footer
      style={{
        backgroundColor:
          theme.palette.mode === "dark" ? "#1A2027" : "rgb(30, 41, 59)",
      }}
    >
      <Container>
        <Grid py={8} container spacing={2}>
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            item
            xs={12}
          >
            <Grid item>
              <a
                href="mailto: info@yaronbar.co"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </Grid>
            <Grid pl={2} item>
              <a
                href="https://www.linkedin.com/in/yaron-bar-4a413767/"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </Grid>
            <Grid pl={2} item>
              <a
                href="https://github.com/rugggger"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
