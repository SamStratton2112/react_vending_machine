import {Link} from 'react-router-dom';

const Chips= ()=>{
    return(
        <div>
            <h1>Yay Chips!</h1>
            <Link
                exact
                to='/'
            >Pick Another Snack...</Link>
        </div>
    )
}

export default Chips;