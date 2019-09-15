import {getAuthUserData} from "./auth-reducer";

const ROGER_INITIALIZED = 'ROGER_INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROGER_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};
export const initSuccess = () => ({type: ROGER_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initSuccess());
    })
};

export default appReducer;