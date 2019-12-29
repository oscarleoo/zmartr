import { Task } from "../documents/Task"
import { ObjectId } from "mongodb"

const getTasks = async (userId) => {

    const tasks = await Task.find({ userId: ObjectId(userId), 'actions.type': { $nin: ['Finished', 'Archived'] } })
    const selectedTask = await Task.findOne({ selected: true })

    return { list: tasks, selected: selectedTask }

}

export default getTasks