import { Chip, Typography } from "@mui/material";
import { TagColors, Tags, Tags_TagColors } from "../../type/project-tag";

type Props = {
	name: Tags
}
export default function Tag({name}: Props) {
	const color = Tags_TagColors[name] as TagColors;

	return (
		<Chip
			variant="outlined"
			color={color}
			label={<Typography variant={"subtitle2"} color={"text.primary"}>{name}</Typography>}
		/>
	);
}
