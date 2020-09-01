import { CREATE_GRADIENT_ACTION } from "./gradientAction";

export const createGradientReducer = (state, { type, payload }) => {
    switch (type) {
        case CREATE_GRADIENT_ACTION.INITIATE_GRADIENT:
        case CREATE_GRADIENT_ACTION.ADD_GRADIENT:
        case CREATE_GRADIENT_ACTION.UPDATE_GRADIENT:
            return {
                ...state,
                gradientList: payload
            }

        case CREATE_GRADIENT_ACTION.SLIDER_WIDTH:
            return {
                ...state,
                sliderWidth: payload
            }
        case CREATE_GRADIENT_ACTION.GRADIENT_CSS:
            return {
                ...state,
                gradientCss: payload
            }
        case CREATE_GRADIENT_ACTION.GRADIENT_ANGLE:
            return {
                ...state,
                gradientAngle: payload
            }
        case CREATE_GRADIENT_ACTION.GRADIENT_TYPE:
            return {
                ...state,
                gradientType: payload
            }
        case CREATE_GRADIENT_ACTION.COLOR_CODE:
            return {
                ...state,
                colorCode: payload
            }

        case CREATE_GRADIENT_ACTION.SELECTED_COLOR:
            return {
                ...state,
                selectedColor: payload
            }
        case CREATE_GRADIENT_ACTION.ACTIVE_COLOR:
            return {
                ...state,
                activeColor: payload
            }
        case CREATE_GRADIENT_ACTION.ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: payload
            }
        case CREATE_GRADIENT_ACTION.ACTIVE_COLOR_POSITION:
            return {
                ...state,
                activeColorPosition: payload
            }
        default:
            break;
    }
    return state
}