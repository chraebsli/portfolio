import { Card, Grid, Typography } from "@mui/material";
import { SectionTitle } from "../components/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import Frontend from "../components/skills/Frontend";
import Backend from "../components/skills/Backend";
import General from "../components/skills/General";
import DevTools from "../components/skills/DevTools";
import SchoolIcon from "@mui/icons-material/School";

export default function Skills() {
	const {t} = useTranslation("sections");

	return (
		<Section name={Sections.Skills}>
			<Card sx={{padding: "2rem"}}>
				<SectionTitle>
					<SchoolIcon /> {t(`${Sections.Skills}.title`)}
				</SectionTitle>
				<Typography>
					{t(`${Sections.Skills}.description`)}
				</Typography>
				<Grid container spacing={3} sx={{padding: "1rem 0"}}>
					<Frontend size={{xs: 12, sm: 6}} />
					<Backend size={{xs: 12, sm: 6}} />
					<DevTools size={{xs: 12, sm: 6}} />
					<General size={{xs: 12, sm: 6}} />
				</Grid>
			</Card>
		</Section>
	);
}
