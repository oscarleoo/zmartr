import axios from 'axios'

const finishTask = (taskId) => {
    return axios.post('http://tasks/finishTask', { taskId })
}

export default finishTask