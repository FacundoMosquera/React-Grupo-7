import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import './TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({addTask}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openPopUp = () =>{
        setIsOpen(true)
    }


    const closePopUp = () => {
        setIsOpen(false)
    }

    const handleAddTask = (e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const newTask = {title, description, id: uuidv4(), submitedAt: new Date().toTimeString()}
        addTask(newTask)
        closePopUp()
    }
    
    return(
    <div>
        <button onClick={openPopUp}>New task <FaPlus /></button>
        {isOpen && (<div className='pop-up-background'>
            <div className='pop-up'>
                <h2>What's your new task?</h2>
                <form onSubmit={handleAddTask}>
                    <div className="input-container">
                        <label htmlFor="title"></label>
                        <input type="text" id='title' name='title' placeholder='task name'/>
                   </div>
                    <div className="input-container">
                        <label htmlFor="description">Add a description</label>
                        <textarea name="description" id='description'></textarea>
                    </div>
                    <div className='controls-form'>
                        <button role='button' type='button' onClick={closePopUp}>Cancel</button>
                        <button type='submit'>Add Task</button>
                    </div>
                    
                </form>
            </div>
        </div>)}
        
    </div>
    )
}

export default TaskForm