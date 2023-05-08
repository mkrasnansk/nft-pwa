import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { theme } from "../../theme/theme";
import { CollectionDetail } from "../collection/collectionDetail";
import { FirstAppStepper } from "../firstSteper/firstAppStepper";
import { BackdropPreloader } from "../smallComponents/backdrop";
import { TopLayout } from "./topLayout";

export const LayoutRender = () => {
	const start = useSelector((state) => state.start.value);
	const detailCollection = useSelector((state) => state.detailCollection.value);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BackdropPreloader />
			
			{detailCollection ? <CollectionDetail /> : ""}
			{start ? <TopLayout /> : ""}
			{!detailCollection && !start ? <FirstAppStepper /> : ""}
		</ThemeProvider>
	);
};
