import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null,
    users: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const currUser = state.users.findIndex(user => user.email === action.payload.email)
            if (currUser === -1) {
                return
            }
            state.status = true;
            state.userData = action.payload;
            localStorage.setItem("user", JSON.stringify(state.users[currUser]))
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            const user = localStorage.getItem('user')
            const savedUser = JSON.parse(user)
            state.users = state.users.filter(curr => curr.email !== savedUser.email)
            localStorage.removeItem('user')
        },
        signup: (state, action) => {
            state.status = false
            state.users.push(action.payload)
            localStorage.setItem("users", JSON.stringify(state.users))
        },
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
});

export const { login, logout, signup, setUsers } = authSlice.actions;

export default authSlice.reducer;
