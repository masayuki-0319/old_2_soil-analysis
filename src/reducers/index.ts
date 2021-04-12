import { Reducer } from 'react';
import { AnalysisResult } from '../models/checkSoilType';

const INPUT_EVENT = 'INPUT_EVENT' as const

const inputState = (name: string, value: number) => ({
  type: INPUT_EVENT,
  payload: {
    name: name,
    value: value
  }
})

export type Actions = (
  | ReturnType<typeof inputState>
)

const analysisResultReducer: Reducer<AnalysisResult, Actions> = (state, action) => {
  switch (action.type) {
    case INPUT_EVENT:
      const result: AnalysisResult = { ...state, [action.payload.name]: action.payload.value };
      return result
    default:
      return state
  }
}

export default analysisResultReducer
