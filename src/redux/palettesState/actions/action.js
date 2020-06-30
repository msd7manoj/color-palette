import { actionCreators } from "../../utils";
import { PALETTES_ACTIONS } from "./constant";


export const palettesFetchStart = actionCreators(PALETTES_ACTIONS.FETCH_DATA_START)
export const palettesFetchSuccess = actionCreators(PALETTES_ACTIONS.FETCH_DATA_SUCCESS)
export const palettesFetchError = actionCreators(PALETTES_ACTIONS.FETCH_DATA_ERROR)

export const palettesSelect = actionCreators(PALETTES_ACTIONS.SELECTED_PALETTE)