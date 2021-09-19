import React,{useState} from 'react'
// import {initialState} from '../store/initialStates'
import Task from './Task'

export default function TaskList({tasks,onDelete}) {
    
    return (
        <div>
            {tasks.map((task )=>(
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </div>
    )
}

