import React, { useContext } from 'react';
import useRenderCount from '../../../../utils/useRenderCount';
import { paletteDispatchContext } from '../../createPaletteState/paletteContext';
import { CREATE_PALETTE_ACTION } from '../../createPaletteState/paletteAction';
import clsx from 'clsx';

const SinglePalette = ({ index, selectedColorInd, color }) => {
    const dispatch = useContext(paletteDispatchContext)
    const selectPalette = (e) => {
        dispatch({ type: CREATE_PALETTE_ACTION.SELECTED_PALETTE, payload: index + 1 })
    }
    return ( 
        <li onClick={selectPalette} className={clsx( index + 1 === selectedColorInd && 'selected' )} style={{ background: `#${color}` }}>
            <span className="dFlex justify-end colorMarker">
                <i class="fas fa-paint-brush"></i>
            </span>
        </li> 
    );
}
 
export default React.memo(SinglePalette);