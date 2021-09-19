import React from "react"
import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete,toggleDone}) => {
    return (
        <div className={`task ${task.isDone ? "done" : ""}`} onDoubleClick={()=> toggleDone(task.id)}>
            <h3>
                {task.text}
                <FaTimes onClick={()=> {
                    console.log(task.id)
                    onDelete(task.id)
                }}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
