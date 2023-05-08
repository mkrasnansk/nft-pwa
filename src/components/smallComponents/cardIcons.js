import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import { BtnBadgeStyled } from "./btnBadgeStyled";
export const CardIcons = () => {
	return (
		<>
			<IconButton aria-label="add to favorites">
				<FavoriteIcon />
			</IconButton>
			<IconButton aria-label="share">
				<ShareIcon />
			</IconButton>
			<IconButton aria-label="zoom">
				<ZoomOutMapIcon />
			</IconButton>
			<BtnBadgeStyled />
		</>
	);
};
