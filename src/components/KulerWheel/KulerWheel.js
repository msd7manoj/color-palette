import React, { useRef, useEffect } from 'react';
import { KULER_IMAGE_URL } from "./imageUrl"

/* eslint-disable */
const KulerWheel = () => {
    const wheel = useRef()
    
    useEffect(() => {
        const kulerPicker = {
            canvas: document.getElementById("kulerPicker"),
            load: function() {
                kulerPicker.context = kulerPicker.canvas.getContext("2d");
                kulerPicker.size = kulerPicker.wheel.size + kulerPicker.markers.outerSize; 
                kulerPicker.center = kulerPicker.size / 2; 
                kulerPicker.wheel.radius = kulerPicker.wheel.size / 2;
                kulerPicker.markers.outerRadius = kulerPicker.markers.outerSize / 2; 
                kulerPicker.markers.innerRadius = kulerPicker.markers.innerSize / 2; 
                kulerPicker.canvas.width = kulerPicker.size; 
                kulerPicker.canvas.height = kulerPicker.size;
                kulerPicker.wheel.image.onload = function() {
                    kulerPicker.wheel.draw(), kulerPicker.calculate({
                        x: kulerPicker.size - kulerPicker.markers.outerRadius - 1,
                        y: kulerPicker.center
                    }, 0)
                }
                kulerPicker.wheel.image.src = KULER_IMAGE_URL
            },
            clearCanvas: function() {
                kulerPicker.context.clearRect(0, 0, kulerPicker.canvas.width, kulerPicker.canvas.height)
            },
            wheel: {
                size: parseInt(kulerPicker.canvas.getAttribute("data-s")),
                image: new Image,
                draw: function() {
                    kulerPicker.context.drawImage(kulerPicker.wheel.image, kulerPicker.markers.outerRadius, kulerPicker.markers.outerRadius, kulerPicker.wheel.size, kulerPicker.wheel.size)
                }
            },
            markers: {
                outerSize: 30,
                innerSize: 22.5,
                list: [],
                selected: 0,
                draw: function() {
                    for (var i = kulerPicker.markers.list.length - 1; i >= 0; i--) {
                        var point = kulerPicker.markers.list[i],
                            theta = Math.atan((point.y - kulerPicker.center) / (point.x - kulerPicker.center)),
                            counterClockwise = point.x - kulerPicker.center < 0,
                            theta1 = 3 * Math.PI / 2 + theta,
                            theta2 = theta1 - Math.PI;
                            kulerPicker.markers.drawContainer(point, kulerPicker.markers.outerRadius, theta1, theta2, counterClockwise)
                    }
                    for (var selected = void 0, i = kulerPicker.markers.list.length - 1; i >= 0; i--) {
                        kulerPicker.markers.selected != i ? kulerPicker.markers.drawCircle(kulerPicker.colors.list[i].str, kulerPicker.markers.list[i], kulerPicker.markers.innerRadius) : (selected = kulerPicker.markers.list[i]).color = kulerPicker.colors.list[i].str;
                        selected && (kulerPicker.markers.drawCircle("#FFF", selected, picker.markers.outerRadius), kulerPicker.markers.drawCircle(selected.color, selected, kulerPicker.markers.innerRadius))
                    }
                }
            },
            drawContainer: function(point, radius, theta1, theta2, counterClockwise) {
                kulerPicker.context.fillStyle = "rgba(255, 255, 255, 0.5)", kulerPicker.context.beginPath(), kulerPicker.context.moveTo(kulerPicker.center, kulerPicker.center), kulerPicker.context.arc(point.x, point.y, radius, theta1, theta2, counterClockwise), kulerPicker.context.lineTo(kulerPicker.center, kulerPicker.center), kulerPicker.context.fill(), kulerPicker.context.closePath()
            },
            drawCircle: function(color, point, radius) {
                kulerPicker.context.fillStyle = color, kulerPicker.context.beginPath(), kulerPicker.context.arc(point.x, point.y, radius, 0, 2 * Math.PI), kulerPicker.context.fill(), kulerPicker.context.closePath()
            }
        }
        
        kulerPicker.load()
        
    }, [wheel.current])

    return ( 
        <canvas
        ref={wheel}
        id="kulerPicker"
        style={{ borderRadius: '50%' }}
        data-s="380"
        width="410"
        height="410"
        >
            
        </canvas>
    );
}
 
export default KulerWheel;