import {Link} from 'react-router-dom'

const Candy = ()=>{
    return(
        <div>
            <h1>Yay Candy!</h1>
            <Link
                exact
                to='/'
            >Pick Another Snack...</Link>
        </div>
    )
}

export default Candy;