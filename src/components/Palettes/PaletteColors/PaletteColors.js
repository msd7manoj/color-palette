import React from 'react';
import useStyles from './styles';

const PaletteColors = ({ palettes }) => {

    const classes = useStyles()
    return ( 
        <ul className={classes.paletteList}>
            {palettes.map((palette) => {
            return (
                    <li key={palette} style={{ background: `#${palette}` }}>
                        <span className={classes.colorToolTip}>{palette}</span>
                    </li>
                );
            })}
        </ul>
    );
}
 
export default PaletteColors;