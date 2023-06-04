import { Translation } from "@type/translation";

export default function de(): Translation {
	return {
		meta: {
			title: "Nicholas Krebs",
			description: "Ich bin ein Informatiklehrling im 3. Jahr und interessiere mich für Webentwicklung & Programmierung.",
		},
		components: {
			header: {
				title: "Nicholas Krebs",
				links: {
					about: "Über",
					skills: "Skills",
					stats: "Statistik",
					social: "Socials",
				},
			},
			footer: {
				copyright: "Nicholas Krebs",
			},
		},
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
					"Welche Dienstleistungen ich anbiete, findest du auf <a href='https://chraebsli.dev'>https://chraebsli.dev</a>.",
				],
			},
			skills: {
				title: "Skills",
				description: "Das sind meine technischen Skills:",
			},
			stats: {
				title: "Statistik",
				description: "Hier eine Statistik von meinen Coding Aktivitäten in den vergangenen 30 Tagen:",
			},
			social: {
				title: "Socials",
				description: "Mich gibt es auch hier:",
			},
		},
	};
}