import { Task } from "../documents/Task"
import { ObjectId } from 'mongodb'

const orderTasks = async (taskIds) => {
    console.log('orderTasks')
    taskIds.map(async (taskId, index) => {
        await Task.updateOne({ _id: new ObjectId(taskId) }, { order: index })
    })

    return 'Success'

}

export default orderTasks