import {
    SIGN_IN_USER,
    SIGN_UP_USER,
    KEEP_USER
} from './types'

export default (state, action) => {
    switch(action.type){
        case SIGN_UP_USER:
            return{
                ...state,
                user: action.payload
            };
        case SIGN_IN_USER:
            return{
                ...state,
                user: action.payload
            };
        case KEEP_USER:
                return{
                    ...state,
                    userName: action.payload
                }
    default:
        return state;
    }
}