import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import loginUser from './posts/loginUser';
import registerUser from './posts/registerUser';
import verifyToken from './posts/verifyToken';

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handleError = (fn) => (req, res, next) => {
  fn(req, res).catch((error) => {
    console.log(error);
    next(error);
  });
};

app.post('/login', handleError(async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  const login = await loginUser(email, password);
  res.send(login);
}));

app.post('/register', handleError(async (req, res) => {
  const { email, password } = req.body;
  const registerResponse = await registerUser(email, password);
  res.send(registerResponse);
}));

app.post('/verifyToken', handleError(async (req, res) => {
  const { token } = req.body;
  const tokenReponse = await verifyToken(token);
  res.send(tokenReponse);
}));

mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@dcrowd-gk9yg.mongodb.net/zmartr-users?retryWrites=true&w=majority`, { useUnifiedTopology: true })
  .then(() => {
    app.listen(80, () => {
      console.log('Users microservice ready');
    });
  })
  .catch((err) => { console.log(err); });
