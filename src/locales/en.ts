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
					"I am a young IT enthusiast and web developer from Switzerland who is truly interested in web development and other topics in the field of IT. In my spare time, I enjoy programming and strengthening my skills. I'm also in a brass band, a scout leader and a snowboarder in the winter.",
					"In August 2020, I started my IT apprenticeship and learned a lot about networks, IT security and server administration. Unfortunately, there was only a limited amount of learning content in the area of programming, which is why I occasionally dealt with it in my spare time. Over time, I became increasingly interested in programming and then invested a large part of my free time in continuing my personal education. Now I am self-employed and, with the support of my father, I founded my own company, Crabston GmbH. On the website <a href='https://crabston.ch/?utm_source=nicholas-krebs.ch&utm_medium=portfolio'>crabston.ch</a>, you can find the services I offer and the projects I've already completed.",
					"I started programming with smaller Python programs and then created a larger game with Python. Since I wanted to try something new, I came to PHP. Once I got into web development, I started to get more and more involved with JavaScript. Since the beginning of 2023 I have been working very frequently with TypeScript in the frontend and backend.",
					"For full stack web development, I like to work with React and Next.js on the frontend and with Express.js and TypeORM on the backend. For websites, I work exclusively with the Grav, a flat-file CMS written in PHP using Twig as a templating engine, which is why I'm getting more and more involved with it.",
					"I am currently developing <a href='https://usehadron.dev/?utm_source=nicholas-krebs.ch&utm_medium=portfolio'>Hadron</a>, a Grav skeleton with theme, and plugins for customer websites. At the same time, I maintain existing websites and occasionally accept support requests and various other jobs.",
				],
			},
			experience: {
				title: "Education",
				description: "Here is my education:",
				dates: {
					today: "today",
				},
				subtitles: {
					crabston: "Self-employed as a web developer",
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