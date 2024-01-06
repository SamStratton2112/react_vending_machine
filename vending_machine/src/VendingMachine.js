import SnackList from './SnackList';
import {
    BrowserRouter as Router,
    Routes,
    Route
    } from 'react-router-dom';
import Candy from './Candy';
import Chips from './Chips';
import Pretzels from './Pretzels'

const VendingMachine = () =>{
    const snacks = ['Candy', 'Chips', 'Pretzels']
    return(
        <Router>
            <div className='VendingMachine'>
                <Routes>
                    {/* populate links */}
                    <Route
                        exact
                        path="/"
                        element={<SnackList snacks={snacks}/>}
                    ></Route>
                    {/* establish links with correct components to be rendered */}
                    <Route
                        exact
                        path='/Candy'
                        element={<Candy/>}
                    ></Route>
                    <Route
                        exact
                        path='/Chips'
                        element={<Chips/>}
                    ></Route>
                    <Route
                        exact
                        path='/Pretzels'
                        element={<Pretzels/>}
                    ></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default VendingMachine;