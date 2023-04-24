import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./features/start/startSlice";

export const store = configureStore({
	reducer: {
		start: startReducer,
	},
});
