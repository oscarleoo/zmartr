import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import loginUser from './gets/loginUser';
import registerUser from './posts/registerUser';

const { MONGO_HOST } = process.env;
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const handleError = fn => (req, res, next) => {
    fn(req,res).catch((error) => next(error));
}

app.get('/login', handleError(async (req, res) => {
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

mongoose.connect(
    `mongodb://${MONGO_HOST}:27017/startr`, 
    { useNewUrlParser: true, useUnifiedTopology: true 
})
    .then(() => { app.listen(80, () => { console.log('Users microservice ready!') }) })
    .catch(err => { console.log(err); });