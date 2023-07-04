import React from "react";

export class SocialItem {
	constructor(
		public readonly href: string,
		public readonly icon: React.ReactNode,
		public readonly name: string,
		public readonly user: string,
	) {}
}