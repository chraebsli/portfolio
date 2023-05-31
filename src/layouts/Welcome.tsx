import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../components/common/Section";

export default function Welcome() {
	const {t} = useTranslation("pages");

	return (
		<Section name={"welcome"}>
			<Typography variant={"h3"} component={"h1"} sx={{color: "primary.main"}}>
				{t("home.welcome")}
			</Typography>
			<Typography sx={{maxWidth: "50rem", fontSize: "1.5rem"}}>
				{t("home.description")}
			</Typography>
		</Section>
	);
}
