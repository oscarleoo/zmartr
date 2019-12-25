import axios from 'axios'

const addTask = (newTask) => {

    return axios.post('http://tasks/createTask', { newTask })

}

export default addTask