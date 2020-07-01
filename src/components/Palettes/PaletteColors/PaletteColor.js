import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { copyText } from '../../../utils/utils';
import clsx from 'clsx';

const PaletteColor = ({ palette }) => {
    const classes = useStyles()
    const [showCopied, setShowCopied] = useState(false)
    const [fadeOutClass, setFadeOutClass] = useState('')

    let timer = null;
    const copyToClipboard = () => {
        setFadeOutClass('')
        setShowCopied(true)
        copyText(palette)
        timer = setTimeout( () => {
            setFadeOutClass('animate__animatedFadeOut animate__fadeOut')
        }, 1000);
        // timer()
    }
    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    },[]);


    return ( 
        <li onClick={copyToClipboard} style={{ background: `#${palette}` }}>
            <span className={classes.colorToolTip}>{palette}</span>
            { showCopied && <span className={ clsx(classes.colorCopied, fadeOutClass)}><i class="fas fa-check"></i> Copied</span> }
        </li>
    );
}
 
export default PaletteColor;