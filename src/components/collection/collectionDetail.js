import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { imageArr } from "../../accessories/images/nftImage/arrImages";
export const CollectionDetail = () => {
	const [collection, setCollection] = useState(imageArr);
	return (
		<Grid container justifyContent="center">
			<Grid
				item
				sm={12}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography variant="h1">CollectionDetail</Typography>
			</Grid>
			{collection.map((item, keyIdx) => {
				return (
					<Grid key={keyIdx} justifyContent='center' item xs={12} md={6} xl={3} style={{
						backgroundImage: `url(${item})`,
						height:'500px',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize:'contain' //auto|length|cover|contain|intial|inherit
					}}>
					</Grid>
				);
			})}
		</Grid>
	);
};
