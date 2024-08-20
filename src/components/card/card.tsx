import { Box, Card, CardContent, Typography } from "@mui/material";
import note from "./note.jpg";
import { ReactNode } from "react";
interface Props {
  title?: string;
  children: ReactNode;
}

export const CVCard = (props: Props) => {
  const { children, title } = props;
  return (
    <Card
      sx={{
        backgroundImage: `url(${note})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "black",
        backgroundColor: "#fbff7fbf",
        boxShadow: "4px 3px 19px #232121",
        // padding: theme.spacing(2),
        // borderRadius: theme.shape.borderRadius,
        // boxShadow: theme.shadows[1],
      }}
    >
      <CardContent sx={{ backgroundColor: "#fbff7fbf" }}>
        <Box p={3}>
          {title ? (
            <Typography
              variant="h3"
              sx={{ color: "inherit", marginBottom: "1rem" }}
            >
              {title}
            </Typography>
          ) : null}
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};
