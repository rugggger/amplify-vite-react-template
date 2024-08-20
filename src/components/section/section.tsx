import { ReactNode } from "react";
import { Box, styled, Typography } from "@mui/material";
import { IIllustration } from "../illustration/illustrations";
import { Illustration } from "../illustration/illustration";

interface Props {
  title: string;
  illustration: IIllustration;
  children?: ReactNode;
}

const SECTION_BLUE = "#4343c8";
const DARK_BLUE = '#0a0a39'
const StyledSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? SECTION_BLUE : DARK_BLUE, //theme.palette.background.paper,

  position: "relative",
  padding: theme.spacing(4),
  borderRadius: "0.5rem",
  boxShadow: theme.shadows[1],
  marginBottom: '5rem'
}));

export const Section = (props: Props) => {
  const { children, title, illustration} = props;
  return (
    <StyledSection>
        <Typography variant="h2">{title}</Typography>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          transform: "translateY(-70%)",
        }}
      >
        <Illustration illustration={illustration} />
      </Box>
      {children}
    </StyledSection>
  );
};
