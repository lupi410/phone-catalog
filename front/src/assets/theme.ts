import { createMuiTheme } from "@material-ui/core/styles";

const fontFamily = ["Nunito Sans", "Comic Sans", "Arial", "sans-serif"].join(
  ","
);

const mediaBreakpoints = {
  mobile: "@media (max-width: 1023px)",
  desktop: "@media (min-width: 1024px)",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#B591FF",
      main: "#6621FB",
      dark: "#3B0E9F",
    },
    secondary: {
      light: "#7AF5FB",
      main: "#00DFEA",
      dark: "#00ACB8",
    },
  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontSize: 48,
      lineHeight: 1.1,
      fontWeight: 800,
      [mediaBreakpoints.desktop]: {
        fontSize: 54,
        lineHeight: "48px",
      },
    },
    h2: {
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 800,
      [mediaBreakpoints.desktop]: {
        fontSize: 44,
        lineHeight: "40px",
      },
    },
    h3: {
      fontSize: 34,
      fontWeight: 800,
      lineHeight: 1.2,
      [mediaBreakpoints.desktop]: {
        fontSize: 36,
        lineHeight: "40px",
      },
    },
    h4: {
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 1.3,
      [mediaBreakpoints.desktop]: {
        fontSize: 30,
        lineHeight: "32px",
      },
    },
    h5: {
      fontSize: 24,
      fontWeight: 800,
      lineHeight: 1.3,
    },
    h6: {
      fontSize: 20,
      fontWeight: 800,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 800,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.3,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.3,
      fontWeight: 600,
    },
    body2: {
      fontSize: 15,
      lineHeight: 1.3,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.3,
      fontWeight: "normal",
    },
    overline: {
      fontSize: 12,
      lineHeight: 1.3,
      fontWeight: "normal",
    },
  },
});

export default theme;
export { mediaBreakpoints };
