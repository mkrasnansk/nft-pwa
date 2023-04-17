import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: grey[500],
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#43a047",
		},
	},
});
