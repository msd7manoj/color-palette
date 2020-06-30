import { createSelector } from 'reselect'

const getUIState = (state) => state.uiState

export const extractDrawerState = createSelector(
    [ getUIState ],
    ({ paletteDrawer }) => paletteDrawer.open
)