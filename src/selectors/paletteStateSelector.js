import { createSelector } from 'reselect'
import { normalizeObj } from '../utils/utils'

const getPaletteLists = (state) => state.paletteState.palettes
export const extractPaletteLists = createSelector(
    [ getPaletteLists ],
    ({ data }) => normalizeObj(data)
)



const getPaletteLoaded = (state) => state.paletteState.loader
export const extractPaletteLoaded = createSelector(
    [ getPaletteLoaded ],
    ({ isLoaded }) => isLoaded
)


//Get the Selected Palettes
const getSelectedPalette = (state) => state.paletteState.selectedPalette
export const extractSelectedPalette = createSelector(
    [ getSelectedPalette ],
    (data) => data
)