import { Grid, Paper } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import { GoToCollectionBtn } from "./goToCollectionBtn";

export const ViewCarouselOption = (props) => {
	const state = props.statePosition
	const animation = useAnimationControls();

	useEffect(() => {
		if (state.center) animation.start({ scale: 1.2 });
	}, [animation, state]);

	async function sequence(posX = 0) {
		await animation.start({ x: posX });
		await animation.start({ scale: posX === 0 ? 1.2 : 1 });
	}
	const handleX = () => {
		if (props.center) return;
		props.seterPosition(state.actual, state.keyIdx, state.position);
		sequence();
	};
	return (
		<motion.div
			style={{
				position: "absolute",
				width: "40vw",
				height: "auto",
				borderRadius: 30,
				cursor: "pointer",
				x: state.changed ? sequence(state.position) : state.position,
				zIndex: props.center ? 1100 : 1000,
			}}
			onTap={handleX}
			animate={animation}
		>
			<Paper
				elevation={3}
				sx={{
					cursor: !props.center ? "pointer" : "",
				}}
			>
				<Grid container justifyContent="center" alignItems="center">
					<Grid
						item
						sx={{
							position: "relative",
							width: "100%",
							top: "-2rem",
						}}
					>
						<div
							style={{
								position: "absolute",
								display: "flex",
								justifyContent: "center",
								width: "100%",
							}}
						>
							{state.center ? <GoToCollectionBtn /> : ""}
						</div>
					</Grid>
					<Grid justifyContent="center" alignItems="center" item>
						<img
							src={state.imgSrc}
							alt=""
							style={{
								maxWidth: "100%",
								maxHeight: 500,
								padding: "3rem",
							}}
						/>
					</Grid>
				</Grid>
			</Paper>
		</motion.div>
	);
};
