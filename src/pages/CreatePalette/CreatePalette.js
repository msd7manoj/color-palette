import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { useParams } from "react-router-dom";
import SectionTitle from '../../components/SectionTitle';
import { paletteDispatchContext, paletteStateContext } from './createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from './createPaletteState/paletteAction';
import clsx from 'clsx';
import useStyles from './styles';
import ColorPicker from '../../components/ColorPicker';
import { COLOR_NAMES } from '../../colorConverter/constants';
import tinycolor2 from 'tinycolor2'
import { rgbToCMYK } from '../../utils/utils';
import IconLink from '../../components/IconLink/IconLink';
import { TABS_OPTIONS } from './constants';
import reshader from 'reshader'
import { MATERIAL_COLORS } from '../../colorConverter/materialColors';
import { getTintShades, generateTintShades } from '../../utils/tintShades';
import GeneratePalettes from './components/GeneratePalettes';
import WebColors from './components/WebColors';
import MaterialColors from './components/MaterialColors';
import TintShades from './components/TintShades';
import HueShades from './components/HueShades';
import ColorSchemes from './components/ColorSchemes';
import globalStyles from '../../styles/globalStyle';


const CreatePalette = () => {
    const paletteState = useContext(paletteStateContext)
    const dispatch = useContext(paletteDispatchContext)
    const [tabMenu, setTabMenu] = useState(TABS_OPTIONS)

    const [webColorInfo, setWebColorInfo] = useState()
    const [selectedWebColor, setselectedWebColor] = useState('')
    const { palettes } = useParams()
    const classes = useStyles()
    const {dFlex} = globalStyles()


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
        dispatch({ type: CREATE_PALETTE_ACTION.EDIT_PALETTE, payload: { id: paletteState.selectedColorInd, color: hex.substr(1)} })
    }, [paletteState.selectedColorInd]);
    
    const onChangeColorComplete = useCallback((e) => {
        const { hex } = e
        dispatch({ type: CREATE_PALETTE_ACTION.PICKER_COMPLETED_COLOR, payload: tinycolor2(hex.substr(1)).toHsl() })
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
            <Row between="md">
                <Col md={5}>
                    <div className={classes.creatPaletteWrp}>
                        <GeneratePalettes />
                    </div>
                </Col>
                <Col md={7}>
                    <div className={classes.colorChooser}>
                        <ul className={ clsx(dFlex, classes.chooserTab)}>
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

                        <div className={classes.chooserContent}>
                            { tabMenu[0]['active'] && (
                                <div className={dFlex}>
                                    <ColorPicker 
                                    width={'100%'}
                                    color={ `#${paletteState.paletteSelectedColor}` }
                                    selectedColorInd={paletteState.selectedColorInd}
                                    onChangeColorComplete={ onChangeColorComplete }
                                    onChangeColor={onChangeColor} />
                                </div> 
                            ) }
                            { tabMenu[1]['active'] && (
                                <div className={classes.dFlex}>
                                    <HueShades selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }
                            { tabMenu[2]['active'] && (
                                <div className={classes.dFlex}>
                                    <ColorSchemes selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }
                            { tabMenu[3]['active'] && (
                                <div className={classes.dFlex}>
                                    <TintShades 
                                    selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }
                            { tabMenu[4]['active'] && (
                                <div className={classes.dFlex}>
                                    <WebColors selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }
                            { tabMenu[5]['active'] && (
                                <div className={classes.dFlex}>
                                    <MaterialColors selectedColorInd={paletteState.selectedColorInd} />
                                </div> 
                            ) }
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
 
export default CreatePalette;