import React from 'react';
import clsx from 'clsx';
import Draggable from 'react-draggable';


const Slider = () => {

    const handleStart = (e) => {
        e.stopPropagation()
    }

    const handleDrag = (e, ui) => {
        e.stopPropagation()
    }

    const handleStop = (e, ui) => {
        e.stopPropagation()
        
    }


    return ( 
            <div className="sliderTrack">
                <Draggable
                    bounds="parent"
                    onStart={handleStart}
                    onDrag={handleDrag}
                    onStop={handleStop}
                    axis="x">
                        <div className="sliderHandle"></div>
                </Draggable>
            </div>
    );
}
 
export default Slider;