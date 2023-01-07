import {configureStore} from "@reduxjs/toolkit";
import UserApi from "./App";
const store=configureStore({
    reducer:{
        [UserApi.reducerPath]:UserApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(UserApi.middleware)
})

export default store

