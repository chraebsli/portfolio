import { BsDiscord, BsGithub, BsMastodon, BsStackOverflow } from "react-icons/bs";
import { SocialItem } from "../../type/social";
import { SiMatrix, SiProtonmail } from "react-icons/si";

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
			"mailto:nicholas@nicholas-krebs.ch",
			<SiProtonmail size={70} />,
			"E-Mail",
			"nicholas@nicholas-krebs.ch",
		),
		new SocialItem(
			"https://techhub.social/@chraebsli",
			<BsMastodon size={70} />,
			"Mastodon",
			"@chraebsli@techhub.social",
		),
		new SocialItem(
			"https://discordapp.com/users/603982275021111298",
			<BsDiscord size={70} />,
			"Discord",
			"chraebsli",
		),
		new SocialItem(
			"https://matrix.to/#/@chraebsli:matrix.org",
			<SiMatrix size={70} />,
			"Matrix",
			"@chraebsli:matrix.org",
		),
	];
}
