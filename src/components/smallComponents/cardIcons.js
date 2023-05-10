import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { viewImgWindow } from "../../store/features/colectionDetail/backdropImgViewSlice";
import { BtnBadgeStyled } from "./btnBadgeStyled";

export const CardIcons = (props) => {
	const dispatch = useDispatch();
	
	const handleZoomNft = () => {
		dispatch(viewImgWindow(props.data))
	};

	return (
		<>
			<IconButton aria-label="add to favorites">
				<FavoriteIcon />
			</IconButton>
			<IconButton aria-label="share">
				<ShareIcon />
			</IconButton>
			<IconButton aria-label="zoom" onClick={handleZoomNft}>
				<ZoomOutMapIcon />
			</IconButton>
			<BtnBadgeStyled />
		</>
	);
};
