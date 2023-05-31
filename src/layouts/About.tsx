import { Typography } from "@mui/material";
import { Line, SectionTitle } from "../components/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";

export default function About() {
	const {t} = useTranslation("pages");

	return (
		<Section name={"welcome"}>
			<SectionTitle> {t("home.sections.servicesTitle")} </SectionTitle>
			<Typography>{t("home.sections.servicesDescription")}</Typography>
			<Line top={5} bottom={5} />
		</Section>
	);
}
