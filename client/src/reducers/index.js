import { LOGIN, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS } from '../actions'; 

const initialState = {
    notes: [], 
    registering: false,
    loggingIn: false,
    error: null,
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loggingIn: false,
                token: action.payload
            }
        case REGISTER: 
            return {
                ...state,
                registering: true
            } 
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false
            }
    }
} 

export default reducer;