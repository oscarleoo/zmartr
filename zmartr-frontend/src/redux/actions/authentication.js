import axios from 'axios'

export const LOGIN = 'LOGIN'
export const login = (email, password) => {
    return { type: LOGIN, payload: axios({ method: 'get', url: `/login?email=${email}&password=${password}` }) }
}

export const REGISTER = 'REGISTER'
export const register = (email, password) => {
    return { type: REGISTER, payload: axios({ 
        method: 'get', url: `/register?email=${email}&password=${password}` 
    }) }
}
