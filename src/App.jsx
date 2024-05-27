
import './App.css'
import Welcome from './components/welcome';
import Navbar1 from './components/navbar';


function App() {

  return (
    <>
    <Navbar1/>
     <div className="w-full border border-red-500">
        {/* <Dashboard/> */}
        <Welcome/>
       
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

