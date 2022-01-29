import { createSlice } from "@reduxjs/toolkit";

const loginToggleSlice = createSlice({
    name: 'loginToggle',
    initialState: false,
    reducers: {
        toggle: (state, action) => {
            return state = action.payload;
        }
    }
})

export const { toggle } = loginToggleSlice.actions;
export default loginToggleSlice.reducer;