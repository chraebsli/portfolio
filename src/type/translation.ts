export type Translation = {
	meta: PageMeta,
	components: {
		header: {
			title: string,
			links: {
				welcome: string,
				about: string,
				skills: string,
				stats: string,
				social: string,
			},
		},
		footer: {
			copyright: string,
		},
		error: {
			404: {
				title: string,
				description: string,
			}
		},
	},
	sections: {
		welcome: {
			welcome: string,
			description: string,
		},
		about: {
			title: string,
			description: string[],
		},
		skills: {
			title: string,
			description: string,
		},
		stats: {
			title: string,
			description: string,
		},
		social: {
			title: string,
			description: string,
		},
	},
}

type PageMeta = {
	title: string,
	description: string,
}
