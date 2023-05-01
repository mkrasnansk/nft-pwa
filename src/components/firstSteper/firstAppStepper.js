import React, { useCallback, useState } from "react";
import { Grid } from "@mui/material";
import { SwitchPage } from "./switchPage";
import { SkipBtns } from "./skipBtns";
import { StepperIcons } from "./stepperIcons";

export const FirstAppStepper = () => {
	const [activeStep, setActiveStep] = useState(0);
	const changeActive = useCallback((cb) => {
		setActiveStep(cb);
	}, []);

	return (
		<Grid container spacing={2} justifyContent={"center"}>
			<Grid item xs={12} lg={8}>
				<SwitchPage step={activeStep} />
			</Grid>
			<Grid item xs={12} lg={8}>
				<SkipBtns changeActiveProp={changeActive} active={activeStep} />
			</Grid>
			<Grid item xs={12} lg={8}>
				<StepperIcons active={activeStep} />
			</Grid>
		</Grid>
	);
};
