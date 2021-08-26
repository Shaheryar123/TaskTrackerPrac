import './App.css'
const Tasks = ({tasks, deleteTask ,reminderChange}) => {
    return (
        <div className = 'App-tasks'>
            {
            tasks.map((task)=>
            (
                <div className = 'App-task' key = {task.id} onDoubleClick={reminderChange}>
                    <h3 >{task.des}</h3>                    
                    <p>{task.time}</p>
                   <div style = {{display:'flex', alignItems: 'center'}}>
                    <p>Remove Task:</p>
                    <input  type ='checkBox' style ={{cursor : 'pointer' }} onChange= {()=>deleteTask(task.id)} />
                    </div>
                    </div>
                    )) 
                }
        </div>
    )
}

export default Tasks
