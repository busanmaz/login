import { LOGIN, LOGIN_SUCCESS } from './actionTypes'

export const login = (email, password) => {
    return {
        type: LOGIN,
        email, 
        password
    }
}

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token
    }
}