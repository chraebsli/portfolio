type Props = {
	url?: string
}
export default function WakaTimeBadge({url}: Props) {
	return (
		<a href={url}>
			<img src={`${url}.svg`} alt="wakatime badge" />
		</a>
	);
}
