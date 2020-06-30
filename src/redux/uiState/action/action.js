import { UI_ACTIONS } from "./constant";
import { actionCreators } from "../../utils";


/* Drawer Collapse & Expand Actions */
export const openPaletteDrawer = actionCreators(UI_ACTIONS.PALETTE_DRAWER_OPEN)
export const closePaletteDrawer = actionCreators(UI_ACTIONS.PALETTE_DRAWER_CLOSE)
