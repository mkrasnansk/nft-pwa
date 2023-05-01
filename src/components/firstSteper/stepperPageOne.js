import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export const StepperPageOne = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3}}>
			<Typography variant="h1">StepperPageOne</Typography>
			<Typography>Buy NFT</Typography>
		</motion.div>
	);
};
