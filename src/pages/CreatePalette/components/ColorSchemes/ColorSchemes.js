import React, { useContext, useState, useEffect } from 'react';
import tinycolor from 'tinycolor2'
import clsx from 'clsx';
import { paletteDispatchContext, paletteStateContext } from '../../createPaletteState/paletteContext';
import WebColorInfo from '../WebColors/WebColorInfo';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';
import useStyles from './styles';
import globalStyles from '../../../../styles/globalStyle';



const getColorScheme = (scheme, color) => {
    console.log(scheme, color)
    return tinycolor(color)[scheme](6).map((t) => { return t.toHexString() })
}

const defaultColorInfo = { hex: '-', rgb: '-' }
const ColorSchemes = ({ selectedColorInd }) => {
    const { palettes } = useContext(paletteStateContext)
    const dispatch = useContext(paletteDispatchContext)
    const [ hoverColorInfo, setHoverColorInfo ] = useState()
    const [ selectedColorInfo, setSelectedColorInfo ] = useState(defaultColorInfo)
    const [ selectedColor, setSelectedColor ] = useState('')
    const [schemes, setSchemes] = useState([])

    const classes = useStyles()

    useEffect(() => {
        setSchemes(Object.values(palettes).map( palette => {
            return {
                'analogous': getColorScheme('analogous', palette),
                'monochromatic': getColorScheme('monochromatic', palette),
                'split complement': getColorScheme('splitcomplement', palette),
                'triad': getColorScheme('triad', palette),
                'tetrad': getColorScheme('tetrad', palette),
                'complement': [tinycolor(palette).complement().toHexString()]
            }
        }))
    },[])

    const selectColorScheme = (hex) => (e) => {
        setSelectedColor(hex)
        setSelectedColorInfo({ hex: hex.substr(1), rgb: tinycolor(hex).toRgbString() })
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: hex.substr(1)} })
    }
    const onColorHoverLeave = (hex, type = 'enter') => (e) => {
        setHoverColorInfo( type === 'enter' ? { hex: hex.substr(1), rgb: tinycolor(hex).toRgbString() } : undefined)
    }

    return ( 
        <>
        <WebColorInfo colorData={ hoverColorInfo ? hoverColorInfo : selectedColorInfo } />
        <div className={ clsx('scrollBar', classes.schemeListsWrp) }>
            <ul className={ clsx(classes.dFlex, classes.schemeLists) }>
                {
                    schemes.map( scheme => {
                        return (
                            <li className={classes.dFlex}>
                                {
                                    Object.keys(scheme).map( key => {
                                        return (
                                            <div className={ clsx(classes.dFlex, classes.schemeColl) }>
                                                <h3>{ key }</h3>
                                                <div className={ clsx(classes.dFlex, classes.schemeColorBox) }>
                                                    { scheme[key].map( palette => {
                                                        return (
                                                            <div
                                                            className={clsx( palette === selectedColor && 'active')}
                                                            onClick={selectColorScheme(palette)} 
                                                            onMouseOver={onColorHoverLeave(palette)}
                                                            onMouseLeave={onColorHoverLeave(palette, 'leave')}
                                                            style={{ backgroundColor: palette }}></div>
                                                        )
                                                    })}
                                                </div>
                                                
                                            </div>
                                        )
                                    })
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    );
}
 
export default ColorSchemes;