const axios = require('axios')

const addTask = (newTask: string) => {

    return axios.post('http://tasks/createTask', { newTask })

}

export default addTask