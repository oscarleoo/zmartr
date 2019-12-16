const axios = require('axios')

const archiveTask = (taskId: string) => {
    return axios.post('http://tasks/archiveTask', { taskId })
}

export default archiveTask