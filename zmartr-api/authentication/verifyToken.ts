const axios = require('axios')

const verifyToken = (token: string) => {

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