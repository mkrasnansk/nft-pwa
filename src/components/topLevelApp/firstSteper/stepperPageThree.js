import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";


export const StepperPageThree = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
			<Typography variant="h1">Three</Typography>
			<Typography>Get the original!</Typography>
		</motion.div>
	);
};
