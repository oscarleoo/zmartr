import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import loginUser from './gets/loginUser';
import registerUser from './posts/registerUser';

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const handleError = fn => (req, res, next) => {
    fn(req,res).catch((error) => next(error));
}

app.post('/login', handleError(async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const login = await loginUser(email, password)
    res.send(login)
}))

app.post('/register', handleError(async (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const register = await registerUser(firstName, lastName, email, password)
    res.send(register)
}))

mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@dcrowd-gk9yg.mongodb.net/zmartr-users?retryWrites=true&w=majority`, { useUnifiedTopology: true })
    .then(() => {
        app.listen(80, () => {
            console.log('Tasks microservice ready');
        });
    })
    .catch(err => { console.log(err); });