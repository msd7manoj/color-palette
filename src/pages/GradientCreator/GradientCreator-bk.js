import React, { useRef, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SectionTitle from '../../components/SectionTitle';
import { Row, Col } from 'react-flexbox-grid';
import Draggable from 'react-draggable';
import { DRAGABLE_HANDLE_DATA, DRAGGABLE_HANDLE_DATA } from './constants';
import clsx from 'clsx';





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
    const refContainer = useRef();
    const [width, setWidth] = useState(0)
    const [clientY, setClientY] = useState(0)
    const [draggerList, setDraggerList] = useState(DRAGABLE_HANDLE_DATA)
    const [gradientBg, setGradientBg] = useState('')
    const { gradients } = useParams()

    let removeDragger;

    useEffect(() => {
        const gradientColor = {}
        if(gradients)
            gradients.split('-').forEach( (color, ind) => {
                gradientColor[ind + 1] = color
            })

        setWidth(refContainer.current.getBoundingClientRect().width)
        return () => clearTimeout(removeDragger)
    }, [])


    useEffect(() => {
        setGradientBg(getGradientBg(draggerList))
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
        // let draggerListClone = draggerList.slice()
        // draggerListClone[ind] = {
        //     defaultPositionX: ui.x,
        //     defaultPositionY: 0,
        //     position: parseInt( ( (ui.x + 30) / width) * 100),
        //     color: '#f90',
        //     isActive: true
        // }
        // setDraggerList( draggerListClone )
        if( draggerList.length > 2 && (clientY + 80) === parseInt(e.clientY) ) {
            console.log('ind', ind)
            removeDragger = setTimeout(() => {
                // console.log('draggerList.filter( (el, index) => index !== ind )', draggerList.filter( (el, index) => {
                //     console.log(index, ind)
                //     return index !== ind
                //  } ))
                //  const filteredList = draggerList.filter( (el, index) => {
                //     console.log(index, ind)
                //     return index !== (ind)
                //  } )
                const filteredList = draggerList.map( (el, index) =>  ({...el}) )
                filteredList.splice( ind, 1 )
                setDraggerList( filteredList )
            },0)
            // setDraggerList( draggerList.filter( (el, index) => index !== ind ) )
        }
    }
    const handleStop = (ind) => (e, ui) => {
        e.stopPropagation()
    }
    const addColorHandler = (e) => {
        let position = parseInt( ( (( e.pageX - e.target.offsetLeft) - 15) / width) * 100)
        let clonedDraggerList = draggerList.map( (el, ind) => {
            return {
                ...el,
                isActive: false
            }
        })
        console.log(parseInt( ( e.pageX - e.target.offsetLeft) - 15 ))

        // sortArrObjectByVal([...clonedDraggerList, {
        //     defaultPositionX: ( e.pageX - e.target.offsetLeft) - 15,
        //     defaultPositionY: 0,
        //     position,
        //     color: '#f90',
        //     isActive: true
        // }], 'position')
       
        setDraggerList( [...clonedDraggerList, {
            defaultPositionX: ( e.pageX - e.target.offsetLeft) - 15,
            defaultPositionY: 0,
            position,
            color: '#f90',
            isActive: true
        }])
    }
    
    const onDragClick = (e) => {
        e.stopPropagation()
    }
    

    return (
        <>
            <SectionTitle title={"Create Gradient"} />
            <Row center="md">
                <Col md={10}>
                    <Row start="md">
                        <Col md={6}>
                            <div className="gradientCanvas" style={{ backgroundImage: gradientBg }}>

                            </div>
                            <div ref={refContainer}
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
                                            defaultPosition={ { x: el.defaultPositionX, y: 0 } }
                                            axis="x">
                                            <div 
                                            dataInd={index}
                                            style={{backgroundColor: el.color}}
                                            onClick={ onDragClick }
                                            className={ clsx( 'gradientCreatorHandle', el.isActive ? 'activeHandle' : '' ) }></div>
                                        </Draggable>
                                    )
                                }) }


                                {/* { Object.keys(draggerList).map( (el, index) => {
                                    return (
                                        <Draggable
                                            bounds="parent"
                                            onStart={handleStart}
                                            onDrag={handleDrag(el)}
                                            onStop={handleStop(el)}
                                            defaultPosition={draggerList[el].defaultPosition}
                                            axis="x">
                                            <div 
                                            // onClick={ (e) => { e.stopPropagation() } }  
                                            dataInd={el}
                                            onDoubleClick={ onDblClick(el) }
                                            onClick={ onDragClick }
                                            className="gradientCreatorHandle fromColor"></div>
                                        </Draggable>
                                    )
                                }) } */}
                            </div>
                        </Col>
                        <Col md={6}>
                            <pre style={{ width: '100%', whiteSpace: 'break-spaces'}}>
                                {
                                    JSON.stringify(draggerList)
                                }
                            </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
 
export default GradientCreator;