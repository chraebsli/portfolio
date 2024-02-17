import { default as MuiTimeline } from "@mui/lab/Timeline";

type Props = {
	children: React.ReactNode;
}
export default function Timeline({children}: Props) {
	return (
		<MuiTimeline position="alternate">
			{children}
		</MuiTimeline>
	);
}