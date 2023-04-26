import { Grid, Paper } from "@mui/material";
import React from "react";

export const RightArrowCarousel = () => {
	return (
		<Grid
			item
			sm={2}
			sx={{
				alignItems: "center",
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width: "100%",
					height: "40vh",
				},
			}}
		>
			<Paper
				elevation={3}
				sx={{
					position: "relative",
					right: "2rem",
				}}
			></Paper>
		</Grid>
	);
};
