import { Stack, Typography, useTheme } from "@mui/material";
import { SectionTitle } from "../components/common/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import PollIcon from "@mui/icons-material/Poll";
import WakaTimeStatistic from "../components/stats/WakaTimeStatistic";

export default function Stats() {
	const {t} = useTranslation("sections");
	const scheme = useTheme().palette.mode;
	const wakaTimeStats = {
		activity: {
			light: "b4e91411-2858-4af8-a225-0d8a638ec326",
			dark: "8520e94b-628d-4cb8-bbcd-63b0a76d36ca",
		},
		languages: {
			light: "499c173f-121c-4adc-84c6-75c548d28cd8",
			dark: "987e42fe-1f1d-49fa-9cc3-44b695c9dc6a",
		},
	};

	return (
		<Section name={Sections.Stats}>
			<SectionTitle>
				<PollIcon /> {t(`${Sections.Stats}.title`)}
			</SectionTitle>
			<Typography>
				{t(`${Sections.Stats}.description`)}
			</Typography>
			<Stack direction={{xs: "column", md: "row"}}>
				<WakaTimeStatistic url={`https://wakatime.com/share/@chraebsli/${wakaTimeStats.activity[scheme]}.svg`} />
				<WakaTimeStatistic url={`https://wakatime.com/share/@chraebsli/${wakaTimeStats.languages[scheme]}.svg`} />
			</Stack>
		</Section>
	);
}
