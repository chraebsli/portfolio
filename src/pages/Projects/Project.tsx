import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Image, Line, PageTitle, SectionTitle } from "../../components/Text";
import NotFound404 from "../Error/404";
import { useTranslation } from "react-i18next";
import "./Projects.sass";
import ToolImage from "../../components/projects/ToolImage";
import WakaTimeBadge from "../../components/projects/WakaTimeBadge";
import projectsList from "../../components/projects/projects-list";
import { Pages, Paths } from "../../type/page";

export default function Project() {
	const {t} = useTranslation("common");

	const page = useParams().project;

	const projects = projectsList();
	const project = projects.find(project => project.id === page);

	if (!project) return <NotFound404 />;

	return (
		<Page page={`${Pages.Project}/${project.id}`} className={"single-project"}>
			<section>
				<PageTitle>{project.title}</PageTitle>
				<WakaTimeBadge url={project.page.wakaTimeBadge} />
				<Line bottom={2} />
			</section>

			<article className="page-content">
				<Stack spacing={3}>
					<section>
						<Image src={`${Paths.Media}${Pages.Project}/${project.id}.webp`} alt={`${t("project.imageAlt")} ${project.title}`} height={400} />
					</section>
					<section>
						<SectionTitle> {t("project.titles.description")} </SectionTitle>
						{project.page.description.map((paragraph: string, i: number) => <Typography key={i}> {paragraph} </Typography>)}
					</section>
					<section>
						<SectionTitle> {t("project.titles.website")} </SectionTitle>
						{project.page.website.map((paragraph: string, i: number) =>
							<Typography key={i} dangerouslySetInnerHTML={{__html: paragraph}} />)}
						<br />
					</section>
					<section>
						<SectionTitle> {t("project.titles.tools")} </SectionTitle>
						<div className={"project-tools"} data-count={6}>
							{project.page.tools.map((tool: string, i: number) => <ToolImage key={i} name={tool} />)}
						</div>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
