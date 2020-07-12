import React from 'react';
import useStyles from './styles';
import clsx from 'clsx';
import globalStyles from '../../../../styles/globalStyle';

const WebColorInfo = ({ colorData }) => {
    const classes = useStyles()
    const {dFlex} = globalStyles()


    return ( 
        <ul className={ clsx(dFlex, classes.colorInfoDesc) }>
            { Object.keys(colorData).map( color => {
                return (
                    <li style={ { width: `${100/Object.keys(colorData).length}%` }}>
                        <h3>{color}</h3>
                        <h4>{colorData[color]}</h4>
                    </li>
                )
            })}
        </ul>
    );
}
 
export default WebColorInfo;