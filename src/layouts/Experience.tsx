import { Typography } from "@mui/material";
import { SectionTitle } from "../components/common/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import WorkIcon from "@mui/icons-material/Work";
import { default as TimelineC } from "../components/experience/Timeline";
import TimelineItem from "../components/experience/TimelineItem";
import { TimelineItem as TimelineItemType } from "@type/timeline";

export default function Experience() {
	const {t} = useTranslation("sections");

	const timelineItems: TimelineItemType[] = [
		{
			from: "2020",
			to: t(`${Sections.Experience}.dates.today`),
			type: t(`${Sections.Experience}.types.apprenticeship`),
			company: "Technische Fachschule Bern",
		},
		{
			from: "2019",
			to: "2020",
			type: t(`${Sections.Experience}.types.gymnasium`),
			company: "Gymnasium Oberaargau",
		},
		{
			from: "2017",
			to: "2019",
			type: t(`${Sections.Experience}.types.school`),
			company: "Oberstufenzentrum Wiedlisbach",
		},
	];

	return (
		<Section name={Sections.Experience}>
			<SectionTitle>
				<WorkIcon fontSize="inherit" /> {t(`${Sections.Experience}.title`)}
			</SectionTitle>
			<Typography>
				{t(`${Sections.Experience}.description`)}
			</Typography>
			<TimelineC>
				{timelineItems.map((item, i) => (
					<TimelineItem key={i} item={item} />
				))}
			</TimelineC>
		</Section>
	);
}
