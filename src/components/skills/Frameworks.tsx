import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiExpress, SiJekyll, SiMui, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { SvgIcon } from "@mui/material";

export default function Frameworks({size}: {size: {xs: number; sm: number}}) {
	return (
		<ProgressCard size={size} icon={<AccountTreeIcon /> as unknown as typeof SvgIcon} name="Frameworks">
			<Progress text="Node.js" icon={<SiNodedotjs />} progress={65} />
			<Progress text="React" icon={<SiReact />} progress={75} />
			<Progress text="Next.js" icon={<SiNextdotjs />} progress={65} />
			<Progress text="MUI" icon={<SiMui />} progress={80} />
			<Progress text="Express" icon={<SiExpress />} progress={60} />
			<Progress text="Jekyll" icon={<SiJekyll />} progress={40} />
		</ProgressCard>
	);
}
