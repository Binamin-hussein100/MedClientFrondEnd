import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch user data (already implemented)
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async () => {
    const response = await fetch('http://localhost:3000/api/client/getClient', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',  // Sends cookies with the request
    });
    return await response.json();
});

// Sign-up new user
export const signUp = createAsyncThunk('auth/signUp', async (userData) => {
    const response = await fetch('http://localhost:3000/auth/registerClient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),  // Send user data (e.g., email, password, etc.)
        credentials: 'include',  // Sends cookies with the request
    });
    
    if (!response.ok) {
        throw new Error('Sign up failed');
    }
    console.log("User success")
    return await response.json();  // Assuming server sends back user info after sign-up
});

// Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userId: null,
        user: null,
        signUpStatus: 'idle',  // New state to track the status of the sign-up process
        signUpError: null      // New state to store sign-up error (if any)
    },
    reducers: {
        login(state, action) {
            state.userId = action.payload.userId;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userId = null;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch user data fulfilled
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.user = action.payload;
            state.userId = action.payload.client.id;
        });
        
        // Fetch user data rejected
        builder.addCase(fetchUserData.rejected, (state, action) => {
            console.error('Error fetching user data:', action.error);
        });

        // Sign-up pending
        builder.addCase(signUp.pending, (state) => {
            state.signUpStatus = 'loading';
            state.signUpError = null;
        });

        // Sign-up fulfilled
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload;  // Store the user data returned from the sign-up response
            state.userId = action.payload.client.id;  // Assuming the server returns the user data
            state.isLoggedIn = true;
            state.signUpStatus = 'succeeded';
        });

        // Sign-up rejected
        builder.addCase(signUp.rejected, (state, action) => {
            state.signUpStatus = 'failed';
            state.signUpError = action.error.message;
        });
    }
});

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
