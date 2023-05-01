import { Grid } from "@mui/material";
import React from "react";
import podpis from "../../../accessories/svg/podpis.svg";
import { CarouselCollection } from "../../mediumComponents/carouselCollection";
import { AnimationCarousel } from "../../animationCarousel";

export const TopLayout = () => {
	return (
		<Grid
			justifyContent="center"
			alignItems="center"
			container
			spacing={2}
			sx={{
				// background: "black",
				minHeight: "100vh",
			}}
		>
			{/* <AnimationCarousel /> */}
			<img src={podpis} alt="podpis" loading="lazy"  style={{
				position:'absolute',
				top:'20px',
				left:'0px'
			}} />
			<CarouselCollection />
		</Grid>
	);
};
