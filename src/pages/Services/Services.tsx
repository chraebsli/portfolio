import Page from "../../components/common/Page";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";
import "./Services.sass";
import ServicesList from "../../components/services/ServicesList";
import { Pages } from "../../type/page";

export default function Services() {
	const {t} = useTranslation("common");

	return (
		<Page page={Pages.Services}>
			<section>
				<PageTitle>{t("service.title")}</PageTitle>
				<Line bottom={2} />
			</section>
			<article>
				<ServicesList />
			</article>
		</Page>
	);
}
