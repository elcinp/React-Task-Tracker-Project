import React,{useState} from 'react'
// import {initialState} from '../store/initialStates'
import Task from './Task'

export default function TaskList({tasks,onDelete,toggleDone}) {
    
    return (
        <div>
            {tasks.map((task )=>(
                <Task key={task.id} task={task} onDelete={onDelete} toggleDone={toggleDone}/>
            ))}
        </div>
    )
}

