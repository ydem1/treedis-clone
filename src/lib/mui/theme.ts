import { SCREEN_BREAKPOINTS } from "@/constants/screenBreakpoints";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const initilaTheme = createTheme({
  breakpoints: {
    values: {
      xs: SCREEN_BREAKPOINTS.XS,
      sm: SCREEN_BREAKPOINTS.SM,
      md: SCREEN_BREAKPOINTS.MD,
      lg: SCREEN_BREAKPOINTS.LG,
      xl: SCREEN_BREAKPOINTS.XL,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    common: {
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: ['"Codecpro"', "sans-serif"].join(","),
    body1: {
      marginBlock: "40px",
      fontSize: "3.875rem",
      lineHeight: 1.35,
      fontWeight: 500,
    },
    h4: {
      fontSize: "2.125rem",
      lineHeight: 1.235,
      fontWeight: 600,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          paddingInline: "40px",
          maxWidth: "1062px",
        },
      },
    },
  },
});

const theme = responsiveFontSizes(initilaTheme);

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down("md")]: {
    fontSize: "3.125rem",
    lineHeight: "1.4",
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    lineHeight: 1.334,
  },
};

export default theme;
