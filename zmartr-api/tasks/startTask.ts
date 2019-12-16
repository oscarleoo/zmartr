const axios = require('axios')

const startTask = (taskId: string) => {
    return axios.post('http://tasks/startTask', { taskId })
}

export default startTask