import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/ToDo/todoSlice";
import postReducer from "./features/Posts__/PostSlice";
import userReducer from "./features/users__/userSlice";
export const store = configureStore({
    reducer: {
        todo: todoReducer,
        addPost: postReducer,
        users: userReducer,
    },
});
