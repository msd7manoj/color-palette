import React, { useState, useEffect, useRef } from 'react';
import useRenderCount from '../../utils/useRenderCount';

const DegreeRotator = ( {defaultDeg = 0, getGradientDeg} ) => {
    const render = useRenderCount('degreeRotator')
    const [fullDegree, setFullDegree] = useState(0)
    const [defaultDegree, setDefaultDegree] = useState(defaultDeg)


    const outerCircleRef = useRef()
    const innerCircleRef = useRef()
    const angleRotatorRef = useRef()
    const angleDraggerRef = useRef()

    const transform = () => {
        var prefs = ['t', 'WebkitT', 'MozT', 'msT', 'OT'],
            style = document.documentElement.style,
            p
        for(var i = 0, len = prefs.length; i < len; i++){
            if( (p = prefs[i] + 'ransform') in  style ) return p
        }
    }
    const center = () =>  {
        const rect = outerCircleRef.current.getBoundingClientRect()
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        }
    }
    const rotate = (x, y) => {
        var deltaX = x - center().x,
        deltaY = y - center().y,
        fullAngle = Math.atan2(deltaY, deltaX) * 180 / Math.PI,
        angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
        if( fullAngle < 0 ) fullAngle = fullAngle + 360
        setFullDegree(parseInt(fullAngle))
        getGradientDeg(parseInt(fullAngle))
        return parseInt(angle)
    }

    const onMouseMove = (e) => {
        angleRotatorRef.current.style[transform()] = 'rotate(' + rotate(e.pageX, e.pageY) + 'deg)'
    }

    const onMouseUp = (e) => {
        document.body.style.cursor = null;
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mousemove', onMouseMove)
    }

    const onMouseDown = (e) => {
        e.preventDefault()
        onMouseMove(e)
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    const onCirlceMouseDown = (e) => {
        if(e.target === outerCircleRef.current) onMouseDown(e)
    }

    return ( 
        <div ref={outerCircleRef} onMouseDown={(e) => { onCirlceMouseDown(e) }} className="outerCircle">
            <div ref={innerCircleRef} className="innerCircle">
                <span>
                    { `${fullDegree}` }
                    <sup>&#176;</sup>
                </span>
            </div>
            <div ref={angleRotatorRef} style={{ transform: `rotate(${defaultDegree}deg)` }} className="angleRotator">
                <div ref={angleDraggerRef} onMouseDown={onMouseDown} className="angleDragger">
                    
                </div>
            </div>
        </div>
        
    );
}
 
export default React.memo(DegreeRotator);