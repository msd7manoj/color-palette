export const displayFlex = (alignItems = 'center', justifyContent = 'space-between') => {
    return {
        display: 'flex',
        alignItems,
        justifyContent 
    }
}

export const buttonConfig = (fontSize, padding) => {
    return {
        fontSize,
        padding
    }
}

export const absPosCenter = (x = false, y = false ) => {
    const style = {position: 'absolute'}
    if( x ) {
        style['left'] = "50%"
        style['transform'] = "translateX(-50%)"
    }
    if( y ) {
        style['top'] = "50%"
        style['transform'] = "translateY(-50%)"
    }
    return style
}

export const absCenter = () => {
    return {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
    }
}