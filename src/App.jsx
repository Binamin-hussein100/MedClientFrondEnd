import './App.css';
import Welcome from './components/welcome';
import Navbar1 from './components/navbar';
import { Routes, Route,useLocation } from 'react-router-dom';
import SignUp from './components/subComponent/signup';
import SignIn from './components/subComponent/signin';
import NewOrder from './components/newOrder';
import OrdersList from './components/ClientDashboard/ordersList';
import EachOrder from './components/ClientDashboard/eachOrder';

function App() {
  const location = useLocation();

  const showNavbar = location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup'  || location.pathname === '/newOrder';


  return (
    <>
      {showNavbar && <Navbar1 />}
      <div className="">
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/newOrder' element={<NewOrder />} />
          <Route path='/orders' element={<OrdersList />} />
          <Route path='/order/:id' element={<EachOrder/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;


