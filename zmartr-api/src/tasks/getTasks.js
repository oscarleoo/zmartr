import axios from 'axios'

const { TASKS_MICROSERVICE } = process.env

const getTasks = () => {
    return axios.get(`http://${TASKS_MICROSERVICE}/tasks`)
}

export default getTasks