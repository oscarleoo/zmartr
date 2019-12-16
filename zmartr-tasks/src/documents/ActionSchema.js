import { Schema } from 'mongoose'

export const ActionSchema = new Schema({
   
    type: {
        type: String,
        enum: ['Started', 'Stopped', 'Finished', 'Archived'],
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        // required: true
    }

},{ _id : false })