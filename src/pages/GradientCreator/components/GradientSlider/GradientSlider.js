import React, { useRef, useState, useEffect, useContext } from 'react';
import tinycolor2 from 'tinycolor2'

import { gradientDispatchContext, gradientStateContext } from '../../gradientCreatorState/gradientContext';
import Draggable from 'react-draggable';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { contextActionCreator } from '../../../../utils/utils';
import { CREATE_GRADIENT_ACTION } from '../../gradientCreatorState/gradientAction';
import { DRAGABLE_HANDLE_WIDTH, DRAGABLE_HANDLE_HALFWIDTH } from '../../constants';
import { getColorAndWeight, getGradientBg } from '../../utils';
import useRenderCount from '../../../../utils/useRenderCount';
import useStyles from './styles';


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




const GradientSlider = () => {

    const refContainer = useRef()
    const [width, setWidth] = useState(0)
    const [clientY, setClientY] = useState(0)
    const { gradientList, gradientAngle, gradientType } = useContext(gradientStateContext)
    const dispatch = useContext(gradientDispatchContext)
    const { gradients } = useParams()
    const render = useRenderCount('GradientSlider')
    const classes = useStyles()

    let removeDragger;
    useEffect(() => {
        setWidth( refContainer.current.getBoundingClientRect().width )
        
        /* Initiating Slider Width */
        dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.SLIDER_WIDTH, refContainer.current.getBoundingClientRect().width ))
        
        return () => clearTimeout(removeDragger)
    }, [])


    useEffect(() => {
        let sliderWidth = refContainer.current.getBoundingClientRect().width
        if(gradients) {
            const draggerHandleData = gradients.split('-').map( (color, index) => {
                return {
                    defaultPositionX: index === 0 ? 0 : sliderWidth - DRAGABLE_HANDLE_WIDTH,
                    isActive: index === 0,
                    position: index === 0 ? 0 : 100,
                    color: `#${color}`
                }
            } )
            /* Initiating Gradient List data */
            dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.INITIATE_GRADIENT, draggerHandleData ))
            /* Initiating Active Color */
            dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.ACTIVE_COLOR, `#${gradients.split('-')[0]}` ))
            /* Initiating Selected Color */
            dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.SELECTED_COLOR, `#${gradients.split('-')[0]}` ))
            /* Initiating Gradient CSS */
            dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(draggerHandleData, gradientAngle, gradientType)))

        }
    }, [])

    const getDefaultPos = (position, length) => {
        // let sliderSecWidth = refContainer.current.getBoundingClientRect().width
        let sliderWidth = gradientList.length === length ? ( width - DRAGABLE_HANDLE_WIDTH ) : width
        return ( position / 100 ) * ( sliderWidth )
    }

    const addColorHandler = (e) => {
        //let position = parseInt( ( (( e.pageX - e.target.offsetLeft) - DRAGABLE_HANDLE_HALFWIDTH) / width) * 100)
        let position = ( (( e.pageX - e.target.offsetLeft) - DRAGABLE_HANDLE_HALFWIDTH) / width) * 100
        let clonedDraggerList = gradientList.map( (el, ind) => {
            return {
                ...el,
                isActive: false
            }
        })
        const gradArr = generateGradArr( gradientList )
        dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.ADD_GRADIENT, [...clonedDraggerList, {
            defaultPositionX: ( e.pageX - e.target.offsetLeft ) - DRAGABLE_HANDLE_HALFWIDTH,
            position,
            color: `rgb(${getColorAndWeight( gradArr, parseInt(position), width ).join()})`,
            isActive: true
        }] ) )

        dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.ACTIVE_COLOR_POSITION, position ) )
        
        // console.log( 'positionss', position )
        // console.log( 'position', ( ( ( e.pageX - e.target.offsetLeft) - DRAGABLE_HANDLE_HALFWIDTH ) / width ) * 100 )
        // console.log( 'e.pageX',  e.pageX )
        // console.log( 'e.target.offsetLeft', e.target.offsetLeft )
        // console.log( 'positionX', ( position / 100 ) * ( width ) )
        // console.log( 'defaultPositionX', ( e.pageX - e.target.offsetLeft ) - DRAGABLE_HANDLE_HALFWIDTH )
    }

    const onDragClick = (e) => {
        e.stopPropagation()
    }


    const handleStart = (index) => (e) => {
        setClientY(e.clientY)
        const updatedGradientList = gradientList.map( (el, ind) => {
            return {
                ...el,
                isActive: ind === index
            }
        })
        dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.UPDATE_GRADIENT, updatedGradientList ) )

        const selectedColor = updatedGradientList.filter( el => el.isActive )[0]['color']
        dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.SELECTED_COLOR, selectedColor) )

        dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(updatedGradientList, gradientAngle, gradientType)) )
    }


    const handleDrag = (ind) => (e, ui) => {
        e.stopPropagation()
        // const position = ( ( ui.x + ( ui.x === 0 ? 0 : ( ui.x === 100 ? DRAGABLE_HANDLE_WIDTH : 0 ) ) ) / width) * 100
        console.log(ui.x)
        const sliderEndPoint = Math.ceil(width) - DRAGABLE_HANDLE_WIDTH;
        console.log('sliderEndPoint', sliderEndPoint)
        const position = ( ( ui.x + ( ui.x === 0 ? 0 : ( ui.x ===  sliderEndPoint ? DRAGABLE_HANDLE_WIDTH : 0 ) ) ) / width) * 100
        const updatedGradientList = gradientList.map( ( el, index) => {
            return index === ind ? {
                ...el,
                defaultPositionX: ui.x,
                //position: parseInt( ( ( ui.x + ( ui.x === 0 ? 0 : DRAGABLE_HANDLE_WIDTH ) ) / width) * 100),
                position,
                isActive: true
            } : { ...el  }
        } )

        

        dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.UPDATE_GRADIENT, updatedGradientList ) )

        // dispatch( contextActionCreator( CREATE_GRADIENT_ACTION.ACTIVE_COLOR_POSITION, position ) )

        // const selectedColor = updatedGradientList.filter( el => el.isActive )[0]['color']
        // dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.SELECTED_COLOR, selectedColor) )

        // dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(updatedGradientList, gradientAngle, gradientType)))
    }


    const handleStop = (ind) => (e) => {
        e.stopPropagation()
        if( gradientList.length > 2 && (clientY + 40) < parseInt(e.clientY) ) {
            removeDragger = setTimeout(() => {
                const filteredList = gradientList.filter( (el, index) =>  index !== ind )
                dispatch( contextActionCreator(CREATE_GRADIENT_ACTION.UPDATE_GRADIENT, filteredList ) )
                // dispatch(contextActionCreator( CREATE_GRADIENT_ACTION.GRADIENT_CSS, getGradientBg(filteredList, gradientAngle, gradientType)))
            },0)
        }
    }

    

    return ( 
        <div ref={refContainer}
        style={{ backgroundImage: getGradientBg( gradientList, 45 ) }}
        onClick={ addColorHandler }
        className={classes.gradientCreatorSlider}>
            { gradientList.map( (el, index) => {
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
                            className={ clsx( classes.gradientCreatorHandle, el.isActive ? classes.activeHandle : '' ) }>
                                
                            </div>
                    </Draggable>
                )
            }) }
        </div>
        
    );
}
 
export default React.memo(GradientSlider);