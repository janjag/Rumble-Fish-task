import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/helpers';

const initialState = {
    time: null,
    value: null
}

const appReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionType.RETURN_TIME: return updateObject(state, {
            time: action.time,
            value: action.value
        });
        default: return state;
    }
}

export default appReducer;