
import './App.css'
// import Dashboard from './components/navbar'
// import Notification from './components/notification'
import OrdersList from './components/ordersList'
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Footer from './components/footer';



function App() {

  return (
    <>
     <div className="flex  justify-between ">
        {/* <Dashboard/> */}
        <div className=' w-11/12'>
          <Routes>
              <Route path='/' element={<Welcome/>}/>
              <Route path='orders' element={<OrdersList/>}/>
              {/* <Route path='notification' element={<Notification/>}/> */}
              {/* <Route path='notification'/> */}

          </Routes>
          <Footer/>
        </div>
        
        
     </div>
     
      
    </>
  )
}

export default App
