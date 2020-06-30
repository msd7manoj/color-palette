import { useRef } from "react"

export default function useRenderCount( componentLbl = 'Component Render Count' ) {
    const render = useRef(0)
    console.log(componentLbl, render.count++)
}
