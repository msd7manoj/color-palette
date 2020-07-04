import React from 'react';

const WebColorInfo = ({ colorData }) => {
    console.log('colorData', colorData)
    return ( 
        <ul className="colorInfoDesc dFlex justify-between">
            { Object.keys(colorData).map( color => {
                return (
                    <li style={ { width: `${100/Object.keys(colorData).length}%` }}>
                        <h3>{color}</h3>
                        <h4>{colorData[color]}</h4>
                    </li>
                )
            })}
        </ul>
    );
}
 
export default WebColorInfo;