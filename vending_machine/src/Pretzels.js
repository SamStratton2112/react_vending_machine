import {Link} from 'react-router-dom'

const Pretzels = ()=>{
    return(
        <div>
            <h1>Yay Pretzels!</h1>
            <Link
                exact
                to='/'
            >Pick Another Snack...</Link>
        </div>
    )
}

export default Pretzels;