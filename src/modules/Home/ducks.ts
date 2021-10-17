import { createRoutine } from 'redux-saga-routines';

export const fireClickAction = createRoutine('custom-action');

const initialState = {
    data: null, 
    loading: false,
    error: null,
};

export const fireClickReducer = ( 
    state = initialState,
    { type = '', payload = '' }
) => {
    const handler = HANDLERS[type];
    return handler?.(state, payload) ?? state;
};

const handleTrigger = ( state) => ({
    ...state,
    data: null,
    loading: true,
    error: null,
});

const handleSuccess =( state, payload) => ({
    ...state,
    data: payload,
    loading: false,
    error: null,
})

const handleFailure = (state, payload) => ({
    ...state,
    data: null,
    loading: false,
    error: payload
}) 

const HANDLERS = {
    [fireClickAction.TRIGGER]: handleTrigger,
    [fireClickAction.SUCCESS]: handleSuccess,
    [fireClickAction.FAILURE]: handleFailure,
    
}
