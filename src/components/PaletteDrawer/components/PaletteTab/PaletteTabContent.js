import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import globalStyles from '../../../../styles/globalStyle';
import convert from 'color-convert';
import { converColorCodes } from '../../../../utils/utils';


const PaletteTabContent = ({ color }) => {

    const [convertColor, setconvertColor] = useState()

    const classes = useStyles()
    const globalClasses = globalStyles()

    console.log('color', color)
    useEffect(() => {
        if( color )
            setconvertColor([
                {
                    'hex': color,
                    'hex code': `#${color}`
                },
                {
                    'rgb': convert.hex.rgb(color).join(', '),
                    'rgb code': converColorCodes('rgb', convert.hex.rgb(`#${color}`) )
                },
                {
                    'hsv': convert.hex.hsv(color).join(', '),
                    'hsv code': converColorCodes('hsv', convert.hex.hsv(`#${color}`) )
                },
                {
                    'hsl': convert.hex.hsl(color).join(', '),
                    'hsl code': converColorCodes('hsl', convert.hex.hsl(`#${color}`) )
                },
                {
                    'cmyk': convert.hex.cmyk(color).join(', '),
                    'cmyk code': converColorCodes('cmyk', convert.hex.cmyk(`#${color}`) )
                },
                {
                    'name': convert.hex.keyword(`#${color}`)
                },
            ])
    }, [color])
    
    return ( 
        <ul className={classes.colorCodeLists}>
            {
                convertColor && convertColor.map(( color, i ) => {
                    return (
                        <li key={i} className={globalClasses['dFlex']}>
                            { Object.keys(color).map(( code, ind ) => {
                                return (
                                    <>
                                        <div key={ code } className={ clsx(classes.colorCode, ind === 1 && classes.code_rt )}>
                                            <h4>{code}</h4>
                                            <h3>
                                                {color[code]}
                                                <a href="/">
                                                    <i className="far fa-copy"></i>
                                                </a>
                                            </h3>
                                        </div>
                        
                                        {/* <div className={classes.colorCode}>
                                            <h4>HEX CODE</h4>
                                            <h3>
                                            #123445
                                            <a href="/">
                                                <i className="far fa-copy"></i>
                                            </a>
                                            </h3>
                                        </div> */}
                                    </>
                                )
                            }) }
                        </li> 
                    )
                })
            }
            {/* <li className={globalClasses['dFlex']}>
                <div className={classes.colorCode}>
                    <h4>HEX</h4>
                    <h3>
                    123445
                    <a href="/">
                        <i className="far fa-copy"></i>
                    </a>
                    </h3>
                </div>

                <div className={classes.colorCode}>
                    <h4>HEX CODE</h4>
                    <h3>
                    #123445
                    <a href="/">
                        <i className="far fa-copy"></i>
                    </a>
                    </h3>
                </div>
            </li>

            <li className={globalClasses['dFlex']}>
            <div className={classes.colorCode}>
                <h4>RGB</h4>
                <h3>
                12, 45, 89
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>

            <div className={ clsx(classes.colorCode, classes.code_rt ) }>
                <h4>RGB CODE</h4>
                <h3>
                RGB(12, 45, 89)
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>
            </li>

            <li className={globalClasses['dFlex']}>
            <div className={classes.colorCode}>
                <h4>HSB</h4>
                <h3>
                12, 45, 89
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>

            <div className={ clsx(classes.colorCode, classes.code_rt ) }>
                <h4>HSB CODE</h4>
                <h3>
                HSB(12, 45, 89)
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>
            </li>

            <li className={globalClasses['dFlex']}>
            <div className={classes.colorCode}>
                <h4>HSL</h4>
                <h3>
                12, 45, 89
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>

            <div className={ clsx(classes.colorCode, classes.code_rt ) }>
                <h4>HSL CODE</h4>
                <h3>
                HSL(12, 45, 89)
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>
            </li>

            <li className={globalClasses['dFlex']}>
            <div className={classes.colorCode}>
                <h4>CMYK</h4>
                <h3>
                12, 45, 89, 34
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>

            <div className={ clsx(classes.colorCode, classes.code_rt ) }>
                <h4>CMYK CODE</h4>
                <h3>
                CMYK(12, 45, 89, 34)
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>
            </li>

            <li className={globalClasses['dFlex']}>
            <div className={classes.colorCode}>
                <h4>Name</h4>
                <h3>
                Red
                <a href="/">
                    <i className="far fa-copy"></i>
                </a>
                </h3>
            </div>
            </li> */}
        </ul>
    );
}
 
export default PaletteTabContent;