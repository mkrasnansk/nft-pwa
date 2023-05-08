import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CardCollection } from "./cardCollection";
export const CollectionDetail = (props) => {
	const arrImg = useSelector((state) => state.arrImg.value);
	return (
		<>
			<Grid container justifyContent="center" spacing={2} padding={5}>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Typography variant="h1">Collection Detail</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent="center"
				spacing={2}
				padding={5}
				sx={{
					width: "100%",
				}}
			>
				{arrImg.map((item, keyIdx) => {
					return (
						<Grid item key={keyIdx} justifyContent="center" xs={12} md={6} xl={3}>
							<CardCollection data={{ ...item, keyIdx, len: arrImg.length }} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};
