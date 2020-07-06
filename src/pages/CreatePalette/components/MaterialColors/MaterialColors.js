import React, { useState, useContext } from 'react';
import { MATERIAL_COLORS } from '../../../../colorConverter/materialColors';
import WebColorInfo from '../WebColors/WebColorInfo';
import tinycolor from 'tinycolor2'
import clsx from 'clsx';
import { paletteDispatchContext } from '../../createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';


const defaultColorInfo = { theme: '-', hex: '-', rgb: '-' }

const MaterialColors = ({ selectedColorInd }) => {
    const [ selectedColorInfo, setSelectedColorInfo ] = useState(defaultColorInfo)
    const [ hoverColorInfo, setHoverColorInfo ] = useState()
    const [ selectedMatColor, setSelectedMatColor ] = useState('')
    const dispatch = useContext(paletteDispatchContext)


    const selectMatColor = (theme, hex) => (e) => {
        setSelectedMatColor(hex)
        setSelectedColorInfo({ theme, hex: hex.substr(1), rgb: tinycolor(hex).toRgbString() })
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: hex.substr(1)} })
    }
    const onColorHoverLeave = (hex, theme, type = 'enter') => (e) => {
        setHoverColorInfo( type === 'enter' ? { theme, hex: hex.substr(1), rgb: tinycolor(hex).toRgbString() } : undefined)
    }
    return ( 
        <div className="dFlex matColorWrp">
            <WebColorInfo colorData={ hoverColorInfo ? hoverColorInfo : selectedColorInfo } />
            <div className="scrollBar materialColor">
                <ul className="materialColorList">
                    {
                        MATERIAL_COLORS.map( color => {
                            return (
                                <li
                                
                                className="dFlex">
                                    <h3>{color.name}</h3>
                                    <div className="colorBoxWrp">
                                        {
                                            color.codes.map( code => {
                                                return (
                                                    <div
                                                    onMouseOver={onColorHoverLeave(code, color.name)}
                                                    onMouseLeave={onColorHoverLeave(code, color.name, 'leave')}
                                                    onClick={selectMatColor(color.name, code)} 
                                                    className={clsx('colorBox', code === selectedMatColor && 'active')} style={{ backgroundColor: code }}></div>
                                                )
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default MaterialColors;