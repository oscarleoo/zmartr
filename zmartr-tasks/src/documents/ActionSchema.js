import { Schema } from 'mongoose';

const ActionSchema = new Schema({

  type: {
    type: String,
    enum: ['Started', 'Stopped', 'Completed', 'Dismissed', 'Delegated'],
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    // required: true
  },

}, { _id: false });

export default ActionSchema;
