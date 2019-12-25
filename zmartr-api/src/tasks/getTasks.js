import axios from 'axios'

const getTasks = () => {
    return axios.get('http://tasks/tasks')
}

export default getTasks