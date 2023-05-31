import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Pages, Paths } from "./type/page";
import { inject } from "@vercel/analytics";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.sass";

// components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";

// pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Service from "./pages/Services/Service";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact";
import About from "./pages/About/About";
import Imprint from "./pages/Imprint";
import NotFound404 from "./pages/Error/404";

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

	return (
		<ThemeProvider theme={theme === "light" ? light : dark}>
			<Router>
				<CssBaseline />
				<Header toggleTheme={toggleTheme} checked={checked} />
				<Container sx={{mt: "2rem", mb: "2rem"}}>
					<React.Suspense fallback={<Loader />}>
						<Routes>
							<Route path={Pages.Home} element={<Home />} />
							<Route path={Paths.Home} element={<Home />} />
							<Route path={Pages.Services} element={<Services />} />
							<Route path={Pages.ServiceId} element={<Service />} />
							<Route path={Pages.Projects} element={<Projects />} />
							<Route path={Pages.ProjectId} element={<Project />} />
							<Route path={Pages.About} element={<About />} />
							<Route path={Pages.Contact} element={<Contact />} />
							<Route path={Pages.Imprint} element={<Imprint />} />
							<Route path={Pages.NotFound404} element={<NotFound404 />} />
						</Routes>
					</React.Suspense>
				</Container>
				<Box sx={{height: "220px", marginTop: "5rem"}} />
				<Footer />
				<ScrollToTop />
			</Router>
		</ThemeProvider>
	);
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("root")!);
root.render(<App />);