import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { theme } from "../../../theme/theme";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { visibleBackdrop } from "../../../store/features/preloaders/backdropSlice";

export const TopLayout = () => {
	const dispatch = useDispatch();
	return (
		<Grid
			justifyContent="center"
			container
			spacing={2}
			sx={{
				backgroundColor: "primary.dark",
			}}
		>
			<Grid
				item
				sm={12}
				sx={{
					height: "40vh",
					background: "black",
				}}
			>
				<Typography color="primary">zatiahovno</Typography>
			</Grid>
			<Grid
				item
				sm={8}
				sx={{
					position: "relative",
					top: "-100px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						"& > :not(style)": {
							m: 1,
							width: "100%",
							height: "80vh",
						},
					}}
				>
					<Paper elevation={3}>
						<Grid container justifyContent="center">
							<Grid
								item
								sx={{
									position: "relative",
									top: "-2rem",
								}}
							>
								<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
									<Box
										background="primary"
										sx={{
											p: "1rem",
											borderRadius: "1rem",
											background: theme.palette.primary.main,
											cursor: "pointer",
										}}
										onClick={() => dispatch(visibleBackdrop())}
									>
										<Typography autoFocus background="secondary" variant="h5">
											Go to collection
										</Typography>
									</Box>
								</motion.div>
							</Grid>
						</Grid>
					</Paper>
				</Box>
			</Grid>
		</Grid>
	);
};
