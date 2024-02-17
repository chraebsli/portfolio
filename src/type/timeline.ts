export class TimelineItem {
	constructor(
		public readonly from: string,
		public readonly to: string,
		public readonly type: string,
		public readonly company: string,
	) {}
}