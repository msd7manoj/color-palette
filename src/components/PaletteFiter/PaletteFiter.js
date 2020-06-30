import React from 'react';
import clsx from 'clsx';
import useStyles from './styles'
import globalStyles from '../../styles/globalStyle';

const PaletteFilter = () => {
    const classes = useStyles();

    const { dFlexEnd } = globalStyles()
    return ( 
        <div className={clsx(classes.paletteSelect, dFlexEnd)}>
            <select>
                <option>Trending</option>
                <option>Popular</option>
                <option>Latest</option>
            </select>
        </div>
    );
    
}
 
export default PaletteFilter;