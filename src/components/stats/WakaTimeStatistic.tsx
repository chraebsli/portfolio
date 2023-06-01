import { Box } from "@mui/material";

type Props = {
	url: string;
}
export default function WakaTimeStatistic({url}: Props) {
	return (
		<Box sx={{width: {xs: "100%", md: "50%"}, p: ".5rem"}}>
			<figure style={{width: "100%"}}>
				<embed src={url} />
			</figure>
		</Box>
	);
}
