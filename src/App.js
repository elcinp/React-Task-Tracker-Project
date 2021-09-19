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
    const id = Date.now()
    // console.log(id) uniqueID olusturduk
    const newTask = {id,...task}
    setTasks((prevState)=> [...prevState,newTask ])
  }


  //Delete a task
  const onDelete = (deletedItemID) => {
    setTasks(tasks.filter((task)=> task.id !== deletedItemID))
    console.log(deletedItemID)
  }

  //Toggle Done

  //Toggle Show and Hide

  return (
    <div className="container">
      <Header title={"Task Tracker"}/>
      <CreateTask/>
      <TaskList tasks={tasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
