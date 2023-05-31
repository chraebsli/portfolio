import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Line } from "../Text";

const links = [
	{
		name: "services", children: [
			{key: "website", href: "/service/website"},
			{key: "application", href: "/service/application"},
			{key: "database", href: "/service/database"},
			{key: "other", href: "/service/other"},
		],
	},
	{
		name: "about", children: [
			{key: "home", href: "/"},
			{key: "about", href: "/about"},
			{key: "contact", href: "/contact"},
			{key: "imprint", href: "/imprint"},
		],
	},
];

export default function Footer() {
	const {t} = useTranslation("components");
	return (
		<Box sx={{bottom: 0, position: "absolute", width: "100%", padding: "1rem", backgroundColor: "primary.main"}}>
			<footer>
				<Container sx={{width: "fit-content"}}>
					<Stack direction={"column"} alignItems={"center"}>
						<Stack direction={"row"} gap={10}>
							{links.map(category => (
								<Stack key={category.name} direction={"column"} sx={{padding: "0 2rem"}}>
									<Typography variant={"h6"} sx={{color: "secondary.main"}}>
										{t(`footer.${category.name}.self`)}
									</Typography>
									{category.children.map(link => (
										<Typography key={link.key} component={"a"} href={link.href} sx={{color: "secondary.main"}}>
											{t(`footer.${category.name}.${link.key}`)}
										</Typography>
									))}
								</Stack>
							))}
						</Stack>
						<Line primary={false} />
						<Typography component={"span"} sx={{color: "secondary.main"}}>
							&copy; {new Date().getFullYear()} &mdash; {t("footer.copyright")}
						</Typography>
					</Stack>
				</Container>
			</footer>
		</Box>
	);
}
