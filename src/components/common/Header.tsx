import { AppBar, Container, Stack, Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { MaterialUISwitch } from "./ThemeSwitch";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Image } from "./Text";
import { Sections } from "../../type/page";
import React, { useEffect, useState } from "react";

const sections = [
	{key: "about", href: `#${Sections.About}`},
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

	const initialSection = window?.location.href.split("#")[1];
	const [activeSection, setActiveSection] = useState(initialSection || "#");

	const handleLinkClick = (section: string) => {
		setActiveSection(section);
		scrollToSection(section);
	};

	const scrollToSection = (section: string) => {
		const element = document.getElementById(section);
		element?.scrollIntoView({behavior: "smooth"});
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const sections = document.querySelectorAll("section");

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const EM = 16;

				if (
					scrollPosition >= sectionTop - 6 * EM - 50 && // Adjust the offset as needed
					scrollPosition < sectionTop + sectionHeight - 6 * EM - 50 // Adjust the offset as needed
				) {
					setActiveSection(section.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleUrlAnchorChange = () => {
			const sectionFromUrl = window.location.hash.substr(1);
			setActiveSection(sectionFromUrl);
		};

		window.addEventListener("hashchange", handleUrlAnchorChange);
		return () => {
			window.removeEventListener("hashchange", handleUrlAnchorChange);
		};
	}, []);

	useEffect(() => {
		window.location.hash = activeSection;
	}, [activeSection]);

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
								<Link key={page.key} href={page.href} active={activeSection === page.key} onClick={() => handleLinkClick(page.key)}>
									{t(`header.links.${page.key}`)}
								</Link>
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

type LinkProps = {
	children: React.ReactNode;
	href: string;
	onClick: () => void;
	active: boolean;
}

function Link({children, href, onClick, active}: LinkProps) {
	return (
		<Nav.Link href={href} onClick={onClick} className={active ? "active" : ""}>
			{children}
		</Nav.Link>
	);
}
