import React, { useEffect, useState, useRef } from 'react';

const DegreeRotator = ({defaultDeg = 0, getGradientDeg}) => {

    const [fullDegree, setFullDegree] = useState(0)
    const [defaultDegree, setDefaultDegree] = useState(defaultDeg)
    const [degreeEdit, setDegreeEdit] = useState(false)

    useEffect(() => {
        
        var outerCircle = document.getElementsByClassName('outerCircle')[0],
        angleRotator = document.getElementsByClassName('angleRotator')[0],
        angleDragger = angleRotator.firstElementChild,
        outerCircleBox = outerCircle.getBoundingClientRect(),
        outerCircleCenter = {
            x: outerCircleBox.left + outerCircleBox.width / 2,
            y: outerCircleBox.top + outerCircleBox.height / 2
        },
        transformStyle = (function(){
            var vendorPrefix = ['t', 'WebkitT', 'MozT', 'msT', 'OT'],
                style = document.documentElement.style,
                prefix
            for(var i = 0, len = vendorPrefix.length; i < len; i++){
                if( (prefix = vendorPrefix[i] + 'ransform') in  style ) return prefix
            }
        })(),
        rotateDragger = function(x, y){
            var deltaX = x - outerCircleCenter.x,
                deltaY = y - outerCircleCenter.y,
                fullAngle = Math.atan2(deltaY, deltaX) * 180 / Math.PI,
                angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
                if( fullAngle < 0 ) fullAngle = fullAngle + 360
                setFullDegree(parseInt(fullAngle))
            getGradientDeg(parseInt(fullAngle))   
            return parseInt(angle)
        },
        // DRAGSTART
        onMouseDown = function(event){
            event.preventDefault()
            document.body.style.cursor = 'move'
            onMouseMove(event)
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
        },
        // DRAG
        onMouseMove = function(event){
            console.log(event.pageX, event.pageY)
            
            angleRotator.style[transformStyle] = 'rotate(' + rotateDragger(event.pageX, event.pageY) + 'deg)'
        },
        // DRAGEND
        onMouseUp = function(){
            document.body.style.cursor = null;
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mousemove', onMouseMove)
        }
        // DRAG START
        angleDragger.addEventListener('mousedown', onMouseDown)
        // ENABLE STARTING THE DRAG IN THE BLACK CIRCLE
        outerCircle.addEventListener('mousedown', function(event){
            if(event.target === this) onMouseDown(event)
        })
        return () => {
            angleDragger.removeEventListener('mousedown', onMouseDown)
            outerCircle.removeEventListener('mousedown', function(event){
                if(event.target === this) onMouseDown(event)
            })
        }
    }, []);

    

   
    const onChangeDegree = (e) => {
        if( !isNaN(e.target.value) ) {
            setFullDegree(e.target.value === '' ? 0 : parseInt(e.target.value))
            setDefaultDegree(e.target.value === '' ? 0 : parseInt(e.target.value))
        }
    }

    const enableDegreeEdit = (e) => {
        setDegreeEdit(true)
    }
    const disableDegreeEdit = (e) => {
        setDegreeEdit(false)
    }


    return ( 
        // <div id="circle" className='sdf'>
        //     <div id="circle-in"></div>
        //     <div id="picker">
        //         <div id="picker-circle">
        //         </div>
        //     </div>
        // </div>	
        <>
            <div className="outerCircle">
                <div className="innerCircle">
                    {/* { degreeEdit ? (
                                    <span>
                                        <input onChange={onChangeDegree} maxLength={3} value={fullDegree} type="text" />
                                        <sup>&#176;</sup>
                                    </span>
                                    ) : (
                                        <span onClick={enableDegreeEdit}>
                                            { `${fullDegree}` }
                                            <sup>&#176;</sup>
                                        </span>
                                    ) 
                    } */}
                    <span>
                        { `${fullDegree}` }
                        <sup>&#176;</sup>
                    </span>
                </div>
                <div style={{ transform: `rotate(${defaultDegree}deg)` }} className="angleRotator">
                    <div className="angleDragger"></div>
                </div>
            </div>
        </>

    );
}
 
export default DegreeRotator;