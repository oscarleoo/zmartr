import verifyToken from '../authentication/verifyToken'

const authenticationMiddleware = async (req, res, next) => {

    const authorization = req.get('Authorization')

    if (!authorization) {
        req.isAuth = false
        return next()
    }

    const token = authorization.split()[1]
    if (!token || token === '') {
        req.isAuth = false
        return next()
    }

    try {

        // TODO: verify token in dcrowd-users
        // const verification = await verifyToken(token)
        // req.isAuth = true
        // req.userId = decodedToken.userId
        next()
   
    } catch (error) {
        req.isAuth = false
        return next()
    }

    // if (!decodedToken) {
    //     req.isAuth = false
    //     return next()
    // }

}

export default authenticationMiddleware