import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { SCREEN_BREAKPOINTS } from '@/constants/screenBreakpoints';

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
    mode: 'light',
    primary: {
      main: '#2055ff',
    },
    grey: {
      300: "#66708533",
    },
    common: {
      white: '#ffffff',
    },
  },
  typography: {
    h1: {
      marginBlock: '40px',
      fontSize: '3.875rem',
      lineHeight: 1.35,
    },
    h4: {
      fontFamily: ['"Codecpro"', 'sans-serif'].join(','),
      fontSize: '2.125rem',
      lineHeight: 1.235,
      fontWeight: 700,
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
          paddingInline: '40px',
          maxWidth: '1060px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[300],
            borderWidth: '1px',
           },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
        input: {
          padding: '12.5px 14px',
        },
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontFamily: ['"Codecpro"', 'sans-serif'].join(','),
          padding: "8px 22px", 
          borderRadius: "8px", 
          fontSize: "15px",
          fontWeight: 600,
          height: "56px",
          textTransform: "capitalize",
        }
      }
    },
  },
});

const theme = responsiveFontSizes(initilaTheme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('lg')]: {
    fontSize: '3.125rem',
    lineHeight: '1.4',
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    lineHeight: 1.334,
  },
};

export default theme;
