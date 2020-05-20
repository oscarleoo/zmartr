import mongoose from 'mongoose';
import ActionSchema from './ActionSchema';

const Task = mongoose.model('Task', new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    required: true,
  },

  selected: {
    type: Boolean,
    default: false,
  },

  order: {
    type: Number,
  },

  actions: {
    type: [ActionSchema],
    default: [],
  },

  tags: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
    }],
    default: [],
  },

}));

export default Task;
