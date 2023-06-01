import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiExpress, SiJekyll, SiMui, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";
import { SvgIcon } from "@mui/material";

export default function Frameworks({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<CodeIcon /> as unknown as typeof SvgIcon} name={"Frameworks"}>
			<Progress text={"React"} icon={<SiReact />} progress={80} />
			<Progress text={"MUI"} icon={<SiMui />} progress={75} />
			<Progress text={"Express"} icon={<SiExpress />} progress={60} />
			<Progress text={"Next.js"} icon={<SiNextdotjs />} progress={75} />
			<Progress text={"Node.js"} icon={<SiNodedotjs />} progress={70} />
			<Progress text={"Jekyll"} icon={<SiJekyll />} progress={50} />
		</ProgressCard>
	);
}
