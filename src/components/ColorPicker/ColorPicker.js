import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { SketchPicker } from 'react-color';
import useRenderCount from '../../utils/useRenderCount';
import SelectedColorPreset from './SelectedColorPreset';

const ColorPicker = ({ width = 300, color = 'blue', selectedColorInd, onChangeColorComplete, onChangeColor}) => {
    useRenderCount('picker')
    return (
        <Row>
            <Col md={7}>
                <SketchPicker
                    color={color}
                    presetColors={[]}
                    disableAlpha={ true }
                    width={width}
                    onChangeComplete={ onChangeColorComplete }
                    onChange={ onChangeColor }
                />
            </Col>
            <Col md={5}>
                <SelectedColorPreset />
            </Col>
            
        </Row>
    );
}
 
export default React.memo(ColorPicker);