import { Translation } from "@type/translation";

export default function en(): Translation {
	return {
		// TODO: Write text
		meta: {
			title: "Portfolio Nicholas Krebs",
			description: "Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als Informatiker etwas Geld zu verdienen.",
		},
		components: {
			header: {
				title: "Nicholas Krebs",
				links: {
					welcome: "Welcome",
					about: "About",
				},
			},
			footer: {
				copyright: "Nicholas Krebs",
			},
		},
		// TODO: Write text
		sections: {
			welcome: {
				welcome: "Welcome to chraebsli IT-Services!",
				description: "Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als Informatiker etwas Geld zu verdienen.",
			},
			about: {
				title: "Über uns",
				description: [
					"Wir sind Chraebsli IT Services und bieten verschiedene IT Dienstleistungen an. Ich bin Informatiklehrling im 3. Lehrjahr und möchte neben meiner Ausbildung etwas verdienen, da ich keinen Lohn habe. Dies hat der Grund, da meine Ausbildung speziell ist und vom Kanton finanziert wird.",
					"Ich möchte mit diesen Dienstleistungen zwar Geld verdienen, aber vor allem auch kleineren Vereinen und Startups ermöglichen, sich im Internet zu zeigen, ohne viel Geld ausgeben zu müssen. Dadurch probiere ich Kosten für Hosting, Email, Verwaltung, SEO, ... möglichst tief zu halten und dadurch attraktiver zu wirken. Dazu hoffe ich, dass ich später durch meine Projekte und Erfahrungen einen höheren Wert habe und bessere Stellen bekommen kann.",
					"Ich arbeite an diesen Projekten nicht in meiner Vollzeitausbildung. Das heisst, dass ich in der Freizeit neben anderen Hobbys und in den Ferien mache. Da ich mich sehr für IT und Programmierung interessiere, ist dies sozusagen ein weiteres Hobby.",
					"Mein persönliches Portfolio findest du unter <a href='https://nicholas-krebs.ch'>nicholas-krebs.ch</a>.",
				],
			},
		},
	};
}