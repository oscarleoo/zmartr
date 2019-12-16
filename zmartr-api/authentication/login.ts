const axios = require('axios')

const login = (email: string, password: string) => {
    return axios.post('http://users/login', { email, password })
}

export default login