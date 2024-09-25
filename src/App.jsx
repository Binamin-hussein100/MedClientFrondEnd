import './App.css';
import Welcome from './components/welcome';
import Navbar1 from './components/navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './components/Auth/signup';
import SignIn from './components/Auth/signin';
import NewOrder from './components/newOrder';
import OrdersList from './components/ClientDashboard/ordersList';
import EachOrder from './components/ClientDashboard/eachOrder';
import ProtectedRoute from './components/protectedRoute';
import ResetPassRequest from './components/Auth/requestPassReset';
import NewOrderSec from './components/newOrderSec';

function App() {
	const location = useLocation();

	const showNavbar =
		location.pathname === '/' ||
		location.pathname === '/signin' ||
		location.pathname === '/signup' ||
		location.pathname === '/newOrder';

	return (
		<>
			{showNavbar && <Navbar1 />}
			<div className="">
				<Routes>
					{/* Public routes */}
					<Route path="/" element={<Welcome />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/newOrder" element={<NewOrder />} />
					<Route path="/forgot_password" element={<ResetPassRequest />} />

					{/* Protected routes */}
					{/* <Route
						path="/orders"
						element={
							<ProtectedRoute>
								<OrdersList />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/order/:id"
						element={
							<ProtectedRoute>
								<EachOrder />
							</ProtectedRoute>
						}
					/> */}

					{/* Protected routes */}
					<Route
						path="/orders"
						element={<ProtectedRoute element={OrdersList} />}
					/>
					<Route
						path="/order/:id"
						element={<ProtectedRoute element={EachOrder} />}
					/>
					<Route
						path="/newSecOrder"
						element={<ProtectedRoute element={NewOrderSec} />}
					/>

					{/* Catch-all route */}
					<Route path="*" element={<div>404 Not Found</div>} />
				</Routes>
			</div>
		</>
	);
}

export default App;
