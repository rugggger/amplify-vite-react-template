import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface Props {
  words: string[];
}

export const Chips = (props: Props) => {
  const { words } = props;
  return (
    <Stack
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
      }}
      direction="row"
      spacing={1}
    >
      {(words ?? []).map((w) => (
        <Chip label={w} />
      ))}
    </Stack>
  );
};
