import { Task } from "../documents/Task"
import { ObjectId } from "mongodb"

const createTask = async (newTask, userId) => {


    const tasks = await Task.find({ 'actions.type': { $nin: ['Finished', 'Archived'] } }).sort({ order: 1 })
    
    let order = 0
    if (tasks.length > 0) {
      order = tasks[tasks.length -1].order + 1
    }
    
    const task = await new Task({ title: newTask, created: Date.now(), order, userId: ObjectId(userId) }).save()
    tasks.push(task)
    
    const selectedTask = await Task.findOne({ selected: true })

    return { list: tasks, selected: selectedTask }

}

export default createTask