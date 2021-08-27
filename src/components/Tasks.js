import './App.css'
const Tasks = ({tasks, deleteTask ,reminderChange}) => {
    return (
        <div className = 'App-tasks'>
            {
            tasks.map((task)=>
            (
                <div className = {`${task.reminder?'App-task' :''}`} key = {task.id} onDoubleClick={()=>reminderChange(task.id)}>
                    <h3 >{task.text}</h3>                    
                    <p>{task.date}</p>
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
