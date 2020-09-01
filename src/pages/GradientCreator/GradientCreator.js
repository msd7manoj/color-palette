import React, { useRef, useState, useEffect, useCallback, useContext } from 'react';
import { useParams } from "react-router-dom";
import SectionTitle from '../../components/SectionTitle';
import { Row, Col } from 'react-flexbox-grid';
import Draggable from 'react-draggable';
import { DRAGABLE_HANDLE_WIDTH, DRAGABLE_HANDLE_HALFWIDTH, COLOR_CODE, GRADIENT_TYPE } from './constants';
import clsx from 'clsx';
import { getColorAndWeight } from './utils';
import tinycolor2 from 'tinycolor2'
import IroColorPicker from '../../components/IroColorPicker';
import DegreeRotator from '../../components/DegreeRotator/DegreeRotator';

import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
    useCircularInputContext
  } from "react-circular-input";
import SelectBox from '../../components/SelectBox';
import ColorInput from '../../components/IroColorPicker/ColorInput';
import Button from '../../components/Button';
import GradientCanvas from './components/GradientCanvas';
import { gradientDispatchContext } from './gradientCreatorState/gradientContext';
import { contextActionCreator } from '../../utils/utils';
import { CREATE_GRADIENT_ACTION } from './gradientCreatorState/gradientAction';
import GradientSlider from './components/GradientSlider/GradientSlider';
import GradientOptions from './components/GradientOptions';

const generateGradArr = (colorArr) => {
    return colorArr.map( data => {
        var color = tinycolor2(data.color);
        var colorRgb = color.toRgb();
        return [
            data.position,
            [colorRgb.r, colorRgb.g, colorRgb.b]
        ]
    } )
}


const sortArrObjectByVal = (arr, key ) => {
    return arr.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
}
const getGradientBg = ( bg, rotate = 0, gradientType = 'linear-gradient' ) => {
    let backgroundImage= [];
    let deg = `${rotate}deg`
    let clonedBg = bg.map(el => ({...el}) )
    sortArrObjectByVal(clonedBg, 'position').forEach( color => {
        backgroundImage.push(`${color.color} ${color.position}%`)
    });
    return `${gradientType}( ${deg}, ${backgroundImage.join(", ")})`;
}

const GradientCreator = () => {

    // const { gradientList } = useContext(gradientStateContext)
    const dispatch = useContext(gradientDispatchContext)


    const refContainer = useRef();
    const [width, setWidth] = useState(0)
    const [clientY, setClientY] = useState(0)
    const [draggerList, setDraggerList] = useState([])
    const [gradientBg, setGradientBg] = useState('')
    const [gradientDeg, setGradientDeg] = useState(0)
    const { gradients } = useParams()

  
    let removeDragger;
    useEffect(() => {
        setWidth(refContainer.current.getBoundingClientRect().width)
        return () => clearTimeout(removeDragger)
    }, [])

    useEffect(() => {
        let sliderWidth = refContainer.current.getBoundingClientRect().width
        let sliderDraggerWidth = 30
        if(gradients) {
            const draggerHandleData = gradients.split('-').map( (color, index) => {
                return {
                    defaultPositionX: index === 0 ? 0 : sliderWidth - sliderDraggerWidth,defaultPositionY: 0,
                    isActive: index === 0,
                    position: index === 0 ? 0 : 100,
                    color: `#${color}`
                }
            } )
            setDraggerList(draggerHandleData)
        }
    }, [])

    useEffect(() => {
        setGradientBg(getGradientBg( draggerList, gradientDeg ))
    }, [draggerList])

    const handleStart = (index) => (e) => {
        setClientY(e.clientY)
        setDraggerList( draggerList.map( (el, ind) => {
            return {
                ...el,
                isActive: ind === index
            }
        }))
    }

    const handleDrag = (ind) => (e, ui) => {
        e.stopPropagation()
        setDraggerList( draggerList.map( ( el, index) => {
            return index === ind ? {
                ...el,
                defaultPositionX: ui.x,
                position: parseInt( ( ( ui.x + ( ui.x === 0 ? 0 : DRAGABLE_HANDLE_WIDTH ) ) / width) * 100),
                isActive: true
            } : { ...el  }
        } ) )
    }


    const handleStop = (ind) => (e, ui) => {
        e.stopPropagation()
        if( draggerList.length > 2 && (clientY + 40) < parseInt(e.clientY) ) {
            removeDragger = setTimeout(() => {
                const filteredList = draggerList.filter( (el, index) =>  index !== ind )
                setDraggerList( filteredList )
            },0)
        }
    }

    const addColorHandler = (e) => {
        let position = parseInt( ( (( e.pageX - e.target.offsetLeft) - DRAGABLE_HANDLE_HALFWIDTH) / width) * 100)

        let clonedDraggerList = draggerList.map( (el, ind) => {
            return {
                ...el,
                isActive: false
            }
        })
        const gradArr = generateGradArr(draggerList)
        setDraggerList( [...clonedDraggerList, {
            defaultPositionX: ( e.pageX - e.target.offsetLeft) - DRAGABLE_HANDLE_HALFWIDTH,
            defaultPositionY: 0,
            position,
            color: `rgb(${getColorAndWeight(gradArr, position, width).join()})`,
            isActive: true
        }])
    }
    
    const onDragClick = (e) => {
        e.stopPropagation()
    }



    const onChangeColor = useCallback((e) => {
        const { hex } = e
        const draggerListClone = draggerList.slice()
        if( draggerListClone.length > 0 ) {
            draggerListClone[0].color = hex
            setDraggerList(draggerListClone)
        }
        // setDraggerList( draggerList.map( el => {
        //     return el.isActive ? {
        //         ...el,
        //         color: hex 
        //     } : {...el}
        // }) )
    }, [draggerList]);
   
    const onChangeColorComplete = useCallback((e) => {
        const { hex } = e
    }, []);

    const getGradientDeg = (e) => {
        setGradientDeg(e)
        setGradientBg(getGradientBg(draggerList, e))
    }



    const onChangeColorCode = (e, i) => {
    }
    const onChangeType = (e, i) => {
    }
    return (
        <>
            <SectionTitle title={"Create Gradient"} />
            <Row center="md">
                <Col md={12}>
                    <Row start="md">
                        <Col md={6}>
                            
                            {/* <div className="gradientCanvas" style={{ backgroundImage: gradientBg }}>

                            </div> */}

                            <GradientCanvas />

                            <GradientSlider />

                            

                            <div ref={refContainer}></div>
                            {/* <div ref={refContainer}
                            style={{ backgroundImage: getGradientBg(draggerList, 45) }}
                            onClick={addColorHandler} 
                            className="gradientCreatorSlider">
                                { draggerList.map( (el, index) => {
                                    return (
                                        <Draggable
                                            bounds="parent"
                                            onStart={handleStart(index)}
                                            onDrag={handleDrag(index)}
                                            onStop={handleStop(index)}
                                            position={ { x: el.defaultPositionX, y: 0 } }
                                            axis="x">
                                            <div 
                                            dataInd={index}

                                            style={{backgroundColor: el.color}}
                                            onClick={ onDragClick }
                                            className={ clsx( 'gradientCreatorHandle', el.isActive ? 'activeHandle' : '' ) }></div>
                                        </Draggable>
                                    )
                                }) }
                            </div> */}
                        </Col>
                        <Col md={6}>
                            
                            <GradientOptions />
                            <div className="gradientGenerate dFlex">
                                <Button text={'Generate CSS'} buttonSize={'md'} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
 
export default GradientCreator;