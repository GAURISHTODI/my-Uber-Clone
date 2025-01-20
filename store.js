import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice'

//Learned from here: For Redux: details of how it is happening: https://chatgpt.com/share/6787a591-a9cc-8010-8220-8c7a8db89e71
export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
