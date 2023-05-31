import React from "react";
import Meta from "./Meta";

type Props = {
	page: string,
	className?: string,
	children: React.ReactNode
}
export default function Page({page, className, children}: Props) {
	return (
		<>
			<Meta page={page} />
			<main className={`${page.toLowerCase()} ${className}`}>
				{children}
			</main>
		</>
	);
}