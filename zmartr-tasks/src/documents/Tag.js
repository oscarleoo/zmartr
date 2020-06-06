import mongoose from 'mongoose';

const Tag = mongoose.model('Tag', new mongoose.Schema({

  tag: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    default: '#a0a0a0',
  },

  userId: {
    type: String,
    required: true,
  },

  hidden: {
    type: Boolean,
    default: false,
  },

}));

export default Tag;
