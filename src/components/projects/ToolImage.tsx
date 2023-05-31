type Props = {
	name: string
}
export default function ToolImage({name}: Props) {
	return <img
		src={`https://img.shields.io/badge/${name}-black?style=for-the-badge&logo=${name}`}
		alt={name} />;
}
