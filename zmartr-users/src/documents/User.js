import mongoose, { Schema } from 'mongoose';

const User = mongoose.model('User', new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  tokens: {
    type: [String],
    default: [],
  },

}));

export default User;
