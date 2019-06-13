import * as actionTypes from './actionTypes'
import axios from 'axios'


export const authStart = ()=>{
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSucces = (token)=>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = (error)=>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogin = (username, password)=>{
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/rest-auth/login', {
            username: username,
            password: password
        })
    }
}