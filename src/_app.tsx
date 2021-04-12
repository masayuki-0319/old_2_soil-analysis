import React, { useReducer } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./_theme";
import Top from "./views/Top";
import { AppContext, initialStore } from "./contexts/AppContext";
import analysisResultReducer from "./reducers";

const App: React.FC = () => {
  const [analysisResultState, dispatch] = useReducer(analysisResultReducer, initialStore);

  return (
    <AppContext.Provider value={{ analysisResultState, dispatch }}>
      <ThemeProvider theme={theme}>
        <Top />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
