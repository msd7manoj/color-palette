import React, { useState, useContext } from 'react';
import { WEB_COLOR_NAMES } from '../../../../colorConverter/constants';
import clsx from 'clsx';
import { paletteDispatchContext } from '../../createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';
import WebColorInfo from './WebColorInfo';

const defaultColorInfo = { name: '-', hex: '-', rgb: '-' }

const WebColors = ({ selectedColorInd }) => {
    const [ selectedColorInfo, setSelectedColorInfo ] = useState(defaultColorInfo)
    const [ hoverColorInfo, setHoverColorInfo ] = useState()
    const [ selectedWebColor, setselectedWebColor ] = useState('')

    const dispatch = useContext(paletteDispatchContext)

    const selectWebColor = (color) => (e) => {
        setselectedWebColor(color.name)
        const { name, hex, rgb } = color
        setSelectedColorInfo({ name, hex, rgb })
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: color.hex.substr(1)} })
    }

    const onColorHoverLeave = ( menu, type = 'enter' ) => (e) => {
        const { name, hex, rgb } = menu
        setHoverColorInfo( type === 'enter' ? { name, hex, rgb } : undefined)
    }
    
    
    return ( 
        <div>
            
            <WebColorInfo colorData={ hoverColorInfo ? hoverColorInfo : selectedColorInfo } />
            <ul className="dFlex webColorsList">
                {
                    WEB_COLOR_NAMES.map(( color ) => {
                        return (
                            <li key={color.name} 
                                onMouseOver={onColorHoverLeave(color)}
                                onMouseLeave={onColorHoverLeave(color, 'leave')}
                                onClick={selectWebColor(color)}>
                                <div className={ clsx( selectedWebColor === color.name  && 'active') } style={{backgroundColor: `${ color.hex }`}}>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default WebColors;