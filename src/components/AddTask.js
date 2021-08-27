import {useState} from 'react'

const AddTask = () => {
    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    const [reminder,setReminder] = useState('')

    return (
        

        <form >
            <div style = {{display:'flex'}}>
            <div style = {{display:'block' ,minHeight: '10vh'}}>
            <label><h3>Task:</h3></label>
            <input type = 'text'  placeholder = 'Enter Task' value ={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div style = {{display:'block' }}>
            <label><h3>Date & Time:</h3></label>
            <input type = 'text' placeholder = 'Enter Date & Time'
            value ={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            </div>
            <div style = {{display:'flex', alignItems: 'center'}}>
            <label><h3>Reminder:</h3></label>
            <input type = 'checkbox' value ={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            
            </div>
            <button  style ={{ backgroundColor:'black',color:'white',alignItems: 'center',justifyContent :'center',display:'block', alignItems: 'center', left:'2pt'}} 
        value ='Save Task'/>

                                       
        </form>
       
         
    )
}

export default AddTask
