import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: window.innerWidth < 600,
};

export const mediaQuerySmallSlice = createSlice({
	name: "small",
	initialState,
	reducers: {
		setSmall: (state, actions) => {
			state.value = actions.payload
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSmall } = mediaQuerySmallSlice.actions;

export default mediaQuerySmallSlice.reducer;
