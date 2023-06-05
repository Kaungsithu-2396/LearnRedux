import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: "Ko Kaung Gyee", level: "staff" },
    { id: 2, name: "Ko Mg Hla", level: "staff" },
    { id: 3, name: "Ma Myint", level: "staff" },
    { id: 4, name: "Ma Aung", level: "staff" },
];
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});
export default userSlice.reducer;
