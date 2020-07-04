import React, { useReducer } from 'react';
import CreatePalette from './CreatePalette';
import { PaletteDispatchProvider, PaletteStateProvider } from './createPaletteState/paletteContext';
import { initialState } from './createPaletteState/paletteState';
import { createPaletteReducer } from './createPaletteState/paletteReducer';

const CreatePaletteContainer = (props) => {
    
    const [state, dispatch] = useReducer(createPaletteReducer, initialState);

    return ( 
        <PaletteDispatchProvider value={dispatch}>
            <PaletteStateProvider value={state}>
                <CreatePalette routeProps={props} />
            </PaletteStateProvider>
        </PaletteDispatchProvider>
    );
}
 
export default CreatePaletteContainer;