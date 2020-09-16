import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import globalStyles from '../../styles/globalStyle';
import useStyles from './styles';
import { gradientDispatchContext } from '../../pages/GradientCreator/gradientCreatorState/gradientContext';
import { contextActionCreator } from '../../utils/utils';
import { CREATE_GRADIENT_ACTION } from '../../pages/GradientCreator/gradientCreatorState/gradientAction';


const ColorInput = ({ type, hexValue }) => {

    const [colorValue, setColorValue] = useState(hexValue)
    const dispatch = useContext(gradientDispatchContext)


    const globalClasses = globalStyles();
    const classes = useStyles();

    useEffect(() => { setColorValue(hexValue)  }, [hexValue])

    const onInputChange = (e) => { setColorValue(e.target.value) }

    const onColorSubmit = (e) => {
        e.preventDefault()
        console.log('colorValue', colorValue)
        dispatch(contextActionCreator(CREATE_GRADIENT_ACTION.SELECTED_COLOR, colorValue))
    }
    return ( 
        <form onSubmit={onColorSubmit} className={clsx(globalClasses.inputWrap, globalClasses.inputOptionForm,classes.colorCodeInput, type === 'hex' ? classes.hexInput : classes.rgbInput )}>
            {
                type === 'hex' ? (
                    <>
                        <input onChange={onInputChange} maxLength="7" value={colorValue} type="text" />
                        <button>
                            <i class={clsx("fas", "fa-check")}></i>
                        </button>
                    </>
                ) : (
                    <div className="rgbInputVal dFlex">
                        <input maxLength="3" type="text" />
                        <input maxLength="3" type="text" />
                        <input maxLength="3" type="text" />
                    </div>
                )
            }
            
        </form>
    );
}
 
export default React.memo(ColorInput);