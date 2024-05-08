import { Translation } from "@type/translation";

export default function en(): Translation {
	return {
		meta: {
			title: "Nicholas Krebs",
			description: "IT enthusiast & web developer from Switzerland",
		},
		components: {
			header: {
				title: "Nicholas Krebs",
				links: {
					welcome: "Welcome",
					about: "About",
					experience: "Education",
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
				welcome: "Hey, I'm Nicholas/ «chraebsli»",
				description: "IT enthusiast & web developer from Switzerland",
			},
			about: {
				title: "About me",
				description: [
					"I’m a young IT enthusiast & web developer from Switzerland who is truly interested in web development and other IT stuff. In my spare time, I like to code and strengthen my skills. Furthermore, I’m in a brass band, a scout leader, and a snowboarder in winter.",
					"My favorite frameworks are React and Next.js for the frontend, Express.js and TypeORM for the backend, and TypeScript as the programming language. Nevertheless, I'm also familiar with Python and PHP, but don't use them that often.",
					"Currently, I'm working on some web projects and maintaining a few websites for my clients.",
					"You can find out which services I offer at <a href='https://chraebsli.dev'>https://chraebsli.dev</a>.",
				],
			},
			experience: {
				title: "Education",
				description: "Here is my education:",
				dates: {
					today: "today",
				},
				subtitles: {
					crabston: "Self-employed as a computer scientist (parallel to apprentice)",
					tfbern: "Apprenticeship as a computer specialist EFZ",
					gymnasium: "Gymnasium as 9th grade",
					school: "Secondary school 7th & 8th grade",
				},
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