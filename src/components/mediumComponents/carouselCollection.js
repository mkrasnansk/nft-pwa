import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { GoToCollectionBtn } from "../smallComponents/goToCollectionBtn";
import { LeftArrowCarousel } from "../smallComponents/leftArrowCarousel";
import { RightArrowCarousel } from "../smallComponents/rightArrowCarousel";
import { ViewCarouselOption } from "../smallComponents/viewCarousel";

export const CarouselCollection = () => {
	return (
		<Grid container sx={{ justifyContent: "center", position: "relative", top: "-100px" }}>
			<LeftArrowCarousel />
			<ViewCarouselOption />
			<RightArrowCarousel />
		</Grid>
	);
};
