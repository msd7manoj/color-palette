import React from 'react';
import Button from '../../components/Button';
import useStyles from './styles';


const GradientCreateButton = () => {
    const classes = useStyles()

    return ( 
        <div className={classes.dFlex}>
            <Button text={'Generate CSS'} buttonSize={'md'} />
        </div>
    );
}
 
export default GradientCreateButton;