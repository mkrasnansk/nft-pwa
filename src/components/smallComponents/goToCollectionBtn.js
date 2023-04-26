import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { useDispatch } from "react-redux";
import { visibleBackdrop } from "../../store/features/preloaders/backdropSlice";
import {motion} from "framer-motion";

export const GoToCollectionBtn = () => {
	const dispatch = useDispatch();
	return (
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
	);
};
