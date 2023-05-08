import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { visibleBackdrop } from "../../store/features/preloaders/backdropSlice";
import { CardIcons } from "../smallComponents/cardIcons";

export const CardCollection = (props) => {
	const { keyIdx, item, len, title } = props.data;
	const dispatch = useDispatch();
	const [loadedSrc, setLoadedSrc] = useState(null);

	const handleLoad = () => {
		setLoadedSrc(item);
	};
	let image;
	const preloader = () => {
		let endIdx = keyIdx + 1;
		if (endIdx === len) {
			setTimeout(() => {
				dispatch(visibleBackdrop());
			}, 1000);
		}
		if (item) {
			image = new Image();
			image.addEventListener("load", handleLoad);
			image.src = item;
			return () => {
				image.removeEventListener("load", handleLoad);
			};
		}
	};
	useEffect(() => {
		preloader();
	}, []);
	if (loadedSrc === props.data.item) {
		return (
			<motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ type: "spring", stiffness: 100 }}>
				<Card sx={{ width: "100%", background: "linear-gradient(to right bottom, #FFFFFF,#F0F0F0,#E6E6E6)" }}>
					<CardHeader
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={title}
						subheader={title}
					/>
					<CardMedia component="img" height="auto" image={loadedSrc} alt="Paella dish" />
					<CardContent>
						<Typography variant="body2">{title}</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<CardIcons />
					</CardActions>
				</Card>
			</motion.div>
		);
	}
	return null;
};
