import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async () => {
    const response = await fetch('http://localhost:3000/api/client/getClient', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	});
	return await response.json();
})

const authSlice = createSlice({
    name:'auth',
    initialState: {
        isLoggedIn: false,
        userId: null,
        user: null
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
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.userId = action.payload.client.id;

            })
           .addCase(fetchUserData.rejected, (state, action) => {
                console.error('Error fetching user data:', action.error);
            })
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer