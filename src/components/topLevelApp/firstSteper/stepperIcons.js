import React from "react";
import Check from "@mui/icons-material/Check";
import ImageIcon from "@mui/icons-material/Image";
import PaidIcon from "@mui/icons-material/Paid";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Step from "@mui/material/Step";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
	display: "flex",
	height: 22,
	alignItems: "center",
	...(ownerState.active && {
		color: "#784af4",
	}),
	"& .QontoStepIcon-completedIcon": {
		color: "#784af4",
		zIndex: 1,
		fontSize: 18,
	},
	"& .QontoStepIcon-circle": {
		width: 8,
		height: 8,
		borderRadius: "50%",
		backgroundColor: "currentColor",
	},
}));

function QontoStepIcon(props) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
		</QontoStepIconRoot>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage: "linear-gradient(to bottom, #cccccc, #b2b4b8, #959da3, #77888c, #5d7371, #507068, #466d5c, #42694d, #41774e, #40854d, #41924b, #43a047)",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage: "linear-gradient(to bottom, #cccccc, #b2b4b8, #959da3, #77888c, #5d7371, #507068, #466d5c, #42694d, #41774e, #40854d, #41924b, #43a047)",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 50,
	height: 50,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
		backgroundImage: "linear-gradient(to bottom, #cccccc, #b2b4b8, #959da3, #77888c, #5d7371, #507068, #466d5c, #42694d, #41774e, #40854d, #41924b, #43a047)",
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		backgroundImage: "linear-gradient(to bottom, #cccccc, #b2b4b8, #959da3, #77888c, #5d7371, #507068, #466d5c, #42694d, #41774e, #40854d, #41924b, #43a047)",
	}),
}));

function ColorlibStepIcon(props) {
	const { active, completed, className } = props;

	const icons = {
		1: <VpnKeyIcon />,
		2: <PaidIcon />,
		3: <ImageIcon />,
	};

	return (
		<ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const steps = ["Buy NFT", "Log in", "Get the original!"];
export const StepperIcons = ({ active }) => {
	return (
		<Stepper alternativeLabel activeStep={active} connector={<ColorlibConnector />}>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};
