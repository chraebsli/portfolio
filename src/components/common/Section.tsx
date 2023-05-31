import React from "react";

type Props = {
	name: string,
	children: React.ReactNode
}
export default function Section({name, children}: Props) {
	return (
		<section id={name} className={name}>
			{children}
		</section>
	);
}