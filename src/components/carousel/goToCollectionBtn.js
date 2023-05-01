import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { visibleBackdrop } from "../../store/features/preloaders/backdropSlice";
import { showDetailCollection } from "../../store/features/colectionDetail/detailSlice";
import { setcrement } from "../../store/features/start/startSlice";

export const GoToCollectionBtn = () => {
	const dispatch = useDispatch();

	const handleToCollection = () => {
		dispatch(visibleBackdrop());
		dispatch(setcrement());
		dispatch(showDetailCollection());
	};
	return (
		<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
			<Box
				background="primary"
				sx={{
					p: "1rem",
					borderRadius: "1rem",
					background: theme.palette.primary.main,
					cursor: "pointer",
					border: `1px solid ${theme.palette.secondary.mainTransparent}`,
				}}
				onClick={handleToCollection}
			>
				<Typography variant="h7">Go to collection</Typography>
			</Box>
		</motion.div>
	);
};
