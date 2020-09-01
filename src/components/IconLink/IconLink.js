import React from 'react';
import useStyles from './styles';

const IconLink = ({ tooltip, children,buttonStyle, iconStyle, ...props }) => {
    const classes = useStyles({ iconStyle, buttonStyle })
    return ( 
        <button title={tooltip} {...props} className={classes.iconLink}>
            {children}
        </button>
    );
}
export default IconLink;