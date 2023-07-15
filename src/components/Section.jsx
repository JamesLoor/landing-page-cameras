import { Box } from "@mui/material";

export default function Section({
  id,
  name,
  children,
  fullHeight = false,
  backgroundColor = "transparent",
  ...styleProps
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
        padding: "100px 0",
        bgcolor: backgroundColor,
        ...styleProps,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          width: "100%",
          padding: "0 20px",
          maxWidth: "1260px",
          margin: "0 auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
