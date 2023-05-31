import React, { useEffect } from "react";
import { defaultLanguage } from "../../locales/_i18n";
import { useCookies } from "react-cookie";
import { Button, ButtonGroup } from "@mui/material";

export function LanguageSwitcher() {
	const [, setLanguage] = React.useState(defaultLanguage);
	const [cookies, setCookie] = useCookies(["i18next"]);

	useEffect(() => { cookies.i18next ? setLanguage(cookies.i18next) : null; }, [cookies, setCookie]);

	const handleChange = (lang: string) => {
		setCookie("i18next", lang, {path: "/"});
		setLanguage(lang);
		window.location.reload();
	};

	return (
		<ButtonGroup variant="text" aria-label="language" color={"secondary"}>
			<Button onClick={() => {handleChange("en");}}>EN</Button>
			<Button onClick={() => {handleChange("de");}}>DE</Button>
		</ButtonGroup>
	);
}