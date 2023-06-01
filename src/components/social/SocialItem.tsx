import React from "react";
import { Box } from "@mui/material";
import { SocialItem as SMI } from "../../type/social";

type Props = {
	item: SMI
}
export default function SocialItem({item}: Props) {
	return (
		<Box className="social-media-item">
			<a href={item.href} target="_blank" rel="noreferrer">
				<Box className="social-media-item-icon" sx={{color: "text.primary"}}>
					{item.icon}
				</Box>
				<Box className="social-media-item-text" sx={{color: "text.primary"}}>
					{item.name}: <br />
					{item.user}
				</Box>
			</a>
		</Box>
	);
}

