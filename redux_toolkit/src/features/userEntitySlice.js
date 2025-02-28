import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

// Create entity adapter
const userAdapter = createEntityAdapter({
    selectId: (user) => user.id,
});

// Initial state
const initialState = userAdapter.getInitialState({
    loading: false,
    error: null,
});

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

// Create slice
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: userAdapter.addOne,
        updateUser: userAdapter.updateOne,
        deleteUser: userAdapter.removeOne,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                userAdapter.setAll(state, action.payload);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export const { selectAll: selectAllUsers } = userAdapter.getSelectors((state) => state.usersEntity);
export default userSlice.reducer;