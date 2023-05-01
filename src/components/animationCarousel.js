import { Box, Slider, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
export const AnimationCarousel = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [rotate, setRotate] = useState(0);

	const handleX = (event, newValue) => {
		setX(newValue);
	};
	const handleY = (event, newValue) => {
		setY(newValue);
	};
	const handleRotate = (event, newValue) => {
		setRotate(newValue);
	};

	return (
		<>
			<div className="example">
				<div>
					<motion.div
						style={{
							width: 200,
							height: 200,
							background: "black",
							borderRadius: 20,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						// spring transition
						animate={{
							x,
							y,
							rotate,
							transition: {
								duration: 2,
								type: "spring",
								bounce: 0.5,
							},
						}}
					/>
				</div>
				<div className="inputs">
					<Box sx={{ width: 200 }}>
						<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
							<Slider value={x} onChange={handleX} />
						</Stack>
						<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
							<Slider value={y} onChange={handleY} />
						</Stack>
						<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
							<Slider value={rotate} onChange={handleRotate} min={-180} max={180} />
						</Stack>
					</Box>
				</div>
			</div>
		</>
	);
};
