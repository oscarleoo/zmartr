import bcrypt from 'bcryptjs'
import User from '../documents/User'


const registerUser = async (email, password) => {

    try {

        const users = await User.find({ email: email }).limit(1)

        if (users.length > 0) {
            return { message: { message: 'User already exists', type: 'error' } }
        } else if (password.length < 10) {
            return { message: { message: 'Password is to short', type: 'error' } }
        }

        const passwordHash = await bcrypt.hash(password, 8)
        await new User({ email, password: passwordHash }).save()
        return { message: { message: 'Registration successful', type: 'success' } }

    } catch (error) {
        console.log(error)
        return { message: { message: 'Failed to register', type: 'error' } }
    }

}

export default registerUser