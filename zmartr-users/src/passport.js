import passport from 'passport'
import LocalStrategy from 'passport-local'
import User from './documents/User'
import bcrypt from 'bcryptjs'

// https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/

const verifyPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password)
}

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!verifyPassword(user, password)) { return done(null, false); }
        return done(null, user);
    })
}))