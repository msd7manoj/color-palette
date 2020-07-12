import React, { useState, useRef, useEffect } from 'react';
import useStyles from './styles';
import clsx from 'clsx';


export const DropDownItem = ({children}) => {
    return (
        <li>
            {children}
        </li>
    )
}

const DropDownMenu = ({ className, iconClass, position, width, size='lg', iconSize = '1rem', iconWidth = 40 ,iconHeight = 40, children }) => {

    const [ddVisible, setDdVisible] = useState(false)
    const ddRef = useRef(null)

    const classes = useStyles({ width, size, iconSize, iconWidth, iconHeight, position })

    const toggleDropDown = () => {
        setDdVisible(( state ) => !state )
    }

    const handleClickOutside = event => {
        if (ddRef.current && !ddRef.current.contains(event.target)) {
            setDdVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    },[])

    

    return ( 
        <div ref={ddRef} className={ clsx( className && className, classes.dropDownWrp)}>
            <button onClick={toggleDropDown} className={classes.dropDownIcon}>
                <i className={iconClass}></i>
            </button>
            { ddVisible && <div className={ clsx( classes.dropDownMenu) }>
                <ul>
                    { children }
                </ul>
            </div> }
        </div>
    );
}
 
export default DropDownMenu;