export default function umamiTrack(name: string, options: any) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	window.umami.track(name, {...options});
}