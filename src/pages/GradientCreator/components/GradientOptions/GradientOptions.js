import React, {useState, useCallback, useContext } from 'react';
import IroColorPicker from '../../../../components/IroColorPicker';
import DegreeRotator from '../../../../components/DegreeRotator/DegreeRotator';
import SelectBox from '../../../../components/SelectBox';
import ColorInput from '../../../../components/IroColorPicker/ColorInput';
import { GRADIENT_TYPE, COLOR_CODE } from '../../constants';
import { gradientDispatchContext, gradientStateContext } from '../../gradientCreatorState/gradientContext';
import { contextActionCreator } from '../../../../utils/utils';
import { CREATE_GRADIENT_ACTION } from '../../gradientCreatorState/gradientAction';
import { getGradientBg } from '../../utils';
import { useEffect } from 'react';
import useRenderCount from '../../../../utils/useRenderCount';





const GradientOptions = () => {

    const { gradientList, gradientAngle, gradientType, sliderWidth, selectedColor, activeColor, activeColorPosition } = useContext(gradientStateContext)
    const [pickerColor, setPickerColor] = useState(activeColor)
    const [draggerPosition, setDraggerPosition] = useState(parseInt(activeColorPosition))
    
    const dispatch = useContext(gradientDispatchContext)
    const render = useRenderCount('GradientOptions')


    useEffect(() => {
        onPickerColorChange()
    }, [pickerColor])

    useEffect(() => {
        setDraggerPosition(parseInt(activeColorPosition))
    }, [activeColorPosition])


    const getGradientDeg = (e) => {
        dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.GRADIENT_ANGLE, e))
        dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(gradientList, e, gradientType)))
    }

    
    const onColorChange = useCallback((color) => {
        setPickerColor(color.hexString)
    }, []);
    
    const onPickerColorChange = () => {
        const cloneDraggedList = gradientList.slice()
        const activeIndex = cloneDraggedList.findIndex(({isActive}) => isActive)
        if(cloneDraggedList.length !== 0) {
            cloneDraggedList[activeIndex].color = pickerColor
            dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.ACTIVE_COLOR, pickerColor))
            dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.INITIATE_GRADIENT, cloneDraggedList ))
            dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(cloneDraggedList, gradientAngle, gradientType)))
        }
    }
   

    const onChangeType = (e) => {
        dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.GRADIENT_TYPE, e.value))
        dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(gradientList, gradientAngle, e.value)))
    }

    const onChangeColorCode = (e) => {
        dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.COLOR_CODE, e.value))
    }

    const onDraggerPosition = (e) => {
        if(!isNaN( e.target.value ) ) setDraggerPosition( e.target.value )
    }

    const onSubmitPosition = (e) => {
        console.log(draggerPosition)
        if(!isNaN( draggerPosition ) &&  draggerPosition !== '') {
            dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.ACTIVE_COLOR_POSITION, draggerPosition ) )
            const defaultPositionX = ( draggerPosition / 100 ) * ( sliderWidth )
            const cloneDraggedList = gradientList.slice()
            const activeIndex = cloneDraggedList.findIndex(({isActive}) => isActive)
            cloneDraggedList[activeIndex].defaultPositionX = defaultPositionX
            cloneDraggedList[activeIndex].position = draggerPosition
            dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.INITIATE_GRADIENT, cloneDraggedList ))
        }

        e.preventDefault()
    }

    return ( 
        <div className="gradientOptions dFlex">
            <div className="gradientColorPicker">
                <h3 className="mb-1">Pick a Color</h3>
                { selectedColor !== '' && ( <IroColorPicker
                color={selectedColor}
                onColorChange={ onColorChange } 
                /> ) }
            </div>
            <div className="gradientDegRotator">
                <h3 className="mb-1">Rotate Gradient</h3>
                <DegreeRotator
                getGradientDeg={getGradientDeg} />
            </div>

            <div className="dFlex mb-2 gradientInputSec">
                <div className="gradientInputOption gradientColorOption">
                    <h3 className="mb-1">Color Value</h3>
                    <div className="dFlex">
                        <SelectBox
                        width={80}
                        options={COLOR_CODE}
                        onChange={onChangeColorCode} />
                        <ColorInput type="hex" hexValue={activeColor} />
                    </div>
                </div>
                <div className="gradientInputOption gradientTypeOption">
                    <h3 className="mb-1">Type</h3>
                    <div className="dFlex">
                        <SelectBox
                        width={170}
                        options={GRADIENT_TYPE}
                        onChange={onChangeType} />
                    </div>
                </div>
                <div className="gradientInputOption gradientPosOption">
                    <h3 className="mb-1">Position</h3>
                    <form onSubmit={onSubmitPosition} className="inputWrap inputOptionForm posInputOption">
                        <input maxLength="3" onChange={onDraggerPosition} value={ draggerPosition } type="text" />
                        <button>
                            <i class="fas fa-check"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default React.memo(GradientOptions);