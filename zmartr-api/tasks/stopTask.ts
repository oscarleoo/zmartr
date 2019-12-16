const axios = require('axios')

const stopTask = (taskId: string) => {
    return axios.post('http://tasks/stopTask', { taskId })
}

export default stopTask