import React from "react";
import { Typography, useTheme } from "@mui/material";

type LineProps = {
	top?: number;
	bottom?: number;
	width?: string;
	primary?: boolean;
}

export function Line({top, bottom, width, primary = true}: LineProps) {
	const color = primary ? useTheme().palette.primary.main : useTheme().palette.secondary.main;

	return (
		<hr
			style={{
				border: `2px solid ${color}`,
				marginTop: `${top}rem` ?? 0,
				marginBottom: `${bottom}rem` ?? 0,
				width: width ?? "-webkit-fill-available",
			}}
		/>
	);
}

type ImageProps = {
	src: string;
	alt: string;
	height?: number;
	width?: number | string;
	sx?: React.CSSProperties,
	m?: boolean,
	r?: boolean
}

export function Image({src, alt, height, width, sx, m, r}: ImageProps) {
	return <img
		className={r ? "r" : ""} src={src} alt={alt} height={height} width={width}
		style={{marginBottom: m ? "2rem" : 0, ...sx}} />;
}

type TitleProps = {
	children: React.ReactNode;
}

export function PageTitle({children}: TitleProps) {
	return <Typography variant={"h4"}>{children}</Typography>;
}

export function SectionTitle({children}: TitleProps) {
	return <Typography variant={"h5"}>{children}</Typography>;
}
