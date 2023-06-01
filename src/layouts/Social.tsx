import React from "react";
import { Stack, Typography } from "@mui/material";
import SocialItem from "../components/social/SocialItem";
import "../components/social/SocialMedia.sass";
import Section from "../components/common/Section";
import { Sections } from "../type/page";
import { SectionTitle } from "../components/common/Text";
import SchoolIcon from "@mui/icons-material/School";
import { useTranslation } from "react-i18next";
import socialMediaList from "../components/social/social-media-list";

export default function Social() {
	const {t} = useTranslation("sections");
	const items = socialMediaList();

	return (
		<Section name={Sections.Social}>
			<SectionTitle>
				<SchoolIcon /> {t(`${Sections.Social}.title`)}
			</SectionTitle>
			<Typography>
				{t(`${Sections.Social}.description`)}
			</Typography>
			<Stack
				className="social-media-container"
				gap={8}
				direction="row"
				alignItems="center"
				justifyContent="center"
				marginY={10}>
				{items.map((item, i) => (
					<SocialItem key={i} item={item} />
				))}
			</Stack>
		</Section>
	);
}
