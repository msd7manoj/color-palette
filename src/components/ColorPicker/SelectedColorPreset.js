import React, { useState, useEffect, useContext } from 'react';
import randomColor from 'randomcolor';
import { paletteStateContext, paletteDispatchContext } from '../../pages/CreatePalette/createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../pages/CreatePalette/createPaletteState/paletteAction';


const SelectedColorPreset = ({ color, count = 20 }) => {

    const { pickerCompletedColor, selectedColorInd } = useContext(paletteStateContext)
    const dispatch = useContext(paletteDispatchContext)

    const [similiarColor, setSimiliarColor] = useState([])

    useEffect(()=>{
        setSimiliarColor(randomColor({
            hue: parseInt(pickerCompletedColor.h === 0 ? 1 : pickerCompletedColor.h),
            count: count
        })) 
        console.log('pickerCompletedColor', pickerCompletedColor.h)
    },[count, pickerCompletedColor])


    const onSelectPreset = (hex) => (e) => {
        console.log('hex', hex)
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: selectedColorInd, color: hex.substr(1)} })
    }

    return ( 
        <div className="similiarColors">
            <h3>Similiar Color Preset</h3>
            <ul className="dFlex">
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