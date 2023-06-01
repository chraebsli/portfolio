import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiCss3, SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";
import { SvgIcon } from "@mui/material";

export default function Languages({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<CodeIcon /> as unknown as typeof SvgIcon} name={"Languages"}>
			<Progress text={"HTML"} icon={<SiHtml5 />} progress={90} />
			<Progress text={"CSS"} icon={<SiCss3 />} progress={85} />
			<Progress text={"JavaScript"} icon={<SiJavascript />} progress={80} />
			<Progress text={"TypeScript"} icon={<SiTypescript />} progress={80} />
		</ProgressCard>
	);
}
