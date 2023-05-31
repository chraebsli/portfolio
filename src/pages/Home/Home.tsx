import { Typography } from "@mui/material";
import Page from "../../components/common/Page";
import ServicesList from "../../components/services/ServicesList";
import ProjectsList from "../../components/projects/ProjectsList";
import { Line, SectionTitle } from "../../components/Text";
import { useTranslation } from "react-i18next";
import { Paths } from "../../type/page";

export default function Home() {
	const {t} = useTranslation("pages");

	return (
		<Page page={Paths.Home}>
			<article>
				<section id={"welcome"} style={{marginTop: "10rem"}}>
					<Typography variant={"h3"} component={"h1"} sx={{color: "primary.main"}}>
						{t("home.welcome")}
					</Typography>
					<Typography
						sx={{maxWidth: "50rem", fontSize: "1.5rem"}}>
						<Typography component={"span"} variant={"h5"} sx={{fontStyle: "italic"}}>
							{t("home.subWelcome")}
						</Typography>
						<br />
						{t("home.description")}
					</Typography>
				</section>
				<Line top={5} bottom={5} />
				<section>
					<SectionTitle> {t("home.sections.servicesTitle")} </SectionTitle>
					<Typography>{t("home.sections.servicesDescription")}</Typography>
					<ServicesList />
				</section>
				<Line top={5} bottom={5} />
				<section>
					<SectionTitle>{t("home.sections.projectsTitle")}</SectionTitle>
					<Typography>{t("home.sections.projectsDescription")}</Typography>
					<ProjectsList />
				</section>
			</article>
		</Page>
	);
}
