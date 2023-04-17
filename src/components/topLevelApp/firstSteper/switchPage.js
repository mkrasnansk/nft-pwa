import React from "react";
import { Card, CardContent } from "@mui/material";
import { StepperPageOne } from "./stepperPageOne";
import { StepperPageThree } from "./stepperPageThree";
import { StepperPageTwo } from "./stepperPageTwo";

export const SwitchPage = (props) => {
	const changePage = () => {
		switch (props.step) {
			case 0:
				return <StepperPageOne />;
			case 1:
				return <StepperPageTwo />;
			case 2:
				return <StepperPageThree />;
			default:
				return <StepperPageOne />;
		}
	};
	return (
		<Card
			sx={{
				mt: 10,
				display: "flex",
				minHeight: "60vh",
				width: 1,
			}}
		>
			<CardContent>{changePage()} </CardContent>
		</Card>
	);
};
