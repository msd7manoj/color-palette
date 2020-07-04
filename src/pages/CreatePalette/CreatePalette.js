import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { useParams } from "react-router-dom";
import SectionTitle from '../../components/SectionTitle';
import { paletteDispatchContext, paletteStateContext } from './createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from './createPaletteState/paletteAction';
import clsx from 'clsx';
import ColorPicker from '../../components/ColorPicker';
import { COLOR_NAMES } from '../../colorConverter/constants';
import tinycolor2 from 'tinycolor2'
import { rgbToCMYK } from '../../utils/utils';
import IconLink from '../../components/IconLink/IconLink';
import { TABS_OPTIONS } from './constants';
import reshader from 'reshader'
import { MATERIAL_COLORS } from '../../colorConverter/materialColors';
import { getTintShades } from '../../utils/tintShades';
import GeneratePalettes from './components/GeneratePalettes';
import WebColors from './components/WebColors';
import MaterialColors from './components/MaterialColors';


const CreatePalette = () => {
    const paletteState = useContext(paletteStateContext)
    const dispatch = useContext(paletteDispatchContext)
    const [tabMenu, setTabMenu] = useState(TABS_OPTIONS)
    const [webColorInfo, setWebColorInfo] = useState()
    const [selectedWebColor, setselectedWebColor] = useState('')
    const { palettes } = useParams()

    console.log('reshader(#ffcdd2)',[...new Set( reshader('#ffcdd2', { numberOfVariations: 11 }).palette )])
    
    console.log('getTintShades', getTintShades('ff0000'))
    useEffect(() => {
        const paletteColor = {}
        palettes.split('-').forEach( (color, ind) => {
            paletteColor[ind + 1] = color
        })
        dispatch({ type: CREATE_PALETTE_ACTION.CREATE_PALETTE, payload: paletteColor })
    }, [])

    const onChangeColor = useCallback((e) => {
        const { hex } = e
        console.log(hex.substr(1))
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: paletteState.selectedColorInd,color: hex.substr(1)} })
    }, [paletteState.selectedColorInd]);
    
    const selectWebColor = (color) => (e) => {
        setselectedWebColor(color.name)
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: paletteState.selectedColorInd,color: color.hex.substr(1)} })
    }


    const onTabClick = (menu) => (e) => {
        e.preventDefault()
        setWebColorInfo( menu )
        setTabMenu((oldMenu) => {
            return oldMenu.map( el => {
                return { ...el, active: menu.lable === el.lable }
            })
        })
    }

    const onColorOverLeave = ( menu, type = 'enter' ) => (e) => {
        setWebColorInfo( type === 'enter' ? menu : undefined)
    }

    return ( 
        <>
            {/* <pre>
                {JSON.stringify(paletteState)}
            </pre> */}
            <Row between="md">
                <Col md={5}>
                    <div className="creatPaletteWrp">
                        <GeneratePalettes />
                    </div>
                </Col>
                <Col md={7}>
                    <div className="colorChooser">
                        <ul className="dFlex chooserTab">
                            {
                                tabMenu.map( menu => {
                                    return (
                                        <li>
                                            <a className={clsx(menu.active && 'active')} onClick={ onTabClick(menu) } href="/">
                                                {menu.lable}
                                            </a>
                                        </li>
                                    )
                                } )
                            }
                        </ul>

                        <div className="chooserContent">
                            { tabMenu[0]['active'] && (
                                <div className="dFlex justify-center">
                                    <ColorPicker 
                                    width={'65%'} onChangeColor={onChangeColor} />
                                </div> 
                            ) }
                            { tabMenu[1]['active'] && (
                                <div className="dFlex justify-center">
                                    
                                </div> 
                            ) }
                            { tabMenu[2]['active'] && (
                                <div className="dFlex justify-center">
                                    <WebColors selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }
                            { tabMenu[3]['active'] && (
                                <div className="dFlex justify-center">
                                    <MaterialColors selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }

                            <div className="">
                                {/* <ul className="scrollBar dFlex webColorsList">
                                    {
                                        COLOR_NAMES.map(( color ) => {
                                            return (
                                                <li onClick={selectWebColor(color.hex.substr(1))}>
                                                    <div style={{backgroundColor: `${ color.hex }`}} className="bgColor">
                                                        <span>
                                                            {color.hex.substr(1)}
                                                        </span>
                                                    </div>
                                                    <div className="dFlex justify-between bgInfo">
                                                        <h4>{color.name}</h4>
                                                        <a href="/">
                                                            <i class="far fa-copy"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> */}



                                {/* <div className="dFlex colorInfoDesc justify-between">
                                    { webColorInfo && (
                                                <>
                                                    <h3>
                                                        {webColorInfo.name}
                                                    </h3>
                                                    <h3>
                                                        {webColorInfo.hex.substr(1)}
                                                    </h3>
                                                </>
                                    ) }
                                </div>
                                <ul className="dFlex webColorsList">
                                    {
                                        COLOR_NAMES.map(( color ) => {
                                            return (
                                                <li onMouseOver={onColorOverLeave(color)} onClick={selectWebColor(color)}>
                                                    <div className={ clsx( selectedWebColor === color.name  && 'active') } style={{backgroundColor: `${ color.hex }`}}>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> */}

                                

                                {/* <div className="dFlex materialColor justify-between">
                                    <ul className="materialColorList">
                                        {
                                            MATERIAL_COLORS.map( color => {
                                                return (
                                                    <li>
                                                        <h3>{color.name}</h3>
                                                        <div className="colorBoxWrp">
                                                            {
                                                                color.codes.map( code => {
                                                                    return (
                                                                        <div className="colorBox" style={{ backgroundColor: code }}>

                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
 
export default CreatePalette;