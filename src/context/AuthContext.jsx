import { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, fetchUserData } from '../components/redux/clientAuthSlice'; // Import your actions

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const userId = useSelector((state) => state.auth.userId);
	const user = useSelector((state) => state.auth.user);

	// Fetch user data when the component mounts
	useEffect(() => {
		if (isLoggedIn) {
			dispatch(fetchUserData()); // Dispatch action to fetch user data
		}
	}, [isLoggedIn, dispatch]);

	const handleLogout = () => {
		dispatch(logout()); // Dispatch the logout action
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				handleLogout,
				userId,
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
