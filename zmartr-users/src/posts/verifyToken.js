import jwt from 'jsonwebtoken';
import User from '../documents/User';

const verifyToken = async (token) => {
  try {
    const decodedToken = jwt.verify(token, 'This sentence is super secret');
    const users = await User.find({ email: decodedToken.email });
    const user = users[0];
    if (!user) {
      return '';
    }
    return user._id;
  } catch (error) {
    return '';
  }
};

export default verifyToken;
