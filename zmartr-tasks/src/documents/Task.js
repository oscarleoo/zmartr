import mongoose, { Schema } from 'mongoose'
import { ActionSchema } from './ActionSchema'

export const Task = mongoose.model('Task', new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },

    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },

    created: {
        type: Date,
        required: true
    },

    selected: {
        type: Boolean,
        default: false
    },

    order: {
        type: Number,
    },

    actions: {
        type: [ActionSchema],
        default: []
    }

}))