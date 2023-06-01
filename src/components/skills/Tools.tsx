import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiGit, SiGithub, SiJira, SiPostgresql, SiVisualstudiocode, SiWebstorm } from "react-icons/si";
import ConstructionIcon from "@mui/icons-material/Construction";
import { SvgIcon } from "@mui/material";

export default function Tools({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<ConstructionIcon /> as unknown as typeof SvgIcon} name="Tools">
			<Progress text="Git" icon={<SiGit />} progress={70} />
			<Progress text="Github" icon={<SiGithub />} progress={90} />
			<Progress text="Jira" icon={<SiJira />} progress={80} />
			<Progress text="VS Code" icon={<SiVisualstudiocode />} progress={85} />
			<Progress text="Webstorm" icon={<SiWebstorm />} progress={75} />
			<Progress text="PostgreSQL" icon={<SiPostgresql />} progress={70} />
		</ProgressCard>
	);
}
