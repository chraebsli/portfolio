import { BsEnvelopeOpenFill, BsGithub, BsInstagram, BsLinkedin, BsMastodon, BsStackOverflow } from "react-icons/bs";
import { SocialItem } from "../../type/social";

export default function socialMediaList(): SocialItem[] {
	return [
		new SocialItem(
			"https://github.com/chraebsli",
			<BsGithub size={70} />,
			"Github",
			"chraebsli",
		),
		new SocialItem(
			"https://stackoverflow.com/users/15230022/chraebsli",
			<BsStackOverflow size={70} />,
			"Stack Overflow",
			"chraebsli",
		),
		new SocialItem(
			"https://techhub.social/@chraebsli",
			<BsMastodon size={70} />,
			"Mastodon",
			"@chraebsli@techhub.social",
		),
		new SocialItem(
			"https://www.linkedin.com/in/nicholas-krebs/",
			<BsLinkedin size={70} />,
			"LinkedIn",
			"nicholas-krebs",
		),
		new SocialItem(
			"https://www.instagram.com/chraebsli.dev/",
			<BsInstagram size={70} />,
			"Instagram",
			"chraebsli.dev",
		),
		new SocialItem(
			"mailto:contact@nicholas-krebs.ch",
			<BsEnvelopeOpenFill size={70} />,
			"E-Mail",
			"contact@nicholas-krebs.ch",
		),
	];
}
