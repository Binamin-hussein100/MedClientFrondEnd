
import './App.css'
import Welcome from './components/welcome';
import Navbar1 from './components/navbar';
import Footer from './components/footer';
import HowItWorks from './components/works';


function App() {

  return (
    <>
    <Navbar1/>
     <div className="w-full">
        {/* <Dashboard/> */}
        <Welcome/>
        <HowItWorks/>
        <Footer/>
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

