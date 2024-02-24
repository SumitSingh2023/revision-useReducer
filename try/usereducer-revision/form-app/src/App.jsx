import Navbar from './components/Navbar'
import { AllRoutes } from './components/AllRoutes'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='routepage'>
        <AllRoutes/>
      </div>
      
    </>
  )
}

export  {App}
