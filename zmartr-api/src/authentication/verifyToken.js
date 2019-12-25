import axios from 'axios'

const verifyToken = (token) => {

    return axios({
        method: 'post',
        url: 'http://datasets:5002',
        data: {
            query: `
                query ($token: String!) {
                    verifyToken(token: $token) {
                        verified
                        user
                    }
                }
            `,
            variables: { token }
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

export default verifyToken