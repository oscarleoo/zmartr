import bcrypt from 'bcryptjs';
import User from '../documents/User';


const registerUser = async (email, password) => {
  try {
    const users = await User.find({ email }).limit(1);

    if (users.length > 0) {
      return { message: { text: 'User already exists', type: 'error' } };
    } if (password.length < 10) {
      return { message: { text: 'Password is to short', type: 'error' } };
    }

    const passwordHash = await bcrypt.hash(password, 8);
    await new User({ email, password: passwordHash }).save();
    return { message: { text: 'Registration successful', type: 'success' } };
  } catch (error) {
    return { message: { text: 'Failed to register', type: 'error' } };
  }
};

export default registerUser;
