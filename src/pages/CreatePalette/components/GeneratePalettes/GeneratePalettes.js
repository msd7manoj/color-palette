import React, { useContext } from 'react';
import { paletteStateContext } from '../../createPaletteState/paletteContext';
import SinglePalette from './singlePalette';

const GeneratePalettes = () => {
    const { palettes, selectedColorInd} = useContext(paletteStateContext)
    return ( 
        <ul className="dFlex creatPaletteList">
            {
                Object.keys(palettes).map( (key, ind ) => {
                    return (
                        <SinglePalette 
                        index={ ind }
                        selectedColorInd={selectedColorInd}
                        color={ palettes[key] } />
                    )
                })
            }
        </ul>
    );
}
 
export default GeneratePalettes;