import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { visibleBackdrop } from "../../store/features/preloaders/backdropSlice";

export const BackdropPreloader = () => {
	const dispatch = useDispatch();
	const viewBackdrop = useSelector((state) => state.backdropView.value);
	return (
		<div>
			<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={viewBackdrop} onClick={() => dispatch(visibleBackdrop())}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};
