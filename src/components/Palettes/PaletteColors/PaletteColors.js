import React from 'react';
import useStyles from './styles';
import PaletteColor from './PaletteColor';

const PaletteColors = ({ palettes }) => {
    const classes = useStyles()
    return ( 
        <ul className={classes.paletteList}>
            {palettes.map((palette) => {
            return (
                    <PaletteColor palette={palette} key={palette} />
                );
            })}
        </ul>
    );
}
 
export default PaletteColors;