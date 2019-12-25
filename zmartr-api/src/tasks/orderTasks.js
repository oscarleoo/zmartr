import axios from 'axios'

const orderTasks = (taskIds) => {
    return axios.post('http://tasks/orderTasks', { taskIds })
}

export default orderTasks