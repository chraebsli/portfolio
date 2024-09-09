import { Box } from "@mui/material";
import { SocialItem as SMI } from "../../type/social";
import umamiTrack from "../../tools/umamiTrack";

type Props = {
	item: SMI
}
export default function SocialItem({item}: Props) {
	return (
		<Box className="social-item" onClick={() => {umamiTrack("Social", {name: item.name});}}>
			<a href={item.href} target="_blank" rel="noreferrer me">
				<Box className="social-item-icon" sx={{width: "100%", color: "text.primary"}}>
					{item.icon}
				</Box>
				<Box className="social-item-text" sx={{width: "100%", color: "text.primary"}}>
					{item.name}: <br />
					{item.user}
				</Box>
			</a>
		</Box>
	);
}

