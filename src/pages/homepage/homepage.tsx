import { Container, Typography } from "@mui/material";
import { Auth } from "../../amplify/auth";

export const HomePage = () => {
  const lines: string[] = new Array(100).fill("dsfsdf");

  return (
    <Container>
      <div>
        homepage k
        <Auth></Auth>
        
        {lines.map((l) => {
          return <Typography>{l}</Typography>;
        })}
      </div>
    </Container>
  );
};
