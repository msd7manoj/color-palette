import React, { useState, useEffect, useContext } from 'react';
import randomColor from 'randomcolor';
import { paletteStateContext, paletteDispatchContext } from '../../pages/CreatePalette/createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../pages/CreatePalette/createPaletteState/paletteAction';
import useStyles from './styles';
import globalStyles from '../../styles/globalStyle';


const SelectedColorPreset = ({ color, count = 20 }) => {

    const { pickerCompletedColor, selectedColorInd } = useContext(paletteStateContext)
    const dispatch = useContext(paletteDispatchContext)
    const classes = useStyles()
    const {dFlex} = globalStyles()
    const [similiarColor, setSimiliarColor] = useState([])

    useEffect(()=>{
        setSimiliarColor(randomColor({
            hue: parseInt(pickerCompletedColor.h === 0 ? 1 : pickerCompletedColor.h),
            count: count
        })) 
    },[count, pickerCompletedColor])


    const onSelectPreset = (hex) => (e) => {
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: hex.substr(1)} })
    }

    return ( 
        <div className={classes.similiarColors}>
            <h3>Similiar Color Preset</h3>
            <ul className={dFlex}>
                {
                    similiarColor.map( color => {
                        return (
                            <li onClick={onSelectPreset(color)} style={{ backgroundColor: color }}></li>
                        )
                    } )
                }
            </ul>
        </div>
    );
}
 
export default SelectedColorPreset;