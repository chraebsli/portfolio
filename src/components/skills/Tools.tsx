import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiGit, SiGithub, SiGrav, SiJira, SiLinux, SiPostgresql } from "react-icons/si";
import ConstructionIcon from "@mui/icons-material/Construction";
import { SvgIcon } from "@mui/material";

export default function Tools({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<ConstructionIcon /> as unknown as typeof SvgIcon} name="Tools">
			<Progress text="Linux" icon={<SiLinux />} progress={60} />
			<Progress text="Git" icon={<SiGit />} progress={75} />
			<Progress text="Github" icon={<SiGithub />} progress={80} />
			<Progress text="Jira" icon={<SiJira />} progress={65} />
			<Progress text="PostgreSQL" icon={<SiPostgresql />} progress={55} />
			<Progress text="Grav CMS" icon={<SiGrav />} progress={75} />
		</ProgressCard>
	);
}
