import { default as MuiTimeline } from "@mui/lab/Timeline";
import { useMediaQuery, useTheme } from "@mui/material";
import { timelineOppositeContentClasses } from "@mui/lab";

type Props = {
	children: React.ReactNode;
}
export default function Timeline({children}: Props) {
	const theme = useTheme();
	const desktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<MuiTimeline
			position={desktop ? "alternate" : "right"}
			sx={desktop ? undefined : {[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.2}}}
		>
			{children}
		</MuiTimeline>
	);
}