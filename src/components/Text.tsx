import React from "react";
import { Typography, useTheme } from "@mui/material";

type LineProps = {
	top?: number;
	bottom?: number;
}

export function Line({top = 0, bottom = 0}: LineProps) {
	return (
		<hr style={{border: `2px solid ${useTheme().palette.primary.main}`, marginTop: `${top}rem`, marginBottom: `${bottom}rem`}} />
	);
}

type ImageProps = {
	src: string;
	alt: string;
	height?: number;
	width?: number | string;
}

export function Image({src, alt, height, width}: ImageProps) {
	return <img src={src} alt={alt} height={height} width={width} />;
}

type TitleProps = {
	children: React.ReactNode;
}

export function SectionTitle({children}: TitleProps) {
	return <Typography variant={"h4"}>{children}</Typography>;
}

export function SubSectionTitle({children}: TitleProps) {
	return <Typography variant={"h5"}>{children}</Typography>;
}
