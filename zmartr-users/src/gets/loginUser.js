import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../documents/User'


const loginUser = async (email, password) =>  {

    try {

        const user = await User.findOne({ email: email })
        if (!user) { return { user: {}, token: "" } }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (passwordMatch) {

            let token = jwt.sign({ 'userEmail': user.email, 'userId': user._id }, 'This sentence is super secret');
            user.tokens.push(token)
            user.save()
            return { token, user: { email: user.email } }
            
        } else {
            return { user: {}, token: "" }
        }   

    } catch (error) {
        console.log(error)
        return { user: {}, token: "" }
    }

}

export default loginUser