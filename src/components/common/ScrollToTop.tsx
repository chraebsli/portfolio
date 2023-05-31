import React, { useEffect } from "react";
import { Box, Fade, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollToTop() {
	const [visible, setVisible] = React.useState(false);

	const toggleVisible = () => setVisible(window.scrollY > 500);
	const handleClick = () => window.scrollTo(0, 0);

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
		return () => window.removeEventListener("scroll", toggleVisible);
	}, []);

	return (
		<Fade in={visible} timeout={200} exit>
			<Box sx={{
				position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1000,
				backgroundColor: "primary.main", color: "primary.contrastText", borderRadius: "50%",
			}}>
				<IconButton aria-label="scroll to top" onClick={handleClick} size={"large"}>
					<ArrowUpwardIcon color={"secondary"} />
				</IconButton>
			</Box>
		</Fade>
	);
}