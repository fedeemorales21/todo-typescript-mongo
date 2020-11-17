import mongoose, { model, Schema } from 'mongoose'

export interface Task extends mongoose.Document {
    title: string
    description: string
    done: boolean
}

const taskSchema = new Schema({
    title: {
        type:String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    done:{
        type: Boolean,
        required: true,
        default: false
    }
    
})

export default model<Task>('Task',taskSchema)