import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, title: "Post 1", text: "blah blah" },
    { id: 2, title: "Post 2", text: "blah blah" },
    { id: 3, title: "Post 3", text: "blah blah" },
    { id: 4, title: "Post 4", text: "blah blah" },
];
const postSlice = createSlice({
    name: "Posts",
    initialState,
    reducers: {
        postAdd: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare(title, text, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        text,
                        userId,
                    },
                };
            },
        },
    },
});
export const { postAdd } = postSlice.actions;
export default postSlice.reducer;
