import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTypescript, SiVuedotjs } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";

export default function Frontend({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<CodeIcon />} name={"Frontend"}>
			<Progress text={"HTML"} icon={<SiHtml5 />} progress={90} />
			<Progress text={"CSS"} icon={<SiCss3 />} progress={85} />
			<Progress text={"JavaScript"} icon={<SiJavascript />} progress={80} />
			<Progress text={"TypeScript"} icon={<SiTypescript />} progress={80} />
			<Progress text={"React"} icon={<SiReact />} progress={75} />
			<Progress text={"Vue"} icon={<SiVuedotjs />} progress={50} />
		</ProgressCard>
	);
}
