const axios = require('axios')

const orderTasks = (taskIds: string) => {
    return axios.post('http://tasks/orderTasks', { taskIds })
}

export default orderTasks