import React, { useEffect, useRef, useState } from 'react';
import iro from '@jaames/iro';
import SelectBox from '../SelectBox/SelectBox';
import ColorInput from './ColorInput';
import useRenderCount from '../../utils/useRenderCount';





const IroColorPicker = ({ onColorChange, color }) => {
    const render = useRenderCount('colorPicker')
    const [initiate, setInitiate] = useState(false)
    const colorPickerRef = useRef()
    useEffect(()=> {
        setInitiate(true)
        return () => {
          setInitiate(false)
        }
    },[color])

    useEffect(() => {
      if( initiate ) {
        const colorPicker = new iro.ColorPicker(colorPickerRef.current, {
          width: 280,
          color: color,
          layoutDirection: 'horizontal',
          layout: [
            {
              component: iro.ui.Box,
              options: {
                borderColor: '#ffffff',
              }
            },
            {
              component: iro.ui.Slider,
              options: {
                borderColor: '#ffffff',
                sliderType: 'hue',
                sliderSize: 20,
              }
            },
            {
              component: iro.ui.Slider,
              options: {
                borderColor: '#ffffff',
                sliderType: 'saturation',
                sliderSize: 20,
              }
            },
            {
              component: iro.ui.Slider,
              options: {
                borderColor: '#ffffff',
                sliderType: 'value',
                sliderSize: 20,
              }
            }
          ]
        });
  
  
        colorPicker.on('color:change', (color) => {
          if (onColorChange) onColorChange(color);
        });
      }
    }, [initiate])


    

    return ( 
      <>
          <div className="mb-1 customColorPicker">
            <div ref={colorPickerRef} id="colorPicker"></div>
          </div>
      </>
    );
}


export default React.memo(IroColorPicker);