const axios = require('axios')

const register = (
    firstName: string, lastName: string, email: string, password: string
) => {

    return axios.post('http://users/register', { firstName, lastName, email, password })

}

export default register