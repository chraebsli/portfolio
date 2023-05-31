import Page from "../../components/common/Page";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";
import { useTranslation } from "react-i18next";
import "./Projects.sass";
import ProjectsList from "../../components/projects/ProjectsList";
import { Pages } from "../../type/page";

export default function Projects() {
	const {t} = useTranslation();
	return (
		<Page page={Pages.Projects}>
			<section>
				<PageTitle>{t("project.title")}</PageTitle>
				<Line bottom={2} />
			</section>

			<article className="page-content">
				<ProjectsList />
			</article>
		</Page>
	);
}
