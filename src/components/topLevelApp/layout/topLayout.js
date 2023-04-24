import React from "react";
import { Container, Grid } from "@mui/material";

export const TopLayout = () => {
	return (
		<Container fixed>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div>xs=8</div>
				</Grid>
				<Grid item xs={4}>
					<div>xs=4</div>
				</Grid>
				<Grid item xs={4}>
					<div>xs=4</div>
				</Grid>
				<Grid item xs={8}>
					<div>xs=8</div>
				</Grid>
			</Grid>
		</Container>
	);
};
