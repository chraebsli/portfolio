import { Tags } from "@type/project-tag";

export enum Projects {
	Fischlehrpfad = "fischlehrpfad",
	Portfolio = "portfolio",
	ChraebsliItServices = "chraebsli-it-services",
	MGRumisberg = "mgrumisberg",
	SGRumisberg = "sgrumisberg",
	HomeDashboard = "home-dashboard",
	CodingCrabBlog = "coding-crab-blog",
}

export default class Project {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly description: string[],
		public readonly href: string,
		public readonly tags: Tags[],
		public readonly page: {
			wakaTimeBadge: string,
			description: string[],
			website: string[],
			tools: string[],
			link?: string
		},
	) {}
}
