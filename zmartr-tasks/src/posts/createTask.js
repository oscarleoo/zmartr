import { Task } from "../documents/Task"

const createTask = async (newTask) => {


    const tasks = await Task.find({ 'actions.type': { $nin: ['Finished', 'Archived'] } }).sort({ order: 1 })
    const order = tasks[tasks.length -1].order + 1
    const task = await new Task({ title: newTask, created: Date.now(), order }).save()
    tasks.push(task)
    
    const selectedTask = await Task.findOne({ selected: true })

    return { list: tasks, selected: selectedTask }

}

export default createTask