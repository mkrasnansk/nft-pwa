import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const startSlice = createSlice({
	name: "start",
	initialState,
	reducers: {
		setcrement: (state) => {
			state.value = !state.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setcrement } = startSlice.actions;

export default startSlice.reducer;
