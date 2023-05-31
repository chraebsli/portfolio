import { Box, LinearProgress, Stack, Typography } from "@mui/material";

type Props = {
	text: string;
	icon: React.ReactNode;
	progress: number;
}
export default function Progress({text, icon, progress}: Props) {
	return (
		<Box sx={{mb: ".5rem", alignItems: "center"}}>
			<Typography component={"span"}>{icon} {text}</Typography>
			<Stack direction={"row"} spacing={2} alignItems={"center"}>
				<Box sx={{width: "100%", mr: 0}}>
					<LinearProgress variant={"determinate"} value={progress} sx={{p: ".5rem"}} />
				</Box>
				<Box sx={{minWidth: "2rem"}}>
					<Typography>{progress}% </Typography>
				</Box>
			</Stack>
		</Box>
	);
}