import { Stack, Typography, useTheme } from "@mui/material";
import { SectionTitle } from "../components/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import PollIcon from "@mui/icons-material/Poll";

export default function Stats() {
	const {t} = useTranslation("sections");
	const scheme = useTheme().palette.mode;
	const wakaTimeStats = {
		activity: {
			light: "e7bc95fa-f16d-45da-bae8-2320d8191b65",
			dark: "c00be785-7e1e-4e58-bb64-2193669eadfb",
		},
		languages: {
			light: "661154cf-54c3-4aea-ab11-2530d09ad145",
			dark: "ae7c9e87-454d-4942-8133-b8c11c34274d",
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
			<Stack direction={{xs: "column", md: "row"}} spacing={3}>
				<figure>
					<embed src={`https://wakatime.com/share/@chraebsli/${wakaTimeStats.activity[scheme]}.svg`} />
				</figure>
				<figure>
					<embed src={`https://wakatime.com/share/@chraebsli/${wakaTimeStats.languages[scheme]}.svg`} />
				</figure>
			</Stack>
		</Section>
	);
}
