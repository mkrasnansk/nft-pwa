import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: true,
};

export const backdropSlice = createSlice({
	name: "backdropView",
	initialState,
	reducers: {
		visibleBackdrop: (state) => {
			state.value = !state.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { visibleBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer;
