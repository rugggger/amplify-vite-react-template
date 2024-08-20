import { Container, Typography } from "@mui/material";

export const HomePage = () => {
  const lines: string[] = new Array(100).fill("dsfsdf");

  return (
    <Container>
      <div>
        homepage k
        
        {lines.map((l) => {
          return <Typography>{l}</Typography>;
        })}
      </div>
    </Container>
  );
};
