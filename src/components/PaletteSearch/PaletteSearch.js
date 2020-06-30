import React from 'react';
import useStyles from './styles';

const PaletteSearch = ({ ...props }) => {

    const classes = useStyles()
    
    return ( 
        <div className={classes.colorSearchInput}>
            <input
            {...props}
            placeholder="Search Colors (Hex Codes or Color Name)"
            type="text"
            />
            <span>
                <i className="fas fa-search"></i>
            </span>
        </div>
    );
}
 
export default PaletteSearch;