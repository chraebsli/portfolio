import { Box } from "@mui/material";
import { SocialItem as SMI } from "../../type/social";

type Props = {
	item: SMI
}
export default function SocialItem({item}: Props) {
	return (
		<Box className="social-item">
			<a href={item.href} target="_blank" rel="noreferrer">
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

