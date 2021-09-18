import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import { initialState } from "./store/initialStates"


function App() {
  const [tasks,setTasks] = useState(initialState)

  //Create a task 

  //Delete a task
  const onDelete = (deletedItemID) => {
    setTasks(tasks.filter((task)=> task.id !== deletedItemID))
  }

  //Toggle Done

  //Toggle Show and Hide

  return (
    <div className="container">
      <Header title={"Task Tracker"}/>
      <Tasks tasks={tasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
