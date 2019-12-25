import axios from 'axios'

const stopTask = (taskId) => {
    return axios.post('http://tasks/stopTask', { taskId })
}

export default stopTask