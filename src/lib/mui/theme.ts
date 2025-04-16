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
    fontFamily: ['"Inter"', "sans-serif"].join(","),
    body1: {
      marginBlock: "40px",
      fontSize: "62px",
      fontWeight: 400,
      lineHeight: 1.35,
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
    fontSize: "24px",
  },
};

export default theme;
