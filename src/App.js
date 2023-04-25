import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { FirstAppStepper } from "./components/topLevelApp/firstAppStepper";
import { TopLayout } from "./components/topLevelApp/layout/topLayout";
import { theme } from "./theme/theme";
import { useSelector } from "react-redux";
import { BackdropPreloader } from "./components/backdrop";

function App() {
	const start = useSelector((state) => state.start.value);

	return (
		<Box
			sx={{
				display: "flex",
				alignContent: "stretch",
				minHeight: "100vh",
			}}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BackdropPreloader />
				{start ? <TopLayout /> : <FirstAppStepper />}
			</ThemeProvider>
		</Box>
	);
}

export default App;
