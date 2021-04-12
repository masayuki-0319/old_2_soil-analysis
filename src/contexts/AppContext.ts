import React, { createContext } from "react";
import { AnalysisResult } from "../models/checkSoilType";
import { Actions } from "../reducers";

interface AnalysisResultStore {
  analysisResultState: AnalysisResult;
  dispatch: React.Dispatch<Actions>;
}

export const initialStore: AnalysisResult = {
  soilType: 1,
  fieldType: 1,
  phResult: 5.3,
  ecResult: 0.62,
  caoResult: 248,
  mgoResult: 13,
  k2oResult: 98,
  p2o5Result: 59,
  no3nResult: 1.0,
};

const defaultStore: AnalysisResultStore = {
  analysisResultState: initialStore,
  dispatch: () => {},
};

export const AppContext = createContext<AnalysisResultStore>(defaultStore);
