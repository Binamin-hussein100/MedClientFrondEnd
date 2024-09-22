import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { login } from '../redux/clientAuthSlice'; 
import { fetchUserData } from '../redux/clientAuthSlice'; 
import { Link } from 'react-router-dom';



const SignIn = () => {
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				'http://localhost:3000/auth/loginClient',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
					credentials: 'include',
				}
			);

			if (!response.ok) {
				throw new Error('Login failed. Please try again.');
			} else {
				const data = await response.json();
				console.log('response data:', data);

				dispatch(login({ 
					userId: data.client.id,
                    isLoggedIn: true
				}))

				dispatch(fetchUserData());

				navigate('/orders');

				setMessage(message);
			}
		} catch (error) {
			setMessage('Login failed. Please try again.');
			console.error(error);
		}
	};

	return (
		<div className="antialiased text-gray-900 font-sans">
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-32 pointer-events-none"
				aria-hidden="true"
			>
				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							x1="50%"
							y1="-10%"
							x2="50%"
							y2="100%"
							id="illustration-01"
						>
							<stop stopColor="#d8e1f0" offset="0%" />
							<stop stopColor="#bacfde" offset="77.402%" />
							<stop stopColor="#87CEEB" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1251" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>

			<div className="bg-white rounded-lg hover:border border-sky-400 shadow-md p-8 w-full mx-auto my-16 max-w-md">
				<h2 className="text-2xl font-semibold text-blue-600 mb-6">
					Sign In
				</h2>

				{message && <p>{message}</p>}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md text-gray-800"
							required
						/>
					</div>

					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-600">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md text-gray-800"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						Sign In
					</button>
				</form>
				<Link className="text-blue-700 text-center text-sm" to='/forgot_password'>
					Forgot password?
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
