import { Task } from "../documents/Task"
import { ObjectId } from 'mongodb'

const finishTask = async (taskId, userId) => {

    await Task.updateMany({}, { selected: false })
    await Task.updateOne(
        { _id: new ObjectId(taskId), userId: ObjectId(userId) }, 
        { $push: { actions: { type: 'Finished', date: Date.now() } } },
        { runValidators: true }
    )

    const tasks = await Task.find({ 'actions.type': { $nin: ['Finished', 'Archived'] } }).sort({ order: 1 })
    const selectedTask = await Task.findOne({ selected: true })

    return { list: tasks, selected: selectedTask }

}

export default finishTask