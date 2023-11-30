import React, {useEffect, useState} from 'react'
import TaskList from './Componentes/TaskList/TaskList'
import TaskForm from './Componentes/TaskForm/TaskForm'


function App() {
  const [tasks, setTasks] = useState([])
  const [searchString, setSearchString] = useState('')
  const [currentTasks, setCurrentTask] = useState([])
  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const handleFilterChange = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    setCurrentTask(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
  },[searchString, tasks])

  return (
    <>
    <input placeholder='Search task' value={searchString} onChange={handleFilterChange}/>
    <TaskForm addTask={addTask}/>
    <TaskList currentTasks={currentTasks} tasks={tasks} searchString={searchString} deleteTask={deleteTask}/>
    </>
  )
}

export default App
