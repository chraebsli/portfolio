import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiHtml5, SiPhp, SiPython, SiTypescript } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";
import { SvgIcon } from "@mui/material";

export default function Languages({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<CodeIcon /> as unknown as typeof SvgIcon} name="Languages">
			<Progress text="HTML/ CSS" icon={<SiHtml5 />} progress={90} />
			<Progress text="JavaScript/ TypeScript" icon={<SiTypescript />} progress={70} />
			<Progress text="PHP" icon={<SiPhp />} progress={50} />
			<Progress text="Python" icon={<SiPython />} progress={40} />
		</ProgressCard>
	);
}
