import axios from 'axios'

const register = (email, password) => {
    return axios.post('http://users/register', { email, password })

}

export default register