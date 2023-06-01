import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const {t} = useTranslation("components");
	return (
		<Box sx={{bottom: 0, position: "absolute", width: "100%", padding: "2rem", backgroundColor: "primary.main"}}>
			<footer>
				<Stack alignItems="center">
					<Typography sx={{color: "secondary.main"}}>
						&copy; {new Date().getFullYear()} &mdash; {t("footer.copyright")}
					</Typography>
				</Stack>
			</footer>
		</Box>
	);
}
