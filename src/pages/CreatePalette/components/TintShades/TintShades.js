import React, { useState, useContext, useEffect } from 'react';
import reshader from 'reshader'
import { paletteStateContext, paletteDispatchContext } from '../../createPaletteState/paletteContext';
import tinycolor from 'tinycolor2'
import { generateTintShades } from '../../../../utils/tintShades';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';
import useRenderCount from '../../../../utils/useRenderCount';
import clsx from 'clsx';
import WebColorInfo from '../WebColors/WebColorInfo';

const defaultColorInfo = { hex: '-', rgb: '-' }
const TintShades = ({ selectedColorInd }) => {
    useRenderCount()
    const { palettes } = useContext(paletteStateContext)
    const dispatch = useContext(paletteDispatchContext)

    const [ selectedColorInfo, setSelectedColorInfo ] = useState(defaultColorInfo)
    const [ selectedTSColor, setselectedTSColor ] = useState(palettes[selectedColorInd])
    const [tintShades, setTintShades] = useState([])
    

    useEffect(() => {
        const selectedColor = palettes[selectedColorInd]
        if( Object.values(palettes).length > 0 ) {
                setTintShades([
                    {
                        colorHex: selectedColor,
                        tintAndShades: generateTintShades(selectedColor)
                    }
                ])
            setselectedTSColor(`#${selectedColor}`)
            setSelectedColorInfo( { hex: selectedColor, rgb: tinycolor(selectedColor).toRgbString() })
        }
    },[selectedColorInd])

    const selectLSColor = (color) => (e) => {
        setselectedTSColor(color)
        // const { name, hex, rgb } = color
        // setSelectedColorInfo({ name, hex, rgb })
        setSelectedColorInfo( { hex: color.substr(1), rgb: tinycolor(color).toRgbString() })
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: color.substr(1)} })
    }

    return ( 
        <div className="tintShaderWrp">
            <WebColorInfo colorData={selectedColorInfo} />


            <ul className="tintShaderList">
                {
                    tintShades.map( ({ colorHex, tintAndShades }) => {
                        return (
                            <li className="dFlex">
                                 {
                                     tintAndShades.map( ts => {
                                         return (
                                             <div
                                             className={clsx("tintShaderBox", ts === `${selectedTSColor}` && 'active')}
                                             onClick={selectLSColor(ts)}
                                             style={{ backgroundColor: ts }}></div>
                                         )
                                     } )
                                 }
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    );
}
 
export default React.memo(TintShades);