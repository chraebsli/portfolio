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
					"In August 2020, I started my IT apprenticeship and learned a lot about networks, IT security and server administration. Unfortunately, there was only a limited amount of learning content in the area of programming, which is why I occasionally dealt with it in my spare time. Over time, I became increasingly interested in programming and then invested a large part of my free time in continuing my personal education. Currently, in the last semester of my four-year apprenticeship, I have the opportunity to work independently as a computer scientist in my company as an “internship”.",
					"I started programming with smaller Python programs and then created a larger game with Python. Since I wanted to try something new, I came to PHP. Once I got into web development, I started to get more and more involved with JavaScript. Since the beginning of 2023 I have been working very frequently with TypeScript in the frontend and backend. Since 2024, I have also regularly been working with PHP for customer websites.",
					"For full stack web development, I like to work with React and Next.js on the frontend and with Express.js and TypeORM on the backend. For customer websites, I work almost exclusively with the Grav CMS, which was written in PHP, which is why I'm getting more and more involved with it.",
					"I am currently developing a Grav skeleton with themes and plugins for future customer websites, including documentation. At the same time, I maintain existing websites and occasionally accept support requests and various other assignments.",
					"You can find out which services I offer at <a href='https://crabston.ch'>crabston.ch</a>.",

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