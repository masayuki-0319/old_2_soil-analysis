import { createMuiTheme } from "@material-ui/core/styles";
import { blue, indigo } from "@material-ui/core/colors";

export const theme = createMuiTheme({
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
