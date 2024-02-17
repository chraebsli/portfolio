import { AppBar, Container, Stack, Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { MaterialUISwitch } from "./ThemeSwitch";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Image } from "./Text";
import { Sections } from "../../type/page";

const sections = [
	{key: "welcome", href: `#${Sections.Welcome}`},
	{key: "about", href: `#${Sections.About}`},
	{key: "experience", href: `#${Sections.Experience}`},
	{key: "skills", href: `#${Sections.Skills}`},
	{key: "stats", href: `#${Sections.Stats}`},
	{key: "social", href: `#${Sections.Social}`},
];

type Props = {
	toggleTheme: () => void;
	checked: boolean;
}
export default function Header({toggleTheme, checked}: Props) {
	const {t} = useTranslation("components");
	return (
		<AppBar position="fixed" enableColorOnDark>
			<Container>
				<Navbar collapseOnSelect expand="md" bg="none" variant="dark">
					<Navbar.Brand href="#">
						<Image src="/assets/logo-white-transparent.svg" alt="logo" width={50} height={50} />
						<Typography component="span" variant="h6" sx={{marginLeft: "1rem"}}>
							{t("header.title")}
						</Typography>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="header-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" />
						<Nav>
							{sections.map(page => (
								<Nav.Link key={page.key} href={page.href}>
									{t(`header.links.${page.key}`)}
								</Nav.Link>
							))}
						</Nav>
						<Stack direction="row" sx={{alignItems: "center", justifyContent: "start"}}>
							<LanguageSwitcher />
							<MaterialUISwitch sx={{m: 1}} onChange={toggleTheme} checked={checked} />
						</Stack>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</AppBar>
	);
}
