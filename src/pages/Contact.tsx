import { FormEvent, useEffect, useState } from "react";
import Page from "../components/common/Page";
import servicesList from "../components/services/services-list";
import { Alert, Autocomplete, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Line, PageTitle } from "../components/Text";
import { useTranslation } from "react-i18next";
import { FormElements, FormGroup } from "../components/form/FormElements";
import { handleFormSubmit } from "../components/form/FormSubmissionHandler";
import SendIcon from "@mui/icons-material/Send";
import { Pages } from "../type/page";

type MessageProps = {
	status: {code: number, message: string}
}

function Message({status}: MessageProps) {
	const {t} = useTranslation("pages");

	let type: "success" | "error";
	if (status.code === 200) type = "success";
	else if (status.code === 0) return null;
	else type = "error";

	return (
		<Alert severity={type}>
			{type === "success" ? t("contact.form.success") : (`Error ${status.code}: ${status.message}`)}
		</Alert>
	);
}

export default function Contact() {
	const {t} = useTranslation("pages");
	const pageName = t("contact.title");
	const service = {name: new URLSearchParams(window.location.search).get("service")};
	const services = servicesList().map(service => { return {name: service.title}; });

	const [sending, setSending] = useState(false);
	const [status, setStatus] = useState({code: 0, message: ""});
	const formSubmit = (event: FormEvent<HTMLFormElement>) => {
		setSending(true);
		handleFormSubmit(event)
			.then((response) => {
				setSending(false);
				const {status, statusText} = response;
				setStatus({code: status, message: statusText});
			});
	};

	useEffect(() => {
		document.getElementById("service")?.setAttribute("name", "service");
	}, []);

	return (
		<Page page={Pages.Contact}>
			<section>
				<PageTitle>{pageName}</PageTitle>
				<Line bottom={2} />
			</section>

			<article>
				<section>
					<Typography dangerouslySetInnerHTML={{__html: t("contact.contactMe", {interpolation: {escapeValue: false}})}} />
					<br />
				</section>

				<section>
					<form
						className={"gform"}
						action={"https://script.google.com/macros/s/AKfycby34XnYlPlWxzA9ijreq24F38SzU0uwrRST9FBr64ykCMCrSkhueznWG7O7Afuvkmbj_Q/exec"}
						onSubmit={formSubmit}
						method={"POST"}>
						<div>
							<FormGroup>
								<FormElements pos={"left"}>
									<TextField
										name={"firstname"}
										id={"firstname"}
										variant={"outlined"}
										label={t("contact.form.firstName")}
										fullWidth
									/>
								</FormElements>
								<FormElements pos={"right"}>
									<TextField
										required
										name={"lastname"}
										id={"lastname"}
										variant={"outlined"}
										label={t("contact.form.lastName")}
										fullWidth
									/>
								</FormElements>
							</FormGroup>
							<FormGroup>
								<FormElements>
									<TextField
										required
										name={"email"}
										id={"email"}
										variant={"outlined"}
										label={t("contact.form.email")}
										type={"email"}
										fullWidth
									/>
								</FormElements>
							</FormGroup>
							<FormGroup>
								<FormElements>
									<Autocomplete
										freeSolo
										aria-required
										options={services.map(service => service.name)}
										getOptionLabel={option => option}
										id={"service"}
										value={service.name ? service.name : ""}
										includeInputInList
										renderInput={params => (
											<TextField
												{...params}
												label={t("contact.form.service")}
												variant={"outlined"}
											/>
										)}
										fullWidth
									/>
								</FormElements>
							</FormGroup>
							<FormGroup>
								<FormElements>
									<TextField
										required
										name={"message"}
										id={"message"}
										variant={"outlined"}
										label={t("contact.form.message")}
										fullWidth
										multiline
										rows={5}
									/>
								</FormElements>
							</FormGroup>
							<div>
								<Typography>{t("contact.form.required")}</Typography>
							</div>
							<FormGroup>
								<FormElements>
									<Button
										variant={"contained"}
										type={"submit"}
										size={"large"}
										endIcon={!sending && <SendIcon color={"secondary"} />}>
										{sending
											? <CircularProgress color={"secondary"} size={30} />
											: t("contact.form.send")
										}
									</Button>
								</FormElements>
							</FormGroup>
						</div>
						<div className={"after-submit"}>
							<Message status={status} />
						</div>
					</form>
				</section>
			</article>
		</Page>
	);
}
