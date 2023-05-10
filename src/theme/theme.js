import { createTheme } from "@mui/material";
export const theme = createTheme({
	typography: {
		fontFamily: ["Popins", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
	},
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: "#f7f7f7",
			mainTransparent: "#5d6e5d36",
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#5d6e5d",
			mainTransparent: "#5d6e5d36",
		},
	},
});
