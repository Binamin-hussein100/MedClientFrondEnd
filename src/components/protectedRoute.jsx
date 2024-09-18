import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const checkAuth = async () => {
	try {
		const response = await fetch('http://localhost:3000/auth/checkAuth', {
			method: 'GET',
			credentials: 'include',
		});

		if (response.ok) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Error verifying auth:', error);
		return false;
	}
};

const ProtectedRoute = ({ element: Component, ...rest }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	useEffect(() => {
		const verifyAuth = async () => {
			const authStatus = await checkAuth();
			setIsAuthenticated(authStatus);
		};

		verifyAuth();
	}, []);

	if (isAuthenticated === null) {
		return <div>Loading...</div>;
	}

	return isAuthenticated ? (
		<Component {...rest} />
	) : (
		<Navigate to="/signin" />
	);
};

export default ProtectedRoute;
