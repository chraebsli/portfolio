export enum Services {
	Website = "website",
	Application = "application",
	Database = "database",
	Other = "other",
}

export default class Service {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly href: string,
		public readonly teaser: string,
		public readonly description: string,
		public readonly features: string[],
		public readonly page: {
			description: string[],
		},
	) {}
}
