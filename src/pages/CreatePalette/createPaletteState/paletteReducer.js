import { CREATE_PALETTE_ACTION } from "./paletteAction"

export const createPaletteReducer = (state, { type, payload }) => {
    switch (type) {
        case CREATE_PALETTE_ACTION.CREATE_PALETTE:
            return {
                ...state,
                palettes: { ...payload }
            }
        case CREATE_PALETTE_ACTION.EDIT_PALETTE:
            return {
                ...state,
                palettes: { ...state.palettes, [payload.id]: payload.color }
            }; 
        case CREATE_PALETTE_ACTION.SELECTED_PALETTE:
            return {
                ...state,
                selectedColorInd: payload
            }; 
        default:
            return state
    }
}