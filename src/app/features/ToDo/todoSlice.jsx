import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [];
const taskReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        task: title,
                        done: false,
                    },
                };
            },
        },
        delTask: (state, action) => {
            return state.filter((el) => el.id !== action.payload.id);
        },
    },
});
export const { add, delTask } = taskReducer.actions;
export default taskReducer.reducer;
