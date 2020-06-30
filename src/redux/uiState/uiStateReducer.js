import { UI_ACTIONS } from "./action/constant"

const initialState = {
    paletteDrawer: {
        open: false
    }
}

const uiStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_ACTIONS.PALETTE_DRAWER_OPEN:
            return {
                paletteDrawer: { open: true }
            }
        case UI_ACTIONS.PALETTE_DRAWER_CLOSE:
            return {
                paletteDrawer: { open: false }
            }
        default:
            return state
    }
}

export default uiStateReducer