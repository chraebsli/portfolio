import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Image, Line, PageTitle } from "../../components/Text";
import SendIcon from "@mui/icons-material/Send";
import servicesList from "../../components/services/services-list";
import NotFound404 from "../Error/404";
import "./Services.sass";
import { Pages } from "../../type/page";

export default function Service() {
	const {t} = useTranslation("common");

	const page = useParams().service;

	const services = servicesList();
	const service = services.find(project => project.id === page);

	if (!service) return <NotFound404 />;

	return (
		<Page page={`${Pages.Service}/${service.id}`} className={"single-service"}>
			<section>
				<PageTitle>{service.title}</PageTitle>
				<Line bottom={2} />
			</section>

			<article>
				<Image
					src={`/media/service/${service.id}.webp`}
					alt={`${t("service.imageAlt")} ${service.title}`}
					height={300} />
				<section>
					<Stack spacing={3}>
						<Typography className={"italic"}> {service.teaser} </Typography>
						{service.page.description.map((paragraph: string, i: number) => <Typography key={i}> {paragraph} </Typography>)}
						<Typography>
							{t("service.includedFeatures")}
							<ul>
								{service.features.map((feature, i) => <li key={i}>{feature}</li>)}
							</ul>
						</Typography>
						<Button
							href={`/contact?service=${service.title}`}
							rel={"canonical"}
							variant="contained"
							endIcon={<SendIcon color={"secondary"} />}
							sx={{width: "20rem"}}>
							{t("service.sendRequest")}
						</Button>
					</Stack>
				</section>
			</article>
		</Page>
	);
}
