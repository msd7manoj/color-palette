import React from 'react';
import { SketchPicker } from 'react-color';
import useRenderCount from '../../utils/useRenderCount';

const ColorPicker = ({ width = 300, onChangeColor}) => {
    useRenderCount('picker')
    return (
        <>
            <SketchPicker
                presetColors={[]}
                disableAlpha={ true }
                width={width}
                onChange={ onChangeColor }
            />
        </>
    );
}
 
export default React.memo(ColorPicker);