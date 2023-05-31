import React from "react";
import { Stack } from "@mui/material";

export function FormGroup({children}: {children: React.ReactNode}) {
	return (
		<Stack
			direction={{xs: "column", sm: "row"}}
			sx={{justifyContent: "space-between", paddingBottom: "1rem"}}>
			{children}
		</Stack>
	);
}

export function FormElements({children, pos}: {children: React.ReactNode; pos?: "left" | "right"}) {
	return (
		<Stack
			spacing={2}
			sx={{
				width: "100%",
				paddingRight: {sm: pos === "left" ? ".5rem" : 0, xs: 0},
				paddingLeft: {sm: pos === "right" ? ".5rem" : 0, xs: 0},
				paddingBottom: {xs: pos === "left" ? "1rem" : 0, sm: 0},
			}}>
			{children}
		</Stack>
	);
} 