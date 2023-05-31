import { useTranslation } from "react-i18next";
import Project, { Projects } from "../../type/project";
import { Tags } from "../../type/project-tag";
import { Pages } from "../../type/page";

export default function projectsList(): Project[] {
	const {t} = useTranslation("common");

	return [
		new Project(
			Projects.Fischlehrpfad,
			t(`project.${Projects.Fischlehrpfad}.title`),
			t(`project.${Projects.Fischlehrpfad}.description`),
			`${Pages.Project}/${Projects.Fischlehrpfad}`,
			[Tags.Website, Tags.Client, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf-user",
				description: t(`project.${Projects.Fischlehrpfad}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.Fischlehrpfad}.page.website`, {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://fischlehrpfad.ch",
			},
		),
		new Project(
			Projects.Portfolio,
			t(`project.${Projects.Portfolio}.title`),
			t(`project.${Projects.Portfolio}.description`),
			`${Pages.Project}/${Projects.Portfolio}`,
			[Tags.Website, Tags.Personal, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/portfolio",
				description: t(`project.${Projects.Portfolio}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.Portfolio}.page.website`, {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
				link: "https://nicholas-krebs.ch",
			},
		),
		new Project(
			Projects.ChraebsliItServices,
			t(`project.${Projects.ChraebsliItServices}.title`),
			t(`project.${Projects.ChraebsliItServices}.description`),
			`${Pages.Project}/${Projects.ChraebsliItServices}`,
			[Tags.Website, Tags.Personal, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/chraebsli-it-services",
				description: t(`project.${Projects.ChraebsliItServices}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.ChraebsliItServices}.page.website`, {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
			},
		),
		new Project(
			Projects.SGRumisberg,
			t(`project.${Projects.SGRumisberg}.title`),
			t(`project.${Projects.SGRumisberg}.description`),
			`${Pages.Project}/${Projects.SGRumisberg}`,
			[Tags.Website, Tags.Client, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/sgrumisberg.ch",
				description: t(`project.${Projects.SGRumisberg}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.SGRumisberg}.page.website`, {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://sgrumisberg.ch",
			},
		),
		new Project(
			Projects.MGRumisberg,
			t(`project.${Projects.MGRumisberg}.title`),
			t(`project.${Projects.MGRumisberg}.description`),
			`${Pages.Project}/${Projects.MGRumisberg}`,
			[Tags.Website, Tags.Client, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/mgrumisberg.ch",
				description: t(`project.${Projects.MGRumisberg}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.MGRumisberg}.page.website`, {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://mgrumisberg.ch",
			},
		),
		new Project(
			Projects.HomeDashboard,
			t(`project.${Projects.HomeDashboard}.title`),
			t(`project.${Projects.HomeDashboard}.description`),
			`${Pages.Project}/${Projects.HomeDashboard}`,
			[Tags.Webapp, Tags.Personal, Tags.Development],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/home-dashboard",
				description: t(`project.${Projects.HomeDashboard}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.HomeDashboard}.page.website`, {returnObjects: true}),
				tools: ["React", "Node.JS", "Next.JS", "TypeScript", "MUI"],
				link: "https://github.com/chraebsli/home-dashboard",
			},
		),
		new Project(
			Projects.CodingCrabBlog,
			t(`project.${Projects.CodingCrabBlog}.title`),
			t(`project.${Projects.CodingCrabBlog}.description`),
			`${Pages.Project}/${Projects.CodingCrabBlog}`,
			[Tags.Website, Tags.Personal, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/coding-crab-blog",
				description: t(`project.${Projects.CodingCrabBlog}.page.description`, {returnObjects: true}),
				website: t(`project.${Projects.CodingCrabBlog}.page.website`, {returnObjects: true}),
				tools: ["Ruby", "Jekyll", "SASS", "GitHub Pages"],
				link: "https://blog.chraebsli.dev",
			},
		),
	];
}
