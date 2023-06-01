import { Grid, Typography } from "@mui/material";
import { SectionTitle } from "../components/common/Text";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import Frameworks from "../components/skills/Frameworks";
import Languages from "../components/skills/Languages";
import Cloud from "../components/skills/Cloud";
import Tools from "../components/skills/Tools";
import SchoolIcon from "@mui/icons-material/School";

export default function Skills() {
	const {t} = useTranslation("sections");

	return (
		<Section name={Sections.Skills}>
			<SectionTitle>
				<SchoolIcon fontSize="inherit" /> {t(`${Sections.Skills}.title`)}
			</SectionTitle>
			<Typography>
				{t(`${Sections.Skills}.description`)}
			</Typography>
			<Grid container spacing={3} sx={{padding: "1rem 0"}}>
				<Frameworks size={{xs: 12, sm: 6}} />
				<Tools size={{xs: 12, sm: 6}} />
				<Languages size={{xs: 12, sm: 6}} />
				<Cloud size={{xs: 12, sm: 6}} />
			</Grid>
		</Section>
	);
}
