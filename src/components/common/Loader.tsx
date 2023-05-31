import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
	return (
		<Box sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
			<CircularProgress color="primary" size={50} />
		</Box>
	);
}
