import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import {useState} from 'react';

function App() {
  const [tasks,setTasks] = useState([
    {
        id :1,
        des : 'Go Office',
        time : '15 March',
        reminder : true
    },
    {
        id: 3,
        des : 'Gym Workout',
        time : '22 June',
        reminder : true
    },
    {
        id: 2,
        des : 'Official Metting',
        time : '17 March',
        reminder : true
    }
])
const deleteTask =(id)=>(
  setTasks(tasks.filter((task)=>task.id !== id))
  )
const reminderChange =(id)=>(
  console.log('reminder')
)
  return (
    <div>
       <Header />
       <Button />
    {tasks.length>0 ? <Tasks tasks ={tasks} deleteTask ={deleteTask} reminderChange ={reminderChange} /> :<h3>No Task To Show</h3>}

    </div>
  );
}

export default App;
