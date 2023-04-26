import { Grid } from "@mui/material";
import React from "react";
import { CarouselCollection } from "../../mediumComponents/carouselCollection";
import { HandWriteBg } from "../../mediumComponents/handWriteBg";

export const TopLayout = () => {
	return (
		<Grid
			justifyContent="center"
			container
			spacing={2}
			sx={{
				backgroundColor: "primary.dark",
			}}
		>
			<HandWriteBg />
			<CarouselCollection />
		</Grid>
	);
};
