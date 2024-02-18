import React from "react";
import { Card } from "@mui/material";
import { Line } from "./Text";

type Props = {
	name: string,
	noCard?: boolean
	children: React.ReactNode,
}
export default function Section({name, noCard, children}: Props) {
	return (
		<section id={name}>
			{noCard ? children : <Card sx={{padding: "2rem"}}>{children}</Card>}
			<Line top={5} bottom={5} />
		</section>
	);
}