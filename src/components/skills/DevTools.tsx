import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiGit, SiGithub, SiPhpstorm, SiVisualstudiocode, SiWebstorm } from "react-icons/si";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function DevTools({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<ConstructionIcon />} name={"Dev-Tools"}>
			<Progress text={"Git"} icon={<SiGit />} progress={70} />
			<Progress text={"Github"} icon={<SiGithub />} progress={90} />
			<Progress text={"VS Code"} icon={<SiVisualstudiocode />} progress={80} />
			<Progress text={"Webstorm"} icon={<SiWebstorm />} progress={70} />
			<Progress text={"PHPstorm"} icon={<SiPhpstorm />} progress={70} />
		</ProgressCard>
	);
}
