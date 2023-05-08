import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../theme/theme";
import { CollectionDetail } from "../collection/collectionDetail";
import { FirstAppStepper } from "../firstSteper/firstAppStepper";
import { BackdropPreloader } from "../smallComponents/backdrop";
import { TopLayout } from "./topLayout";
import { setSmall } from "../../store/features/mediaQuery/mediaQuerySmallSlice";

export const LayoutRender = () => {
	const dispatch = useDispatch();
	const start = useSelector((state) => state.start.value);
	const detailCollection = useSelector((state) => state.detailCollection.value);
	const smallMedia = useMediaQuery("(max-width:600px)");

	const handleSmallMedia = useCallback(
		(bools) => {
			dispatch(setSmall(bools));
		},
		[dispatch],
	);

	useEffect(() => {
		handleSmallMedia(smallMedia);
	}, [smallMedia, handleSmallMedia]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BackdropPreloader />
				<Container maxWidth="xl">
					{detailCollection ? <CollectionDetail /> : ""}
					{start ? <TopLayout /> : ""}
					{!detailCollection && !start ? <FirstAppStepper /> : ""}
				</Container>
			</ThemeProvider>
		</>
	);
};
