export type Translation = {
	meta: PageMeta,
	components: {
		header: {
			title: string,
			links: {
				welcome: string,
				about: string,
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
	},
}

type PageMeta = {
	title: string,
	description: string,
}
