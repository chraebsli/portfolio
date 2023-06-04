import React from "react";
import { Card } from "@mui/material";

type Props = {
	name: string,
	noCard?: boolean
	noindex?: boolean
	children: React.ReactNode,
}
export default function Section({name, noCard, noindex, children}: Props) {
	return (
		<section id={name} className={noindex ? "noIndex" : undefined}>
			{noCard ? children : <Card sx={{padding: "2rem"}}>{children}</Card>}
		</section>
	);
}