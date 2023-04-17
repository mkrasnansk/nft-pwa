import { Button, Fab, Grid, Stack } from "@mui/material";
import React from "react";

export const SkipBtns = (props) => {
	const { changeActiveProp, active } = props;
	const changeActualStep = (count) => {
		if (count) {
			active < 2 ? changeActiveProp(active + 1) : changeActiveProp(active);
		} else {
			active > 0 ? changeActiveProp(active - 1) : changeActiveProp(active);
		}
	};

	return (
		<Grid container alignItems={"center"} spacing={2} justifyContent={"center"}>
			<Grid item>
				<Button variant="outlined" size="small" onClick={() => changeActualStep(false)}>
					Back
				</Button>
			</Grid>
			<Grid item>
				<Fab
					sx={{
						fontSize: "1.2rem",
						height: "4rem",
						width: "4rem",
					}}
					aria-label="skip"
				>
					Skip
				</Fab>
			</Grid>
			<Grid item>
				<Button variant="outlined" size="small" onClick={() => changeActualStep(true)} color="secondary">
					Next
				</Button>
			</Grid>
		</Grid>
	);
};
