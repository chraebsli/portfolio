import Progress from "./Progress";
import ProgressCard from "./ProgressCard";
import { SiCloudflare, SiHeroku, SiJetbrains, SiNetlify, SiVercel } from "react-icons/si";
import StorageIcon from "@mui/icons-material/Storage";

export default function General({ size }: { size: { xs: number; sm: number } }) {
	return (
		<ProgressCard size={ size } icon={ <StorageIcon /> } name={ "General" }>
			<Progress text={ "Cloudflare" } icon={ <SiCloudflare /> } progress={ 90 } />
			<Progress text={ "Heroku" } icon={ <SiHeroku /> } progress={ 70 } />
			<Progress text={ "Netlify" } icon={ <SiNetlify /> } progress={ 70 } />
			<Progress text={ "Vercel" } icon={ <SiVercel /> } progress={ 80 } />
			<Progress text={ "YouTrack & Space" } icon={ <SiJetbrains /> } progress={ 80 } />
		</ProgressCard>
	);
}
