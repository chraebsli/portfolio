// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { PageUrl } from "../../type/page";
import { useState } from "react";

export const constructTitle = () => {
	const {t} = useTranslation("components");

	const pageTitle = (function() {
		const {t} = useTranslation("meta");
		return t("title");
	})();
	const currentSection = window?.location.href.split("#")[1];
	const section = currentSection ? `${t(`header.links.${currentSection}`)}` : null;

	return `${section ? `${section} |` : ""} ${pageTitle}`;
};

export default function Meta() {
	const {t} = useTranslation("meta");

	const description = t("description");

	const [title, setTitle] = useState(constructTitle());

	const openGraph = {
		title,
		description,
		image: `${PageUrl}/assets/logo-white-transparent.svg`,
		url: `${PageUrl}`,
	};

	return (
		<Helmet>
			<title>{openGraph.title}</title>
			<meta name="description" content={openGraph.description} />
			<meta name="robots" content="follow, index" />
			<meta name="googlebot" content="follow, index" />

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
