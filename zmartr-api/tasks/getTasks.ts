const axios = require('axios')

const getTasks = () => {
    return axios.get('http://tasks/tasks')
}

export default getTasks