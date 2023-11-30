import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks, deleteTask, searchString, currentTasks}) => {
    return(
    <div>
        {tasks.lenght == 0 && <h2> You have no tasks </h2>}
        {tasks.lenght == 0 && searchString.lenght == '' && currentTasks.lenght == 0 
            && <h2>There's no match for that task</h2> }
 
            {currentTasks.map(task =>(
                <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
            ))}
    
    </div>)
}

export default TaskList