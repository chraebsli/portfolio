import { Card, Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";
import { Pages } from "../../type/page";

export default function About() {
	const {t} = useTranslation("pages");
	const description: string[] = t("about.description", {returnObjects: true});

	return (
		<Page page={Pages.About}>
			<article>
				<Stack spacing={3}>
					<Card id={"about"} sx={{padding: "2rem"}}>
						<h2>
							<PersonIcon /> {t("about.title")}
						</h2>
						{description.map((paragraph, i) => <Typography key={i} dangerouslySetInnerHTML={{__html: paragraph}} />)}
					</Card>
				</Stack>
			</article>
		</Page>
	);
}
