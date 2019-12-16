import axios from 'axios'

export const LOGIN = 'LOGIN'
export const login = (email, password) => {
    return { type: LOGIN, payload: axios({ method: 'get', url: `http://localhost:5000/login?email=${email}&password=${password}` }) }
}

export const REGISTER = 'REGISTER'
export const register = (firstName, lastName, email, password) => {
    return { type: REGISTER, payload: axios({ 
        method: 'get', url: `http://localhost:5000/register?email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}` 
    }) }
}
