import { createContext } from "react"

export const gradientStateContext = createContext()

export const GradientStateProvider = gradientStateContext.Provider

export const gradientDispatchContext = createContext()

export const GradientDispatchProvider = gradientDispatchContext.Provider