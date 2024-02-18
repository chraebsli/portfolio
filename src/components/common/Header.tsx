import { AppBar, Container, Stack, Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { MaterialUISwitch } from "./ThemeSwitch";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Image } from "./Text";
import { Sections } from "../../type/page";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Link } from "react-scroll";

const sections = [
	{key: Sections.About},
	{key: Sections.Experience},
	{key: Sections.Skills},
	{key: Sections.Stats},
	{key: Sections.Social},
];

type Props = {
	toggleTheme: () => void;
	checked: boolean;
}
export default function Header({toggleTheme, checked}: Props) {
	const {t} = useTranslation("components");
	return (
		<AppBar position="fixed" enableColorOnDark variant="outlined">
			<Container>
				<Navbar collapseOnSelect expand="md" bg="none" variant="dark">
					<Navbar.Brand>
						<NavLink href="root">
							<Image src="/assets/logo-white-transparent.svg" alt="logo" width={50} height={50} />
							<Typography component="span" variant="h6" sx={{marginLeft: "1rem"}}>
								{t("header.title")}
							</Typography>
						</NavLink>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="header-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" />
						<Nav>
							{sections.map(page => (
								<NavLink href={page.key} key={page.key}>
									{t(`header.links.${page.key}`)}
								</NavLink>
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

type NavLinkProps = {
	href: string;
	children?: React.ReactNode;
}

function NavLink({children, href}: NavLinkProps) {
	return (
		<Typography variant="h6" sx={{margin: "0 .2rem", color: "text.secondary"}}>
			<Link
				activeClass="active"
				to={href}
				spy={true}
				smooth={true}
				offset={-100}
				duration={500}
				style={{cursor: "pointer", textDecoration: "none"}}
				activeStyle={{color: "white"}}
			>
				{children}
			</Link>
		</Typography>
	);
}