import { Translation } from "@type/translation";

export default function de(): Translation {
	return {
		meta: {
			title: "Portfolio Nicholas Krebs",
			description: "Ich bin ein Informatiklehrling im 3. Jahr und interessiere mich für Webentwicklung & Programmierung.",
		},
		components: {
			header: {
				title: "Nicholas Krebs",
				links: {
					welcome: "Willkommen",
					about: "Über",
					skills: "Skills",
					stats: "Statistiken",
					social: "Socials",
				},
			},
			footer: {
				copyright: "Nicholas Krebs",
			},
		},
		// TODO: Write text
		sections: {
			welcome: {
				welcome: "Hey, ich bin Nicholas Krebs/ «chraebsli»",
				description: "Ich bin ein Informatiklehrling im 3. Jahr und interessiere mich für Webentwicklung & Programmierung.",
			},
			about: {
				title: "Über mich",
				description: [
					"Ich bin ein Informatiklehrling im 3. Jahr an der Technischen Fachschule in Bern und interessiere mich sehr für die Informatik und vor allem für Webentwicklung & Programmierung. Daher arbeite ich auch gerne in meiner Freizeit an IT Projekten. Neben der Entwicklung leite ich noch eine Gruppe Pfadfinder und spiele in einer Brass Band.",
					"Am liebsten programmiere ich mit React und Next.js im Frontend, Express.js und TypeORM im Backend und als Programmiersprache dazu passend TypeScript. Jedoch kenne ich mich auch mit Python und PHP aus, aber verwende diese nicht so oft.",
					"Um neben meiner Ausbildung noch etwas zu verdienen, arbeite ich zusätzlich auch für private Kunden. Dies hat der Grund, weil meine Ausbildung schulisch basiert ist und vom Kanton Bern finanziert wird. Dadurch verdiene ich kein Geld während meiner Lehre.",
					"Welche Dienstleistungen ich anbiete, findest du auf <a href='https://chraebsli.dev'>chraebsli.dev</a>.",
				],
			},
			skills: {
				title: "Skills",
				description: "",
			},
			stats: {
				title: "Statistiken",
				description: "",
			},
			social: {
				title: "Socials",
				description: "",
			},
		},
	};
}