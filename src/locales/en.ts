import { Translation } from "@type/translation";

export default function en(): Translation {
	return {
		meta: {
			title: "Nicholas Krebs",
			description: "I am a 3rd year IT student interested in web development & programming.",
		},
		components: {
			header: {
				title: "Nicholas Krebs",
				links: {
					welcome: "Welcome",
					about: "About",
					skills: "Skills",
					stats: "Stats",
					social: "Socials",
				},
			},
			footer: {
				copyright: "Nicholas Krebs",
			},
			error: {
				404: {
					title: "Error 404 - Page not found",
					description: "The page you are looking for does not exist.",
				},
			},
		},
		sections: {
			welcome: {
				welcome: "Hey, I'm Nicholas Krebs/ «chraebsli»",
				description: "I am a 3rd year IT student interested in web development & programming.",
			},
			about: {
				title: "About me",
				description: [
					"I am a 3rd year IT student at the “Technische Fachschule” in Bern, and I am very interested in IT and especially in web development & programming. That's why I like to work on IT projects in my spare time. In addition to development, I lead a group of scouts and play in a brass band.",
					"I prefer to program with React and Next.js in the frontend, Express.js and TypeORM in the backend and TypeScript as the programming language. Nevertheless, I'm also familiar with Python and PHP, but don't use them that often.",
					"To earn something alongside my apprenticeship, I also work for private clients. This is because my training is school-based and financed by the canton of Bern. As a result, I do not earn any money during my apprenticeship.",
					"You can find out which services I offer at <a href='https://chraebsli.dev'>https://chraebsli.dev</a>.",
				],
			},
			skills: {
				title: "Skills",
				description: "These are my technical skills:",
			},
			stats: {
				title: "Statistics",
				description: "Here is a statistic of my coding activities over the past 30 days:",
			},
			social: {
				title: "Socials",
				description: "You can find me also here:",
			},
		},
	};
}