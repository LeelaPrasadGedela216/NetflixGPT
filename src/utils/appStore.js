import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const apppStore=configureStore(
    {
        reducer:{
            user:userReducer
        },
    },
);
export default apppStore;