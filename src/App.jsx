
import './App.css'
import Welcome from './components/welcome';
import Navbar1 from './components/navbar';
import {  Routes, Route } from 'react-router-dom';
import SignUp from './components/subComponent/signup';
import SignIn from './components/subComponent/signin';
import NewOrder from './components/newOrder';



function App() {

  return (
    <>
      <Navbar1/>
        <div className="w-full">
            
            <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/newOrder' element={<NewOrder/>}/>
            </Routes>
        </div> 
    </>
  )
}

export default App

{/* <div className=''>
<Routes>
    <Route path='/' element={<Welcome/>}/>
    <Route path='orders' element={<OrdersList/>}/>
    {/* <Route path='notification' element={<Notification/>}/> */}
    {/* <Route path='notification'/> */}

// </Routes>
// <Footer/>
// </div> */}

