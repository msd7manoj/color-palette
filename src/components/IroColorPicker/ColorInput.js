import React from 'react';
import clsx from 'clsx';

const ColorInput = ({ type, hexValue }) => {

    return ( 
        <div className={clsx('inputWrap','colorCodeInput', type === 'hex' ? 'hexInput' : 'rgbInput')}>
            {
                type === 'hex' ? (
                    <input maxLength="7" value={hexValue} type="text" />
                ) : (
                    <div className="rgbInputVal dFlex">
                        <input maxLength="3" type="text" />
                        <input maxLength="3" type="text" />
                        <input maxLength="3" type="text" />
                    </div>
                )
            }
            
        </div>
    );
}
 
export default ColorInput;