import { Translation } from "@type/translation";

export default function de(): Translation {
	return {
		meta: {
			title: "Nicholas Krebs",
			description: "IT Enthusiast & Web Entwickler aus der Schweiz",
		},
		components: {
			header: {
				title: "Nicholas Krebs",
				links: {
					welcome: "Willkommen",
					about: "Über",
					skills: "Skills",
					stats: "Statistik",
					social: "Socials",
				},
			},
			footer: {
				copyright: "Nicholas Krebs",
			},
			error: {
				404: {
					title: "Error 404 - Seite nicht gefunden",
					description: "Die Seite, die du suchst, existiert nicht.",
				},
			},
		},
		sections: {
			welcome: {
				welcome: "Hey, ich bin Nicholas/ «chraebsli»",
				description: "IT Enthusiast & Web Entwickler aus der Schweiz",
			},
			about: {
				title: "Über mich",
				description: [
					"Ich bin ein junger IT Enthusiast und Webentwickler aus der Schweiz, der sich wirklich für Webentwicklung und andere IT Themen interessiert. In meiner Freizeit programmiere ich gerne und stärke meine Fähigkeiten. Ausserdem bin ich in einer Brass Band, ein Pfadfinderleiter und im Winter ein Snowboarder.",
					"Meine Lieblingsframeworks sind React und Next.js für das Frontend, Express.js und TypeORM für das Backend und TypeScript als Programmiersprache. Allerdings kenne ich mich auch mit Python und PHP aus, nutze sie aber nicht so oft.",
					"Derzeit arbeite ich an einigen Webprojekten und pflege Websites für meine Kunden.",
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