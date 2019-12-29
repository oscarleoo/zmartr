import verifyToken from '../authentication/verifyToken';

const authenticationMiddleware = async (req, res, next) => {
  const authorization = req.get('Authorization');

  if (!authorization) {
    req.isAuth = false;
    return next();
  }

  const token = authorization.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }

  try {
    const verification = await verifyToken(token);
    const userId = verification.data;
    if (userId === '') {
      req.isAuth = false;
      next();
    } else {
      req.isAuth = true;
      req.userId = userId;
      next();
    }
  } catch (error) {
    req.isAuth = false;
    return next();
  }

};

export default authenticationMiddleware;
