const axios = require('axios')

const finishTask = (taskId: string) => {
    return axios.post('http://tasks/finishTask', { taskId })
}

export default finishTask