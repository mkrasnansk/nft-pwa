import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./features/start/startSlice";
import backdropReducer from './features/preloaders/backdropSlice'

export const store = configureStore({
	reducer: {
		start: startReducer,
        backdropView: backdropReducer,
	},
});
