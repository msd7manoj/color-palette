import React from 'react';
import useStyles from './styles';

const IconLink = ({ tooltip, children, ...props }) => {
    const classes = useStyles()
    return ( 
        <button title={tooltip} {...props} className={classes.iconLink}>
            {children}
        </button>
    );
}
export default IconLink;