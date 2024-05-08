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
					experience: "Ausbildung",
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
					"Ich bin ein junger IT Enthusiast und Webentwickler aus der Schweiz, der sich stark für Webentwicklung und andere Themen im Bereich der IT interessiert. In meiner Freizeit programmiere ich gerne und stärke meine Fähigkeiten. Ausserdem bin ich in einer Brass Band, ein Pfadfinderleiter und im Winter ein Snowboarder.",
					"Im August 2020 startete ich meine Informatikausbildung und lernte dort vieles in den Bereichen Netzwerk, IT-Sicherheit und Serveradministration. Es gab leider nur wenige Lerninhalte im Bereich der Programmierung, weshalb ich mich gelegentlich in meiner Freizeit damit auseinandergesetzt habe. Mit der Zeit interessierte ich mich immer mehr für die Programmierung und investierte anschliessend einen Grossteil meiner Freizeit, um mich privat weiterzubilden. Aktuell habe ich im letzten Semester meiner vierjährigen Ausbildung die Möglichkeit, selbstständig als Informatiker in meiner Firma zu arbeiten, als «Praktikum».",
					"Mit dem Programmieren habe ich mit kleineren Python Programmen angefangen und anschliessend ein grösseres Spiel mit Python realisiert. Da ich danach etwas Neues ausprobieren wollte, kam ich zu PHP. In der Webentwicklung angekommen, fing ich an, mich immer stärker mit JavaScript auseinanderzusetzen. Seit Anfang 2023 beschäftige ich mich sehr stark mit TypeScript im Frontend sowie auch im Backend. Seit 2024 arbeite ich zudem erneut oft mit PHP für Kundenwebsites.",
					"Bei der Fullstack Webentwicklung arbeite ich gerne mit React und Next.js im Frontend und mit Express.js und TypeORM im Backend. Für Kundenwebsites arbeite ich fast ausschliesslich mit dem Grav CMS, welches in PHP geschrieben wurde, weshalb ich mich immer mehr auch damit auseinandersetze.",
					"Derzeit entwickle ich ein Grav Skeleton mit Themes und Plugins für zukünftige Kundenwebsites inklusive Dokumentation. Gleichzeitig pflege ich bestehende Websites und nehme auch gelegentlich Supportanfragen und diverse andere Aufträge an.",
					"Welche Dienstleistungen ich anbiete, findest Du auf <a href='https://crabston.ch'>crabston.ch</a>.",
				],
			},
			experience: {
				title: "Ausbildung",
				description: "Hier ist meine Ausbildung:",
				dates: {
					today: "heute",
				},
				subtitles: {
					crabston: "Selbstständig als Informatiker (parallel zur Lehre)",
					tfbern: "Lehre als Informatiker EFZ",
					gymnasium: "Gymnasium als 9. Klasse",
					school: "7. & 8. Klasse Sekundarstufe",
				},
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