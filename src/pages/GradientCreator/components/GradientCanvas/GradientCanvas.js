import React, { useContext } from 'react';
import { gradientStateContext } from '../../gradientCreatorState/gradientContext';
import useStyles from './styles';
import { getGradientBg } from '../../utils';

const GradientCanvas = () => {
    const { gradientList, gradientAngle, gradientType, gradientCss } = useContext(gradientStateContext)
    
    const { gradientCanvas } = useStyles()


    return ( 
        <div className={gradientCanvas} style={{ backgroundImage: getGradientBg(gradientList, gradientAngle, gradientType) }}>
        </div>
    );
}
 
export default GradientCanvas;