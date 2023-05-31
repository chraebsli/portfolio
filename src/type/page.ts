export enum Pages {
	Home = "/",
	NotFound404 = "*",
	Services = "/services",
	Service = "/service",
	ServiceId = "/service/:service",
	Projects = "/projects",
	Project = "/project",
	ProjectId = "/project/:project",
	About = "/about",
	Contact = "/contact",
	Imprint = "/imprint",
}

export enum Paths {
	Home = "/home",
	NotFound404 = "/error/404",
	Media = "/media",
	Assets = "/assets",
}

export const PageUrl = window.location.origin;
