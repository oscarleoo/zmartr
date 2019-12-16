import { Task } from "../documents/Task"

const getTasks = async () => {

    const tasks = await Task.find({ 'actions.type': { $nin: ['Finished', 'Archived'] } })
    const selectedTask = await Task.findOne({ selected: true })

    return { list: tasks, selected: selectedTask }

}

export default getTasks