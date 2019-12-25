import axios from 'axios'

const startTask = (taskId) => {
    return axios.post('http://tasks/startTask', { taskId })
}

export default startTask