export default function umamiTrack(name: string, options: unknown) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	window.umami.track(name, {...options});
}