import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useCookies } from "react-cookie";
import { inject } from "@vercel/analytics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.sass";

// components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { Line } from "./components/common/Text";

// layouts
import Welcome from "./layouts/Welcome";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Stats from "./layouts/Stats";
import Social from "./layouts/Social";
import Error404 from "./layouts/error/404";

const light = createTheme({
	palette: {
		mode: "light",
		primary: {main: "#507cff"},
		secondary: {main: "#ffffff"},
	},
});
const dark = createTheme({
	palette: {
		mode: "dark",
		primary: {main: "#507cff"},
		secondary: {main: "#ffffff"},
	},
});

type Props = {
	children: React.ReactNode;
}

function RoutingWrapper({children}: Props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={children} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
}

function App() {
	const [cookies, setCookie] = useCookies(["colorScheme"]);
	const expires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const colorScheme = cookies.colorScheme;
	if (!colorScheme) {
		setCookie("colorScheme", prefersDarkMode ? "dark" : "light", {path: "/", expires: expires});
	}

	const [theme, setTheme] = useState<"light" | "dark">(!colorScheme ? (prefersDarkMode ? "dark" : "light") : colorScheme);
	const [checked, setChecked] = React.useState<boolean>(theme !== "light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setCookie("colorScheme", newTheme, {path: "/", expires: expires});
		setTheme(newTheme);
		setChecked(!checked);
	};

	inject();

	const sections = [
		<Welcome key={1} />,
		<About key={2} />,
		<Skills key={3} />,
		<Stats key={4} />,
		<Social key={5} />,
	];

	return (
		<ThemeProvider theme={theme === "light" ? light : dark}>
			<CssBaseline />
			<Header toggleTheme={toggleTheme} checked={checked} />
			<Box sx={{height: "150px", marginTop: "3rem"}} />
			<Container sx={{mt: "2rem", mb: "2rem"}}>
				<main>
					<section id="" style={{height: "1rem"}} />
					<RoutingWrapper>
						{sections.map((section, index) => (
							<React.Fragment key={index}>
								{section}
								{index !== sections.length - 1 && <Line top={5} bottom={5} />}
							</React.Fragment>
						))}
					</RoutingWrapper>
				</main>
			</Container>
			<Box sx={{height: "150px", marginTop: "3rem"}} />
			<Footer />
			<ScrollToTop />
		</ThemeProvider>
	);
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("root")!);
root.render(<App />);