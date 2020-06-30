import { PALETTES_ACTIONS } from "./actions/constant"

const initialState = {
    loader: { isLoaded: false },
    palettes: { data: {}, error: {} },
    selectedPalette: {}
}

const paletteStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case PALETTES_ACTIONS.FETCH_DATA_START:
            return {
                ...state,
                loader: { isLoaded: true },
            }
        case PALETTES_ACTIONS.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loader: { isLoaded: false },
                palettes: { data: action.payload, error: {} }
            }
        case PALETTES_ACTIONS.FETCH_DATA_ERROR:
            return {
                ...state,
                loader: { isLoaded: false },
                palettes: { data: {}, error: action.payload }
            }

        case PALETTES_ACTIONS.SELECTED_PALETTE:
            return {
                ...state,
                selectedPalette: state.palettes.data[action.payload]
            }
        default:
            return state
    }
}

export default paletteStateReducer