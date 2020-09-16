import React, { useEffect, useRef, useState } from 'react';
import iro from '@jaames/iro';
import SelectBox from '../SelectBox/SelectBox';
import ColorInput from './ColorInput';
import useRenderCount from '../../utils/useRenderCount';





const IroColorPicker = ({ onColorChange, color }) => {
    const render = useRenderCount('colorPicker')
    const [initiate, setInitiate] = useState(false)
    const colorPickerRef = useRef()
    const colorPickerElRef = useRef()
    useEffect(()=> {
        setInitiate(true)
        return () => { setInitiate(false) }
    },[color])

    useEffect(() => {
      //console.log('new iro.Color', new iro.Color())
      if(initiate) {
        colorPickerRef.current = new iro.ColorPicker(colorPickerElRef.current, {
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

        colorPickerRef.current.on('color:change', (color) => {
          if (onColorChange) onColorChange(color);
        });

      }
      return () => {
        
      }


    }, [initiate])


    useEffect(()=> {
      console.log('color--color--color', color)
      if( colorPickerRef.current ) {
        // colorPickerRef.current.setOptions({
        //   color: color,
        // })
        // colorPickerRef.current.reset()
        // colorPickerRef.current.on('color:init', (clr) => {
        //   clr.set(color)
        // })
        // colorPickerRef.current.reset()
        // colorPickerRef.current.setOptions({
        //   color: color,
        // })
        // colorPickerRef.current.on('color:init', function(colorPicker) {
        //   console.log('colorPicker:', colorPicker)
        //   console.log('colorPickerRef:', colorPickerRef.current)
        //   console.log('colorPicker === colorPickerRef.current', colorPicker === colorPickerRef.current)
        //   colorPicker.set(color)
        // })

        colorPickerRef.current.setColors([color]);
      }
    },[color])

    return ( 
      <>
          <div className="mb-1 customColorPicker">
            <div ref={colorPickerElRef}></div>
          </div>
      </>
    );
}


export default React.memo(IroColorPicker);