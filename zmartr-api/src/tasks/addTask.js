import axios from 'axios'

const { TASKS_MICROSERVICE } = process.env

const addTask = (newTask) => {
    return axios.post(`http://${TASKS_MICROSERVICE}/createTask`, { newTask })
}

export default addTask