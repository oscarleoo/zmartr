import axios from 'axios'

const login = (email, password) => {
    return axios.post('http://users/login', { email, password })
}

export default login