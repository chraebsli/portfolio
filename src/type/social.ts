import React from "react";

export class SocialItem {
	href: string;
	icon: React.ReactNode;
	name: string;
	user: string;
	rel?: string;

	constructor(href: string, icon: React.ReactNode, name: string, user: string, rel?: string) {
		this.href = href;
		this.icon = icon;
		this.name = name;
		this.user = user;
		this.rel = rel;
	}
}