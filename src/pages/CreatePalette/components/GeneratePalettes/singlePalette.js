import React, { useContext } from 'react';
import useRenderCount from '../../../../utils/useRenderCount';
import { paletteDispatchContext } from '../../createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';
import clsx from 'clsx';
import globalStyles from '../../../../styles/globalStyle';
import useStyles from './styles';

const SinglePalette = ({ index, selectedColorInd, color }) => {
    const dispatch = useContext(paletteDispatchContext)
    const { dFlexEnd } = globalStyles()
    const { colorMarker } = useStyles()
    const selectPalette = (e) => {
        dispatch({ type: CREATE_PALETTE_ACTION.SELECTED_PALETTE, payload: index + 1 })
        dispatch({ type: CREATE_PALETTE_ACTION.SELECTED_PALETTE_COLOR, payload: color })
    }
    return ( 
        <li onClick={selectPalette} className={clsx( index + 1 === selectedColorInd && 'selected' )} style={{ background: `#${color}` }}>
            <span className={ clsx(dFlexEnd, colorMarker) }>
                <i className="fas fa-paint-brush"></i>
            </span>
        </li> 
    );
}
 
export default React.memo(SinglePalette);