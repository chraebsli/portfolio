import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../../components/common/Section";
import { Image, Line } from "../../components/common/Text";

export default function Error404() {
	const {t} = useTranslation("components");

	return (
		<Section name={"Error: 404 - Page not Found"} noCard>
			<Typography variant="h3" component="h1" sx={{color: "primary.main"}}>
				{t("error.404.title")}
			</Typography>
			<Line top={.5} bottom={2} />
			<Image src={"/media/404.webp"} alt={t("error.404.title")} height={300} />
			<Typography sx={{maxWidth: "50rem", fontSize: "1.5rem"}}>
				{t("error.404.description")}
			</Typography>
		</Section>
	);
}
