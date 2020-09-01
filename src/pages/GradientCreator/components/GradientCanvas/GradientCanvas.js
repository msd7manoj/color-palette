import React, { useContext } from 'react';
import { gradientStateContext } from '../../gradientCreatorState/gradientContext';

const GradientCanvas = () => {
    const { gradientCss } = useContext(gradientStateContext)
    
    return ( 
        <div className="gradientCanvas" style={{ backgroundImage: gradientCss }}>

        </div>
    );
}
 
export default GradientCanvas;