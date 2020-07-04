import React from 'react';
import useStyles from './styles';
import globalStyles from '../../styles/globalStyle';
import clsx from 'clsx';

const Toaster = ({ msg, closeToast, type  }) => {

    const classes = useStyles({ type })
    const { dFlex } = globalStyles()

    return ( 
        <div className={ clsx(classes.toasterWrp,dFlex) }>
            {msg}
            <button className={classes.toasterButton} onClick={closeToast}>
                Close
            </button>
        </div>
    );
}
 
export default Toaster;