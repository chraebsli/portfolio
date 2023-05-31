import { Typography } from "@mui/material";
import { SectionTitle } from "../components/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";

export default function About() {
	const {t} = useTranslation("sections");

	return (
		<Section name={Sections.About}>
			<SectionTitle> {t(`${Sections.About}.title`)} </SectionTitle>
			<Typography>{t(`${Sections.About}.description`)}</Typography>
		</Section>
	);
}
