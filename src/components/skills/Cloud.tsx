import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiCloudflare, SiGithubpages, SiHeroku, SiVercel } from "react-icons/si";
import CloudIcon from "@mui/icons-material/Cloud";
import { SvgIcon } from "@mui/material";

export default function Cloud({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<CloudIcon /> as unknown as typeof SvgIcon} name="Cloud">
			<Progress text="Cloudflare" icon={<SiCloudflare />} progress={85} />
			<Progress text="GitHub Pages" icon={<SiGithubpages />} progress={65} />
			<Progress text="Vercel" icon={<SiVercel />} progress={75} />
			<Progress text="Heroku" icon={<SiHeroku />} progress={50} />
		</ProgressCard>
	);
}
