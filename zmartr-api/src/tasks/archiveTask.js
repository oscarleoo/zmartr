import axios from 'axios'

const archiveTask = (taskId) => {
    return axios.post('http://tasks/archiveTask', { taskId })
}

export default archiveTask