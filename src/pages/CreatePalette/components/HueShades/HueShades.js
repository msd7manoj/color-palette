import React, { useState, useContext } from 'react';
import { HUE_COLOR_SHADES } from '../../../../colorConverter/hueShades';
import WebColorInfo from '../WebColors/WebColorInfo';
import tinycolor from 'tinycolor2'
import clsx from 'clsx';
import { paletteDispatchContext } from '../../createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';

const defaultColorInfo = { shade: '-', hex: '-', rgb: '-' }

const HueShades = ({ selectedColorInd }) => {
    const [ selectedColorInfo, setSelectedColorInfo ] = useState(defaultColorInfo)
    const [ hoverColorInfo, setHoverColorInfo ] = useState()
    const [ selectedHueColor, setSelectedHueColor ] = useState('')


    const dispatch = useContext(paletteDispatchContext)

    const selectHueShade = (shade, hex) => (e) => {
        setSelectedHueColor(hex)
        setSelectedColorInfo({ shade, hex: hex.substr(1), rgb: tinycolor(hex).toRgbString() })
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: hex.substr(1)} })
    }

    const onColorHoverLeave = (hex, shade, type = 'enter') => (e) => {
        setHoverColorInfo( type === 'enter' ? { shade, hex: hex.substr(1), rgb: tinycolor(hex).toRgbString() } : undefined)
    }


    return ( 
        <>
            <WebColorInfo colorData={ hoverColorInfo ? hoverColorInfo : selectedColorInfo } />
            <div className="scrollBar hueShadeWrp">
                <ul className="hueShadeList">
                    {
                        HUE_COLOR_SHADES.map( shades => {
                            return (
                                <li className="dFlex">
                                    <div className="hueShadeName">
                                        { shades['name'] }
                                    </div>
                                    <div className="hueShadeColl dFlex">
                                        { shades['shades'].map( shade => {
                                            return (
                                                <div 
                                                onMouseOver={onColorHoverLeave(shade.hex, shades['name'])}
                                                onMouseLeave={onColorHoverLeave(shade.hex, shades['name'], 'leave')}
                                                onClick={selectHueShade(shades['name'], shade.hex)} style={{backgroundColor: shade.hex }}
                                                className={clsx( shade.hex === selectedHueColor && 'active')}></div>
                                            )
                                        }) }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}
 
export default HueShades;