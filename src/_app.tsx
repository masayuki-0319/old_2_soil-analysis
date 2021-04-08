import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './_theme'
import Top from "./views/Top";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Top />
    </ThemeProvider>
  );
};

export default App;
