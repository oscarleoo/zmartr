import { Schema } from 'mongoose';

const ActionSchema = new Schema({

  type: {
    type: String,
    enum: ['Started', 'Stopped', 'Finished', 'Archived'],
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

}, { _id: false });

export default ActionSchema;
