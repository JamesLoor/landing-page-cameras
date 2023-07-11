import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#039EB9",
      light: "#039EB9",
    },
  },
  typography: {
    fontFamily: "SF Pro Display, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SF Pro Display';
          src: url('/fonts/SFProDisplay-Regular.ttf') format('ttf'),
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
