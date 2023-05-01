import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./features/start/startSlice";
import backdropReducer from './features/preloaders/backdropSlice'
import detailCollectionReducer from './features/colectionDetail/detailSlice'

export const store = configureStore({
	reducer: {
		detailCollection: detailCollectionReducer,
		start: startReducer,
        backdropView: backdropReducer,
	},
});
