import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    // Function to validate the token
    const validateToken = (token) => {
        try {
            const decodedToken = jwtDecode(token); // Decode the token
            const currentTime = Date.now() / 1000; // Current time in seconds

            if (decodedToken.exp && decodedToken.exp > currentTime) {
                setUserId(decodedToken.id); 
                setIsLoggedIn(true);        
            } else {
                logout(); 
            }
        } catch (error) {
            console.error("Invalid token:", error);
            logout(); 
        }
    };

    
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            console.log(token, "token from context")
            validateToken(token); // Validate the token when app loads
        }
        else{
            console.log("No token found")
        }
    }, []);

    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        Cookies.remove('token'); // Remove token from cookies
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
