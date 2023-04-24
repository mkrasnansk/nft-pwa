import { Fab, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { setcrement } from "../../../store/features/start/startSlice";

export const SkipBtns = (props) => {
	const dispatch = useDispatch();

	const { changeActiveProp, active } = props;
	const changeActualStep = (count) => {
		if (count) {
			if (active === 2) dispatch(setcrement());
			active < 2 ? changeActiveProp(active + 1) : changeActiveProp(active);
		} else {
			active > 0 ? changeActiveProp(active - 1) : changeActiveProp(active);
		}
	};

	return (
		<Grid container alignItems={"center"} spacing={2} justifyContent={"center"}>
			<Grid item>
				<motion.button style={{ border: "none", background: "none" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Fab
						sx={{
							fontSize: ".8rem",
							height: "3rem",
							width: "3rem",
						}}
						aria-label="skip"
						color="primary"
						onClick={() => changeActualStep(false)}
					>
						Back
					</Fab>
				</motion.button>
			</Grid>
			<Grid item>
				<motion.button style={{ border: "none", background: "none" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Fab
						sx={{
							fontSize: "1.2rem",
							height: "4rem",
							width: "4rem",
						}}
						aria-label="skip"
						onClick={() => dispatch(setcrement())}
					>
						Skip
					</Fab>
				</motion.button>
			</Grid>
			<Grid item>
				<motion.button style={{ border: "none", background: "none" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Fab
						sx={{
							fontSize: ".8rem",
							height: "3rem",
							width: "3rem",
						}}
						aria-label="skip"
						onClick={() => changeActualStep(true)}
						color="secondary"
					>
						Next
					</Fab>
				</motion.button>
			</Grid>
		</Grid>
	);
};
