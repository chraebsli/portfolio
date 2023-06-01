import { Typography } from "@mui/material";
import { SectionTitle } from "../components/common/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import InfoIcon from "@mui/icons-material/Info";

export default function About() {
	const {t} = useTranslation("sections");

	return (
		<Section name={Sections.About}>
			<SectionTitle>
				<InfoIcon fontSize="inherit" /> {t(`${Sections.About}.title`)}
			</SectionTitle>
			{
				(t(`${Sections.About}.description`, {returnObjects: true}) as string[])
					.map((p: string, i: number) => <Typography key={i} dangerouslySetInnerHTML={{__html: p}} sx={{mb: "1rem"}} />)
			}
		</Section>
	);
}
