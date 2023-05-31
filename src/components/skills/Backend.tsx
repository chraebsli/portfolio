import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiExpress, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiTypescript } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";
import { SvgIcon } from "@mui/material";

export default function Backend({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<CodeIcon /> as unknown as typeof SvgIcon} name={"Backend"}>
			<Progress text={"TypeScript"} icon={<SiTypescript />} progress={80} />
			<Progress text={"Express"} icon={<SiExpress />} progress={70} />
			<Progress text={"Next.js"} icon={<SiNextdotjs />} progress={70} />
			<Progress text={"NodeJS"} icon={<SiNodedotjs />} progress={60} />
			<Progress text={"PHP"} icon={<SiPhp />} progress={50} />
			<Progress text={"SQL"} icon={<SiMysql />} progress={80} />
		</ProgressCard>
	);
}
