import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const SelectBox = ({defaultLabel, options, onChange, width }) => {

    const [toggleDropDown, setToggleDropDown] = useState(false)
    const [selectedLbl, setSelectedLbl] = useState(defaultLabel)
    const [selectedVal, setSelectedVal] = useState(options ? options[0].value : '')
    const ddRef = useRef(null)
    const classes = useStyles({width})
    const handleClickOutside = event => {
        if (ddRef.current && !ddRef.current.contains(event.target)) {
            setToggleDropDown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    },[])
    

    const onToggleDropDown = (e) => {
        e.preventDefault()
        setToggleDropDown( state => !state )
    }

    const onChangeOption = (option, index) => (e) => {
        setSelectedLbl(option.label)
        setSelectedVal(option.value)
        setToggleDropDown( false )
        onChange(option, index)
    }

    return ( 
        <div ref={ddRef} className={classes.selectorWrap}>
            <div onClick={onToggleDropDown} className={classes.selectorLbl}>
                { !!selectedLbl ? selectedLbl : options[0].label} 
                <i class={clsx('fas', toggleDropDown ? 'fa-chevron-down' : 'fa-chevron-up')}></i>
            </div>
            { toggleDropDown && (
                <ul style={{width: width}} className={classes.selectorDd}>
                    { options.map( (option, index ) => {
                        return (
                            <li className={clsx(selectedVal === option.value && classes.selectedValue)} key={option.label}>
                                <button data-value={option.value} onClick={onChangeOption(option, index)}>     
                                    {option.label}
                                </button>
                            </li>
                        )
                    }) }
                </ul>
            ) }
        </div>
    );
}
export default SelectBox;