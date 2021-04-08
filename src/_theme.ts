import { createMuiTheme } from "@material-ui/core/styles";
import { blue, indigo } from "@material-ui/core/colors";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: blue[900],
    },
  },
  typography: {
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

export type themeType = typeof theme;
