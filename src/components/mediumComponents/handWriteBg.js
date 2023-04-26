import React from "react";
import { Grid } from "@mui/material";
import podpis from "../../accessories/svg/podpis.svg";

export const HandWriteBg = () => {
	return (
		<Grid
			item
			sm={12}
			sx={{
				height: "40vh",
				background: "black",
				overflow: "hidden",
			}}
		>
			<img src={podpis} alt="podpis" loading="lazy" />
		</Grid>
	);
};
