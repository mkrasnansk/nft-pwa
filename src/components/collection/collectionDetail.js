import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { MenuButton } from "../smallComponents/menuButton";
import { CardCollection } from "./cardCollection";
export const CollectionDetail = (props) => {
	const arrImg = useSelector((state) => state.arrImg.value);
	const small = useSelector((state) => state.small.value);

	return (
		<>
			<Grid container justifyContent="center" spacing={2} padding={5}>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Typography variant={small ? "h4" : "h1"}>Loving lions</Typography>
				</Grid>
				<Grid
					xs={12}
					item
					sx={{
						position: "absolute",
						right: '5%'
					}}
				>
					<MenuButton />
				</Grid>
			</Grid>
			<Grid
				container
				justifyContent="center"
				spacing={2}
				padding={small ? 1 : 5}
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
