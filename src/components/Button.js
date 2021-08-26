import './App.css'
const Button = () => {
    return (
        <div className ='App-header'>
        <button className = 'App-button' onClick ={console.log('Clicked')}>ADD TASK</button>
        </div>
    )
}

export default Button
