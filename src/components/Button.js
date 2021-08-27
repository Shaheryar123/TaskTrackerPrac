import './App.css'
import {useState} from 'react'

const Button = ({setToggleTask}) =>
{
    
    return (
        <div className ='App-header'>
            <button className='App-button'
            //    onClick={setToggleTask(false)}
            >ADD TASK</button>
        </div>
    )
}

export default Button
