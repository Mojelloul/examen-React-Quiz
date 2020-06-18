import * as types from '../constants/action-type';

const stateInit = {
    score:0,
    nombreQestion:0,
    result:'',
    equations:[]
};

export default (state = stateInit, action = {}) => {
    const {type, payload} = action;
    switch (type) {
    case types.INCREMENT_SCORE:
    return {
        ...state,
        score: state.score + 1 
    };
    case types.RESET_RESULT: {
        return {
            ...state,
            result: ''
        }
    }
    case types.SET_RESULT: 
    return {
        ...state,
        result: state.result + payload.data
    }
    case types.DECREMENT_SCORE:
        return {
            ...state,
            score: state.score -1
        }
    case types.RESET_GAME:
        return {
            ...state,
            equations: payload.data
        }
    case types.RESET_SCORE: 
        return {
            ...state,
            score: 0
        }
    default:
        return state;
}
}