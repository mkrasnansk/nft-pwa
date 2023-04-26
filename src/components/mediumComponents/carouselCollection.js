import { Grid } from "@mui/material";
import React from "react";
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
