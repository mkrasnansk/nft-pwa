import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { theme } from "../../theme/theme";
import { CollectionDetail } from "../collection/collectionDetail";
import { FirstAppStepper } from "../firstSteper/firstAppStepper";
import { BackdropPreloader } from "../smallComponents/backdrop";
import { TopLayout } from "./topLayout";
import { motion, useAnimationControls, useAnimationFrame } from "framer-motion";

export const LayoutRender = () => {
	const start = useSelector((state) => state.start.value);
	const detailCollection = useSelector((state) => state.detailCollection.value);

	const animation = useAnimationControls();

	useEffect(() => {
		if (detailCollection) {
			animation.start({ scale: 0 });
			setTimeout(() => {
				animation.start({ scale: 1 });
				animation.start({ opacity: 1 });
			}, 1000);
		}
	}, [detailCollection, animation]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BackdropPreloader />
			<motion.div animate={animation} initial={{ opacity: 0 }}>
				{detailCollection ? <CollectionDetail /> : ""}
			</motion.div>
			{start ? <TopLayout /> : <FirstAppStepper />}
		</ThemeProvider>
	);
};
