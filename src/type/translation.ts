export type Translation = {
	meta: PageMeta,
	components: {
		header: {
			title: string,
			links: {
				about: string,
				skills: string,
				stats: string,
				social: string,
			},
		},
		footer: {
			copyright: string,
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
