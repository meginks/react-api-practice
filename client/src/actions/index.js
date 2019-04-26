import axios from 'axios'; 
import { history } from '../helpers/history';

// LOGIN 
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN }); 
    return axios 
    .post('https://build-week-blackhole.herokuapp.com/api/login', credentials) 
    .then(res => {
        localStorage.setItem('token', res.data.token); 
        dispatch({ 
            type: LOGIN_SUCCESS, 
            payload: res.data.token })
    })
} 

// REGISTER 

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const register = credentials => dispatch => {
    dispatch({ 
        type: REGISTER
    })
    return axios 
    .post('https://build-week-blackhole.herokuapp.com/api/register', credentials) 
    .then(res => {
        localStorage.setItem('token', res.data.payload); 
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.payload
        });
        history.push('/protected'); 
    })
}; 

