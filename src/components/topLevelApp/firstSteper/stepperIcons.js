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
import { theme } from "../../../theme/theme";

const QontoStepIconRoot = styled("div")(({  ownerState }) => ({
	color: theme.palette.primary.main ,
	display: "flex",
	height: 22,
	alignItems: "center",
	...(ownerState.active && {
		color: theme.palette.primary.main,
	}),
	"& .QontoStepIcon-completedIcon": {
		color: theme.palette.primary.main,
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

const ColorlibConnector = styled(StepConnector)(() => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled("div")(({  ownerState }) => ({
	backgroundColor: theme.palette.primary.main,
	zIndex: 1,
	color: theme.palette.primary.main,
	width: 50,
	height: 50,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
			backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
			backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
