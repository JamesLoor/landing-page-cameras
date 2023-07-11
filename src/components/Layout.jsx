import { Box } from "@mui/material";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Box component="main" maxWidth="1280px" margin="0 auto">
        {children}
      </Box>
    </>
  );
}
