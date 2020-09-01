import React, { useEffect, useRef } from 'react';

const DegreeRotator = () => {
    const outerCircleRef = useRef()
    const innerCircleRef = useRef()
    const angleRotatorRef = useRef()
    const angleDraggerRef = useRef()

    useEffect(() => {
        var circle = document.getElementById('circle'),
        picker = document.getElementById('picker'),
        pickerCircle = picker.firstElementChild,
        rect = circle.getBoundingClientRect(),
        center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        },
        transform = (function(){
            var prefs = ['t', 'WebkitT', 'MozT', 'msT', 'OT'],
                style = document.documentElement.style,
                p
            for(var i = 0, len = prefs.length; i < len; i++){
                if( (p = prefs[i] + 'ransform') in  style ) return p
            }
        })(),
        rotate = function(x, y){
            var deltaX = x - center.x,
                deltaY = y - center.y,
                angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI
            return angle
        },
        // DRAGSTART
        mousedown = function(event){
            event.preventDefault()
            document.body.style.cursor = 'move'
            mousemove(event)
            document.addEventListener('mousemove', mousemove)
            document.addEventListener('mouseup', mouseup)
        },
        // DRAG
        mousemove = function(event){
            picker.style[transform] = 'rotate(' + rotate(event.pageX, event.pageY) + 'deg)'
        },
        // DRAGEND
        mouseup = function(){
            document.body.style.cursor = null;
            document.removeEventListener('mouseup', mouseup)
            document.removeEventListener('mousemove', mousemove)
        }
        // DRAG START
        pickerCircle.addEventListener('mousedown', mousedown)
        // ENABLE STARTING THE DRAG IN THE BLACK CIRCLE
        circle.addEventListener('mousedown', function(event){
            if(event.target === this) mousedown(event)
        })
        return () => {
            pickerCircle.removeEventListener('mousedown', mousedown)
            // ENABLE STARTING THE DRAG IN THE BLACK CIRCLE
            circle.removeEventListener('mousedown', function(event){
                if(event.target === this) mousedown(event)
            })
        }
    }, []);




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
            angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI
        return angle
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
        // onMouseMove(e)
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    const onCirlceMouseDown = (e) => {
        if(e.target === outerCircleRef.current) onMouseDown(e)
    }

    return ( 
        // <div ref={outerCircleRef} onMouseDown={(e) => { onCirlceMouseDown(e) }} className="outerCircle">
        //     <div ref={innerCircleRef} className="innerCircle"></div>
        //     <div ref={angleRotatorRef} className="angleRotator">
        //         <div ref={angleDraggerRef} onMouseDown={onMouseDown} className="angleDragger"></div>
        //     </div>
        // </div>
        <div id="circle">
            <div id="circle-in"></div>
            <div id="picker">
                <div id="picker-circle">
                </div>
            </div>
        </div>	
    );
}
 
export default DegreeRotator;