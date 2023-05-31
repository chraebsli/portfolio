import axios from "axios";
import { FormEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFormData(form: any) {
	const elements = form.elements;
	let honeypot;

	const fields = Object.keys(elements)
		.filter(k => {
			if (elements[k].name === "honeypot") {
				honeypot = elements[k].value;
				return false;
			}
			return true;
		})
		.map(k => {
			if (elements[k].name !== undefined) return elements[k].name;
			else if (elements[k].length > 0) return elements[k].item(0).name;
		})
		.filter((item, pos, self) => self.indexOf(item) == pos && item);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const formData: any = {};
	fields.forEach((name) => {
		const element = elements[name];

		formData[name] = element.value;

		if (element.length) {
			const data = [];
			for (let i = 0; i < element.length; i++) {
				const item = element.item(i);
				if (item.checked || item.selected) data.push(item.value);
			}
			formData[name] = data.join(", ");
		}
	});

	formData.formDataNameOrder = JSON.stringify(fields);
	formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
	formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

	return {data: formData, honeypot: honeypot};
}

export function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();
	const form = event.target as HTMLFormElement;
	const formData = getFormData(form);
	const data = formData.data;

	disableAllButtons(form);
	const url = form.action;

	const encoded = Object.keys(data)
		.map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
		.join("&");

	return axios.post(url, encoded, {headers: {"Content-Type": "application/x-www-form-urlencoded"}});
}

function disableAllButtons(form: HTMLFormElement) {
	const buttons = form.querySelectorAll("button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	}
}
