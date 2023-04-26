import { Grid, Paper } from "@mui/material";
import React from "react";
import { GoToCollectionBtn } from "./goToCollectionBtn";
import collection1 from "../../accessories/images/collection1.png";

export const ViewCarouselOption = () => {
	return (
		<Grid
			item
			sm={6}
			sx={{
				zIndex: 1100,
			}}
		>
			<Paper
				elevation={3}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					"& > :not(style)": {
						m: 1,
						width: "100%",
						height: "80vh",
					},
				}}
			>
				<Grid container justifyContent="center">
					<Grid
						item
						sx={{
							position: "relative",
							top: "-2rem",
						}}
					>
						<GoToCollectionBtn />
					</Grid>
					<Grid
						justifyContent="center"
						item
						sx={{
							position: "relative",
							top: "-2rem",
						}}
					>
						<img
							src={collection1}
							alt=""
							style={{
								width: "100%",
								padding: "3rem",
							}}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};
