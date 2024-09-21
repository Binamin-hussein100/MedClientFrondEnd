import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [userId, setUserId] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/api/client/getClient', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setUser(data.client);
				setUserId(data.client.id);
			});
	}, [user]);

	const logout = () => {
		setIsLoggedIn(false);
		setUserId(null);
		Cookies.remove('token'); 
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				logout,
				userId,
				setUserId,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
