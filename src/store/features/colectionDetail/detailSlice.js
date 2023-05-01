import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const detailCollectionSlice = createSlice({
	name: "detailCollection",
	initialState,
	reducers: {
		showDetailCollection: (state) => {
			state.value = !state.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { showDetailCollection } = detailCollectionSlice.actions;

export default detailCollectionSlice.reducer;
