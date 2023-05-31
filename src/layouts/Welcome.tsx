import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";

export default function Welcome() {
	const {t} = useTranslation("sections");

	return (
		<Section name={Sections.Welcome} noCard>
			<Typography variant={"h3"} component={"h1"} sx={{color: "primary.main"}}>
				{t(`${Sections.Welcome}.welcome`)}
			</Typography>
			<Typography sx={{maxWidth: "50rem", fontSize: "1.5rem"}}>
				{t(`${Sections.Welcome}.description`)}
			</Typography>
		</Section>
	);
}
