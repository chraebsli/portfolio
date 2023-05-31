import { Translation } from "@type/translation";

export default function en(): Translation {
	return {
		meta: {
			home: {
				title: "Home",
				description: "I am offering different IT services to earn some money besides my school apprenticeship as an IT specialist.",
			},
			about: {
				title: "About us",
				description: "We are Chraebsli IT Services",
			},
			projects: {
				title: "Projects",
				description: "Here you can find some of my projects.",
			},
			services: {
				title: "Services",
				description: "Here you can find some of my services.",
			},
			contact: {
				title: "Contact",
				description: "Contact me if you have any questions or want to work with me on a project.",
			},
			imprint: {
				title: "Imprint",
				description: "Imprint of the website.",
			},
			error: {
				404: {
					title: "Page not found",
					description: "The page you are looking for does not exist.",
				},
			},
		},
		common: {
			project: {
				title: "Projects",
				learnMore: "learn more",
				imageAlt: "Image of project",
				titles: {
					description: "Description",
					website: "Website",
					tools: "Tools",
				},
				fischlehrpfad: {
					title: "Fischlehrpfad Burgdorf",
					description: "The “Fischlehrpfad” in Burgdorf was my first webproject, which I created with a colleague in my 2nd year as an IT Student. It's a small website for a fishing club.",
					page: {
						description: [
							"The “Fischlehrpfad” in Burgdorf was my first major webproject that I was allowed to implement. In the second year of my apprenticeship, I planned and then developed a website for a fishing club on the Emme in Burgdorf with a colleague.",
							"The fishing club wanted a trail where schools and families could learn about the different animal species. Visitors can scan QR codes along the trail with their smartphones and then learn something new at each post.",
							"On the different pages there are images & videos, graphics, quizes, and other dynamic elements that make the website unique.",
							"Since the website is designed to be accessed only via the QR codes, there is only the home page which is indexed. Therefore, there is no navigation to the items, only a list of links.",
						],
						website: [
							"The website was handed over to the fishing club in May 2022 and can be found via the following link: <a href='https://fischlehrpfad.ch'>fischlehrpfad.ch</a>",
							"You can find an overview of the pages here: <a href='https://fischlehrpfad.ch/post'>fischlehrpfad.ch/post</a>",
						],
					},
				},
				portfolio: {
					title: "Portfolio",
					description: "This website is my personal portfolio. In June 2023, I have created a new variant from scratch in a slightly different form. However, a similar version has been around for 1 year longer.",
					page: {
						description: [
							"This website is my personal portfolio. In June 2023, I have created a new variant from scratch in a slightly different form. Previously, it was a combination of a portfolio and a commercial website and was released 1 year earlier.",
							"I created this portfolio without CMS and is constantly being updated and there will always be new functions or pages. These include, for example, the multilingual function or the dark mode. Both were implemented later.",
							"With this portfolio, I want to show my skills and draw attention to myself. I also hope for a job request.",
						],
						website: [
							"You can find my portfolio under the following link: <a href='https://nicholas-krebs.ch'>nicholas-krebs.ch</a>",
						],
					},
				},
				"chraebsli-it-services": {
					title: "Chraebsli IT Services",
					description: "This website is the one you are currently visiting. On this, I offer various IT services. I recreated it from scratch in June 2023, but it existed 1 year before.",
					page: {
						description: [
							"On this website, I offer various IT services to earn some money alongside my apprenticeship as a computer scientist. I don't earn anything as a student, as this is a special course funded by the Canton of Bern (Switzerland).",
							"This website was already published in June 2022, but I recreated it from scratch 1 year later in June 2023. The reason was that this website and my portfolio were a single website, and I didn't want that anymore.",
							"I often update this website and add new features or improve existing ones. Since this page is not managed by a CMS, it consists only of self-written code.",
						],
						website: [
							"Since this is the page you are currently on, it will not be linked.",
						],
					},
				},
				sgrumisberg: {
					title: "Rifle Club Rumisberg",
					description: "The website for the Rumisberg rifle club is the first for a private customer. They want to share important information with a website.",
					page: {
						description: [
							"The rifle club in my village wanted a website to share important information with other members and be more attractive and modern for new members. However, the club didn't have much money, but I went along with it because I saw an opportunity with this project to draw attention to my services.",
							"I created the website with the Open Source CMS Grav, as I already knew it a little from the “Fischlehrpfad” project. I got to know many new functions of the CMS and learned a lot, primarily being independent and creating a project by myself.",
							"Furthermore, I also had plenty of responsibilities and many tasks to do. This includes domain, DNS management, hosting and website maintenance.",
						],
						website: [
							"The website went live at the end of June, but I'm still partly responsible for the content. You can visit it at this link: <a href='https://sgrumisberg.ch'>sgrumisberg.ch</a>",
						],
					},
				},
				mgrumisberg: {
					title: "Brass Band Rumisberg",
					description: "Another web project is the website of the Brass Band Rumisberg, of which I am a member myself. Since we needed a new website anyway, I took on this task.",
					page: {
						description: [
							"Another web project is the website of the Brass Band Rumisberg, of which I am a member myself. Since we needed a new website anyway, I took on this task.",
							"I was working again with the CMS Grav and was able to take over a lot of style and components from the SG Rumisberg website. This made my job a lot easier.",
							"Although I was quite free in how I designed the website, I completely revised the old design and made it more modern and minimalistic. Here I realized how much effort it takes to design and implement a website which should come out uniquely.",
						],
						website: [
							"The website went live in September 2022 and is also managed by me. It can be found at the following link: <a href='https://mgrumisberg.ch'>mgrumisberg.ch</a>",
						],
					},
				},
				"home-dashboard": {
					title: "Home Dashboard",
					description: "The Home Dashboard is a web application, made with Next.js. The application is based on Magic Mirror and was also created for a similar purpose.",
					page: {
						description: [
							"The Home Dashboard is a web application, made with Next.js. The application is based on Magic Mirror and was also created for a similar purpose and is therefore almost identical to the design. However, since I had other ideas to expand, which were very complex with the Magic Mirror, I created an application myself.",
							"The application displays so far the weather of two locations which you can switch, times and calendar entries. It is to be supplemented with a smart home control, and I would also like to add a news feed.",
							"However, I didn't really have time to work on the application and improve it, but it will be worked on and improved again at another time.",
						],
						website: [
							"The repository for the application is on GitHub under the following link: <a href='https://github.com/chraebsli/home-dashboard'>github.com/chraebsli/home-dashboard</a>",
						],
					},
				},
				"coding-crab-blog": {
					title: "Coding Crab Blog",
					description: "The Coding Crab Blog is my blog hosted on GitHub Pages. It was created with Jekyll, a Ruby Gem. It contains my blogs and instructions about IT.",
					page: {
						description: [
							"The Coding Crab Blog is my blog hosted on GitHub Pages. It was created with Jekyll, a Ruby Gem. I used the «Minimal Mistakes Theme» as a template for the blog. On the blog are my blogs and instructions about IT.",
							"With this blog, I mainly want to share my knowledge and create instructions for programming. However, there is also content on other topics.",
							"I will only update and improve this side project in between. So, this project is rather inactive at the moment.",
						],
						website: [
							"You can find the blog at this link: <a href='https://blog.chraebsli.dev'>blog.chraebsli.dev</a>",
						],
					},
				},
			},
			service: {
				title: "Services",
				learnMore: "learn more",
				illustration: "illustration",
				includedFeatures: "Following services are included:",
				sendRequest: "Send Request",
				website: {
					title: "Website",
					teaser: "Do you need a website for your association, startup or for a personal purpose?",
					description: "I will create a website for you that meets your needs and has a modern design. I can also register a suitable domain and host your website and email.",
					features: ["professional website", "responsive design", "optimized SEO", "Domain, Hosting & Email"],
					page: {
						description: [
							"I create the website for you, your association or startup that meets your needs at a reasonable price. The website and its content can later be easily managed by you using a CMS. This allows you to create, edit and delete content such as text, media (images, videos ...), tables and more without much experience with websites and IT.",
							"In the admin panel, you can also see statistics showing how many times your page has been viewed. With optimized SEO, you will automatically be better found in Google search results without having to spend money on advertising.",
							"If you wish, I can register a suitable domain and host your website and email. I also offer training courses that teach you how to manage the website and how the content has a positive impact on visitors. ",
						],
					},
				},
				application: {
					title: "Application",
					teaser: "Do you need your own application for your company that meets your needs?",
					description: "I will create a modern web application for you that meets all your wishes and is personalized for your concerns. This can be for smartphones, desktop devices and/or web based.",
					features: ["modern application", "easy to use", "easily expandable", "secure data"],
					page: {
						description: [
							"I will create a modern web application for you that meets all your needs and is personalized for your concerns. This can be expanded later and is easy to use for the user. It can be designed for smartphones and/or desktop devices, or it can be web-based.",
							"The application can be a time tracking system, online shop, inventory system or even your own idea. The application can come with a login process, administration panels, logging and other features that you determine.",
						],
					},
				},
				database: {
					title: "Database",
					teaser: "Do you need a new database or want to migrate an existing database?",
					description: "I can create a database for you according to your wishes or migrate an existing one to another system. This can be a SQL or NoSQL DB.",
					features: [
						"database system",
						"considered structure",
						"easy to manage",
						"quick queries",
					],
					page: {
						description: [
							"I can create a database for you according to your wishes or migrate an existing one to another system. This can be a SQL or NoSQL DB.",
							"I would also be happy to advise you on which database makes the most sense for your system and what advantages and disadvantages they have.",
						],
					},
				},
				other: {
					title: "IT service",
					teaser: "Do you need another IT service or do you have a question about IT?",
					description: "I also offer you other IT services or answer your questions about IT. The possibilities are unlimited. Contact me and we will find a solution.",
					features: [
						"domain management & transfer",
						"hosting & email",
						"support",
						"IT consulting & training",
					],
					page: {
						description: [
							"I also offer you other IT services or answer your questions about IT. Contact me and we will find a solution.",
							"Services may include but are not limited to domain management & transfer, support, IT consulting, training or something else. The possibilities are endless.",
						],
					},
				},
			},
		},
		components: {
			header: {
				title: "chraebsli IT-Services",
				links: {
					about: "About",
					services: "Services",
					projects: "Projects",
					contact: "Contact",
				},
			},
			footer: {
				copyright: "chraebsli IT-Services",
				about: {
					self: "About",
					home: "Home",
					about: "About us",
					imprint: "Imprint",
					contact: "Contact",
				},
				services: {
					self: "Services",
					website: "Website",
					application: "Application",
					database: "Database",
					other: "Other",
				},
			},
		},
		pages: {
			error: {
				404: {
					title: "Error 404 - This page does not exist",
					description: "The page you are looking for does not exist.",
				},
			},
			home: {
				welcome: "Welcome to chraebsli IT-Services!",
				subWelcome: "- all different IT-Services -",
				description: "I offer various IT services to earn some money alongside my school apprenticeship as a computer scientist.",
				sections: {
					servicesTitle: "Services",
					servicesDescription: "I offer following services:",
					projectsTitle: "Projects",
					projectsDescription: "These are some of my projects:",
				},
			},
			about: {
				title: "About us",
				description: [
					"We are Chraebsli IT Services and we offer various IT services. I'm an IT apprentice in my 3rd year and would like to earn something alongside my apprenticeship because I don't have a salary. This is because my apprenticeship is special and is financed by the canton of Bern (Switzerland).",
					"I would like to earn money with these services, but above all I would like to enable smaller associations and start-ups to present themselves on the Internet without having to spend a lot of money. I try to keep the costs for hosting, email, administration, SEO, ... as low as possible to appear more attractive. Furthermore, I also hope that my projects and experiences will give me a higher value later on and that I can get better jobs.",
					"I don't work on these projects in my full-time education. This means that in my spare time, I do this alongside other hobbies and on vacation. Since I'm truly interested in IT and programming, this is like another hobby for me.",
					"You can find my personal portfolio at <a href='https://nicholas-krebs.ch'>nicholas-krebs.ch</a>.",
				],
			},
			contact: {
				title: "Contact",
				contactMe: "If you have any questions or suggestions, please contact me at the following email address: <a href='mailto:contact@chraebsli.dev'>contact@chraebsli.dev</a>. You can also contact me using the contact form. <br /> I will get back to you within 1-2 business days.",
				form: {
					firstName: "Firstname",
					lastName: "Lastname",
					email: "E-Mail address",
					service: "Service",
					message: "Message",
					send: "Send",
					required: "* required",
					success: "Thanks for your message! I will get back to you within 1-2 business days.",
				},
			},
			imprint: {
				title: "Imprint",
				operator: "Developer",
				operatorText: "This website is getting developed by:",
				contactMe: "If you have any questions, please contact me via the e-mail address below.",
				resources: "Resources",
				resourcesText: "Images, Videos, and other resources are used from the following sources:",
				links: {
					illustrations: "Illustrations",
					icons: "Icons",
				},
			},
		},
	};
}