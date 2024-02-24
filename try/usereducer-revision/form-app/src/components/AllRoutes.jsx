
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import {Routes,Route} from 'react-router-dom'

function AllRoutes(){

    return (
        <div className="mainPage">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            
        </div>
    )
}

export {AllRoutes}