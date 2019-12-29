import { Task } from "../documents/Task"
import { ObjectId } from 'mongodb'

const startTask = async (taskId, userId) => {

    await Task.updateMany({}, { selected: false })
    await Task.updateOne(
        { _id: new ObjectId(taskId), userId: ObjectId(userId) },
        { selected: true, $push: { actions: { type: 'Started', date: Date.now() } } },
        { runValidators: true }
    )

    const tasks = await Task.find({ 'actions.type': { $nin: ['Finished', 'Archived'] } }).sort({ order: 1 })
    const selectedTask = await Task.findOne({ selected: true })

    return { list: tasks, selected: selectedTask }

}

export default startTask