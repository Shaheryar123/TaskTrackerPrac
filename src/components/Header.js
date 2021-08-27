import './App.css'
import Button from "./Button";
const Header = ({toggleTask}) => {
    return (
        <header className = 'App-header'>
            <h1>
                TASK TRACKER APP</h1>
            <Button toggleTask={ toggleTask}/>
            
        </header>
    )
}

export default Header
