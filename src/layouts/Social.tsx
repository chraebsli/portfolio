import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SocialItem from "../components/social/SocialItem";
import "../components/social/SocialMedia.sass";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import { SectionTitle } from "../components/common/Text";
import ShareIcon from "@mui/icons-material/Share";
import { useTranslation } from "react-i18next";
import socialMediaList from "../components/social/social-media-list";

export default function Social() {
	const {t} = useTranslation("sections");
	const items = socialMediaList();

	return (
		<Section name={Sections.Social}>
			<SectionTitle>
				<ShareIcon fontSize="inherit" /> {t(`${Sections.Social}.title`)}
			</SectionTitle>
			<Typography>
				{t(`${Sections.Social}.description`)}
			</Typography>
			<Grid container spacing={10} sx={{p: "1rem", mt: "1rem"}}>
				{items.map((item, i) => (
					<Grid key={i} xs={6} md={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
						<SocialItem item={item} />
					</Grid>
				))}
			</Grid>
		</Section>
	);
}
