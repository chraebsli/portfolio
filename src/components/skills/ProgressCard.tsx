import React, { useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Card, Grid, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SubSectionTitle } from "../common/Text";

type Props = {
	size: {
		xs: number;
		sm: number
	},
	icon: typeof SvgIcon,
	name: string,
	children: React.ReactNode
}
export default function ProgressCard({size, icon, name, children}: Props) {
	const isSmall = useMediaQuery(useTheme().breakpoints.down("sm"));
	const [expanded, setExpanded] = React.useState<boolean>(!isSmall);

	const handleChange = () => setExpanded(!expanded);

	useEffect(() => { setExpanded(!isSmall); }, [isSmall, setExpanded]);

	return (
		<Grid item xs={size.xs} sm={size.sm}>
			<Card id={`skills-${name}`} sx={{padding: "0rem"}}>
				<Accordion expanded={expanded} onChange={isSmall ? handleChange : () => {return;}}>
					<AccordionSummary
						expandIcon={isSmall ? <ExpandMoreIcon /> : null}
						aria-controls={`panel-${name}-bh-content`}
						id={`panel-${name}-bh-header`}>
						<SubSectionTitle>
							<> {icon} {name} </>
						</SubSectionTitle>
					</AccordionSummary>
					<AccordionDetails>
						{children}
					</AccordionDetails>
				</Accordion>
			</Card>
		</Grid>
	);
}
