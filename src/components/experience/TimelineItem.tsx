import { default as MuiTimelineItem } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineItem as TimelineItemType } from "@type/timeline";
import { Typography } from "@mui/material";

type Props = {
	item: TimelineItemType;
}
export default function TimelineItem({item}: Props) {
	return (
		<MuiTimelineItem>
			<TimelineOppositeContent color="text.secondary">
				<Typography>{item.from} — {item.to}</Typography>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot color="primary" />
				<TimelineConnector color="primary" />
			</TimelineSeparator>
			<TimelineContent>
				<Typography variant="h6" component="span">{item.company}</Typography>
				<Typography>{item.type}</Typography>
			</TimelineContent>
		</MuiTimelineItem>
	);
}