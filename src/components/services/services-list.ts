import { useTranslation } from "react-i18next";
import Service, { Services } from "../../type/service";
import { Pages } from "../../type/page";

export default function servicesList(): Service[] {
	const {t} = useTranslation("common");
	return [
		new Service(
			Services.Website,
			t(`service.${Services.Website}.title`),
			`${Pages.Service}/${Services.Website}`,
			t(`service.${Services.Website}.teaser`),
			t(`service.${Services.Website}.description`),
			t(`service.${Services.Website}.features`, {returnObjects: true}),
			{
				description: t(`service.${Services.Website}.page.description`, {returnObjects: true}),
			},
		),
		new Service(
			Services.Application,
			t(`service.${Services.Application}.title`),
			`${Pages.Service}/${Services.Application}`,
			t(`service.${Services.Application}.teaser`),
			t(`service.${Services.Application}.description`),
			t(`service.${Services.Application}.features`, {returnObjects: true}),
			{
				description: t(`service.${Services.Application}.page.description`, {returnObjects: true}),
			},
		),
		new Service(
			Services.Database,
			t(`service.${Services.Database}.title`),
			`${Pages.Service}/${Services.Database}`,
			t(`service.${Services.Database}.teaser`),
			t(`service.${Services.Database}.description`),
			t(`service.${Services.Database}.features`, {returnObjects: true}),
			{
				description: t(`service.${Services.Database}.page.description`, {returnObjects: true}),
			},
		),
		new Service(
			Services.Other,
			t(`service.${Services.Other}.title`),
			`${Pages.Service}/${Services.Other}`,
			t(`service.${Services.Other}.teaser`),
			t(`service.${Services.Other}.description`),
			t(`service.${Services.Other}.features`, {returnObjects: true}),
			{
				description: t(`service.${Services.Other}.page.description`, {returnObjects: true}),
			},
		),
	];
}