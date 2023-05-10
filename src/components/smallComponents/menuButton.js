import React from "react";
import { motion } from "framer-motion";
import { Fab } from "@mui/material";

// body {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 100vh;
//     background: #222222;
//   }

//   circle,
//   rect,
//   line {
//     stroke-width: 10px;
//     stroke-linecap: round;
//     fill: transparent;
//   }

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i) => {
		const delay = 1 + i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

export const MenuButton = () => {
	return (
		<motion.div initial={{ scale: .2}} animate={{ scale: 1 }} transition={{ type: "ease", stiffness: 100, duration: 5, }}>
			<Fab
				sx={{
					fontSize: "1.2rem",
					height: "auto",
					width: "auto",
					background: "none",
				}}
				aria-label="skip"
			>
				<motion.svg width="80" height="80" viewBox="0 0 200 200" initial="hidden" animate="visible">
					<motion.circle cx="100" cy="100" r="80" stroke="#b078a6" strokeWidth={10} fill="none" variants={draw} custom={1} />
					<motion.line x1="50" y1="45" x2="100" y2="150" stroke="#b078a6" strokeWidth={10} custom={3.5} variants={draw} />
					<motion.line x1="160" y1="145" x2="90" y2="45" stroke="#b078a6" strokeWidth={10} custom={3.5} variants={draw} />
				</motion.svg>
			</Fab>
		</motion.div>
	);
};
