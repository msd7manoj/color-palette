import { createContext } from "react"

export const paletteStateContext = createContext()

export const PaletteStateProvider = paletteStateContext.Provider

export const paletteDispatchContext = createContext()

export const PaletteDispatchProvider = paletteDispatchContext.Provider