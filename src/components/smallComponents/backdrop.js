import { Backdrop, CardMedia, CircularProgress, Dialog } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewImgWindowState } from "../../store/features/colectionDetail/backdropImgViewSlice";
import { visibleBackdrop } from "../../store/features/preloaders/backdropSlice";

export const BackdropPreloader = () => {
	const dispatch = useDispatch();
	const viewBackdrop = useSelector((state) => state.backdropView.value);
	const viewBackImgWindow = useSelector((state) => state.backdropImgView);

	const handleOnClose = () => {
		viewBackImgWindow.value ? dispatch(viewImgWindowState()) : dispatch(visibleBackdrop());
	};

	const imageDialog = (src) => {
		return (
			<Dialog maxWidth='lg' open={true}>
					<CardMedia
						component="img"
						sx={{
							height: "auto",
							width: "auto",
						}}
						image={src}
						alt="Paella dish"
					/>
			</Dialog>
		);
	};

	return (
		<div>
			<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={viewBackdrop || viewBackImgWindow.value} onClick={handleOnClose}>
				{viewBackImgWindow.value ? imageDialog(viewBackImgWindow.source) : <CircularProgress color="inherit" />}
			</Backdrop>
		</div>
	);
};
