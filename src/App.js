import Header from "./components/Header";

import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from "./components/AddTask";

function App()
{
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go Office',
      date: '15 March',
      reminder: true
    },
    {
      id: 3,
      text: 'Gym Workout',
      date: '22 June',
      reminder: false
    },
    {
      id: 2,
      text: 'Official Metting',
      date: '17 March',
      reminder: true
    }
  ])
  const addTask = (task) => {
    
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id , ...task} 
    setTasks([...tasks, newTask])
  }
  
  const [toggleTask, setToggleTask] = useState(true)
  
const deleteTask =(id)=>(
  setTasks(tasks.filter((task)=>task.id !== id))
  )
const reminderChange =(id)=>(
  setTasks(tasks.map((task)=>(task.id === id ?{...task, reminder : !task.reminder}:task)))
)
  return (
    <div>
      {toggleTask?<Header setToggleTask={setToggleTask}/>:''}
      
       <AddTask addTask ={addTask} />
    {tasks.length>0 ? <Tasks tasks ={tasks} deleteTask ={deleteTask} reminderChange ={reminderChange} /> :<h3>No Task To Show</h3>}

    </div>
  );
}

export default App;
