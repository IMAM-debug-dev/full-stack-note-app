import { configureStore, createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"",
    initialState: {user:"", isLoggedIn:false},
    reducers: ""
})

export const authAction = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,
})