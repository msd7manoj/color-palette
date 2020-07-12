import { INPUT_HEIGHT } from "./styleConstant";

export const globalTheme = {
    primary: {
        // color: '#ff7f50',
        color: '#a11ad4',
        bgColor: '#fff'
    },
    secondary: {
        color: '#ff7f50',
        bgColor: '#f7f7f7'
    },
    text: {
        color: "#000",
        secondaryColor: '#727272'
    },
    links: {
        color: "#000",
    },
    icons: {
        color: "#909090",
        background: "#efefef",
        width: '35px',
        height: '35px'
    },
    formInput: {
        borderColor: '#969696',
        borderRadius: '3px',
        height: '40px',
        lineHeight: '40px'
    },
    textBolder(intense = 6) {
        return intense * 100
    },
    success: {
        
    },
    error: {

    }
}