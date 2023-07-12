import { Box } from "@mui/material";

export default function Section({
  id,
  name,
  children,
  fullHeight = false,
  background = "transparent",
}) {
  return (
    <Box
      id={id}
      name={name}
      component="section"
      sx={{
        display: "grid",
        alignItems: "center",
        minHeight: fullHeight ? "calc(100vh)" : "400px",
        padding: "50px 0",
        bgcolor: background,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          padding: "0 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
