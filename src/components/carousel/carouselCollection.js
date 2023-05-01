import { Grid } from "@mui/material";
import React, { useState } from "react";
import collection1 from "../../accessories/images/collection1.png";
import { ViewCarouselOption } from "./viewCarousel";

let arrView = [
	{ imgSrc: collection1, position: -150, actual: "left", keyIdx: 0, center: false, changed: false },
	{ imgSrc: collection1, position: 0, actual: "center", keyIdx: 1, center: true, changed: false },
	{ imgSrc: collection1, position: 150, actual: "right", keyIdx: 2, center: false, changed: false },
];

export const CarouselCollection = () => {
	const [viewArr, setViewArr] = useState(arrView);

	const handlePosition = (side, key, x) => {
		arrView = arrView.map((i) => {
			if (i.center === true) {
				arrView[i.keyIdx].center = false;
				arrView[i.keyIdx].position = x;
				arrView[i.keyIdx].actual = side;
				arrView[i.keyIdx].changed = true;
			} else {
				arrView[i.keyIdx].changed = false;
			}
			return i;
		});
		arrView[key].center = true;
		arrView[key].position = 0;
		arrView[key].actual = "center";

		setViewArr(arrView);
	};
	return (
		<Grid container justifyContent="center" alignItems="center">
			{viewArr.map((item) => {
				return <ViewCarouselOption key={item.keyIdx} center={item.center} statePosition={item} seterPosition={handlePosition} />;
			})}
		</Grid>
	);
};
