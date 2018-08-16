import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/helpers';

const initialState = {
    time: null,
    value: null,
    loading: false
}

const appReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionType.RETURN_TIME: return updateObject(state, {
            time: action.time,
            value: action.value,
            loading: false
        });
        case actionType.LOADING: return updateObject(state, {
            loading: true
        });
        default: return state;
    }
}

export default appReducer;