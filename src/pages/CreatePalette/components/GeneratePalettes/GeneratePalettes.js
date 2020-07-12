import React, { useContext } from 'react';
import { paletteStateContext } from '../../createPaletteState/paletteContext';
import SinglePalette from './singlePalette';
import useStyles from './styles';
import globalStyles from '../../../../styles/globalStyle';
import clsx from 'clsx';

const GeneratePalettes = () => {
    const { palettes, selectedColorInd} = useContext(paletteStateContext)
    const classes = useStyles()
    const { dFlex } = globalStyles()

    return ( 
        <ul className={ clsx(dFlex, classes.creatPaletteList) }>
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