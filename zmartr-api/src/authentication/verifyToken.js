import axios from 'axios'

const { USERS_MICROSERVICE } = process.env

const verifyToken = (token) => {
    return axios.post(`http://${USERS_MICROSERVICE}/verifyToken`, { token })
}

export default verifyToken