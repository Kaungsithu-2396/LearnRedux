import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
const initialState = [];
const taskReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            const todo = {
                id: Date(),
                task: action.payload.title,
                done: false,
            };
            return [...state, todo];
        },
        delTask: (state, action) => {
            return state.filter((el) => el.id !== action.payload.id);
        },
    },
});
export const { add, delTask } = taskReducer.actions;
export default taskReducer.reducer;
