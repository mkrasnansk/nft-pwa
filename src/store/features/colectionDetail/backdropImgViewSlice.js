import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
	source: null,
};

export const backdropImgViewSlice = createSlice({
	name: "backdropImgView",
	initialState,
	reducers: {
		viewImgWindowState: (state) => {
			state.value = !state.value;
		},
		viewImgWindow: (state, actions) => {
			state.value = !state.value;
			state.source = actions.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { viewImgWindow, viewImgWindowState } = backdropImgViewSlice.actions;

export default backdropImgViewSlice.reducer;
