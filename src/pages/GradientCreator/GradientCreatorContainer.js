import React, { useReducer } from 'react';
import { GradientDispatchProvider, GradientStateProvider } from './gradientCreatorState/gradientContext';
import GradientCreator from './GradientCreator';
import { initialState } from './gradientCreatorState/gradientState';
import { createGradientReducer } from './gradientCreatorState/gradientReducer';

const GradientCreatorContainer = (props) => {

    const [state, dispatch] = useReducer(createGradientReducer, initialState);


    return ( 
        <GradientDispatchProvider value={dispatch}>
            <GradientStateProvider value={state}>
                <GradientCreator routeProps={props} />
            </GradientStateProvider>
        </GradientDispatchProvider>
    );
}
 
export default GradientCreatorContainer;