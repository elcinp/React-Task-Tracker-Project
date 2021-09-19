import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Header from './components/Header'
import TaskList from './components/TaskList';
import { initialState } from "./store/initialStates"



function App() {
  const [tasks,setTasks] = useState(initialState)

  //Create a task 
  const onCreate = (task) => {
    const id = Date.now() // console.log(id) uniqueID olusturduk
    const newTask = {id,...task} // newTask şeklinde bir object tanımladık.initialState objectlerden olusuyor
    setTasks((prevState)=> [...prevState,newTask ])
  }


  //Delete a task
  const onDelete = (deletedItemID) => {
    setTasks(tasks.filter((task)=> task.id !== deletedItemID))
    console.log(deletedItemID)
  }

  //Toggle Done
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task)=> 
        task.id === id ? { ...task,isDone:!task.isDone} : task
      )
    )
  }

  //Toggle Show and Hide

  return (
    <div className="container">
      <Header title={"Task Tracker"}/>
      <CreateTask onCreate={onCreate}/>
      { tasks.length >0 ? (
          <TaskList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone}/>
        ): (
          <p>No task to show</p>
        )}
    </div>
  );
}

export default App;
