import { combineReducers } from "redux";
import uiStateReducer from "./uiState";
import paletteStateReducer from "./palettesState/paletteStateReducer";

const appReducer = combineReducers({
    uiState: uiStateReducer,
    paletteState: paletteStateReducer
});
  
export default appReducer;