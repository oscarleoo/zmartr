import bcrypt from 'bcryptjs'
import User from '../documents/User'


const registerUser = async (firstName, lastName, email, password) => {

    try {

        const users = await User.find({ email: email }).limit(1)

        if (users.length > 0) {
            return 'User already exists'
        } else if (password.length < 10) {
            return 'Password is to short'
        }

        const passwordHash = await bcrypt.hash(password, 8)
        await new User({ firstName, lastName, email, password: passwordHash}).save()
        return 'Registration sucessfull'

    } catch (error) {
        console.log(error)
        return 'Failed to register'
    }

}

export default registerUser