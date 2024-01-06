import { NavLink } from 'react-router-dom'
import {v4 as uuid} from 'uuid';
import './SnackList.css'

const SnackList = ({snacks}) =>{
    return(
        <nav className='NavBar'>
            <h1>Welcome to the vending machine!</h1>
            <h3>Choose a snack:</h3>
            {/* create a NavLink for each snack in snacks and give it a unique key*/}
            {snacks.map(snack=>(
            <NavLink key={uuid()} exact to={`/${snack}`} snack={snack}>{snack}</NavLink>
            ))}
        </nav>
    )
}

export default SnackList;