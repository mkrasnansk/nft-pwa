import { createSlice } from "@reduxjs/toolkit";
import nftImg1 from "../../../accessories/images/nftImage/1.png";
import nftImg2 from "../../../accessories/images/nftImage/2.png";
import nftImg3 from "../../../accessories/images/nftImage/3.png";
import nftImg4 from "../../../accessories/images/nftImage/4.png";
import nftImg5 from "../../../accessories/images/nftImage/5.png";
import nftImg6 from "../../../accessories/images/nftImage/6.png";
import nftImg7 from "../../../accessories/images/nftImage/7.png";
import nftImg8 from "../../../accessories/images/nftImage/8.png";

const collectionArr = [
	{ item: nftImg1, title: "Image 1", id: 1 },
	{ item: nftImg2, title: "Image 2", id: 2 },
	{ item: nftImg3, title: "Image 3", id: 3 },
	{ item: nftImg4, title: "Image 4", id: 4 },
	{ item: nftImg5, title: "Image 5", id: 5 },
	{ item: nftImg6, title: "Image 6", id: 6 },
	{ item: nftImg7, title: "Image 7", id: 7 },
	{ item: nftImg8, title: "Image 8", id: 8 },
];
const initialState = {
	value: collectionArr,
};

export const detailArrIMGSlice = createSlice({
	name: "arrImg",
	initialState,
});

// Action creators are generated for each case reducer function
export const { getNftById } = detailArrIMGSlice.actions;

export default detailArrIMGSlice.reducer;
