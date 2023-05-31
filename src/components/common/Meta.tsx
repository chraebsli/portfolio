// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { PageUrl } from "../../type/page";

const specialPages = {
	noFollow: ["projects", "imprint"],
	noIndex: [""],
};

type Props = {
	page: string;
}
export default function Meta({page}: Props) {
	const pageElements = page.split("/").splice(1);
	const parentPage = pageElements[0];
	const customKey = parentPage === "project" && "project" || parentPage === "service" && "service";
	const {t} = useTranslation(customKey ? "common" : "meta");

	const translationPath = pageElements.join(".");
	const title = t(`${translationPath}.title`);
	const description = t(`${translationPath}.description`);

	const follow = specialPages.noFollow.includes(parentPage) ? "nofollow" : "follow";
	const index = specialPages.noIndex.includes(parentPage) ? "noindex" : "index";

	const openGraph = {
		title: `${title} | chraebsli IT-Services`,
		description,
		image: customKey && `${PageUrl}/media/${pageElements.join("/")}.webp` || `${PageUrl}/assets/logo-white-transparent.svg`,
		url: `${PageUrl}/${pageElements.join("/")}`,
	};

	return (
		<Helmet>
			<title>{`${title} | chraebsli IT-Services`}</title>
			<meta name="description" content={description} />
			<meta name="robots" content={`${follow}, ${index}`} />
			<meta name="googlebot" content={`${follow}, ${index}`} />

			<meta property="og:title" content={openGraph.title} />
			<meta property="og:description" content={openGraph.description} />
			<meta property="og:image" content={openGraph.image} />
			<meta property="og:url" content={openGraph.url} />
			<meta property="og:type" content="website" />

			<meta name="twitter:title" content={openGraph.title} />
			<meta name="twitter:description" content={openGraph.description} />
			<meta name="twitter:image" content={openGraph.image} />
			<meta name="twitter:card" content="summary_large_image" />
		</Helmet>
	);
}
