import { Box } from "@mui/material";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
}
