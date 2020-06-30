import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const Button = ({ text, buttonSize, ...props }) => {
    const classes = useStyles({buttonSize})
    return ( 
        <button {...props} className={clsx(classes.appButton)}>
            { text }
        </button>
    );
}
 
export default Button;