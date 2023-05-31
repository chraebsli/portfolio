export enum Tags {
	Development = "development",
	Published = "published",
	Website = "website",
	Webapp = "webapp",
	//Server = "server",
	//Api = "api",
	Other = "other",
	Personal = "personal",
	Client = "client",
}

export enum TagColors {
	Development = "warning",
	Published = "success",
	Client = "error",
	Personal = "primary",
	Website = "primary",
	Webapp = "primary",
	Default = "default",
}

export const Tags_TagColors: Record<Tags, TagColors> = {
	[Tags.Development]: TagColors.Development,
	[Tags.Published]: TagColors.Published,
	[Tags.Client]: TagColors.Client,
	[Tags.Personal]: TagColors.Personal,
	[Tags.Website]: TagColors.Website,
	[Tags.Webapp]: TagColors.Webapp,
	[Tags.Other]: TagColors.Default,
};
