import { SwiperSlide } from "swiper/react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import Tag from "../projects/Tag";
import { Image } from "../Text";
import { useTranslation } from "react-i18next";
import projectsList from "./projects-list";
import Swiper from "../swiper/Swiper";

export default function ProjectsList() {
	const projects = projectsList();
	const {t} = useTranslation("common");

	return (
		<Swiper>
			{projects?.map(project => (
				<SwiperSlide key={project.id}>
					<Grid item key={project.title} xs={12} sm={9} md={6}>
						<Card sx={{p: "1rem"}}>
							<Image
								src={`/media/project/${project.id}.webp`}
								alt={`${t("project.imageAlt")} ${project.title}`}
								width={"100%"}
								sx={{padding: "1rem"}}
							/>

							<CardHeader title={project.title} titleTypographyProps={{align: "center"}} />
							<CardContent>
								<Stack gap={1} direction={"row"} sx={{mb: "1rem"}}>
									{project.tags.map(tag => <Tag name={tag} key={tag} />)}
								</Stack>
								<Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "baseline", mb: 2}}>
									<Typography component="p" className="project-description" variant="body1" color="text.primary">
										{project.description}
									</Typography>
								</Box>
							</CardContent>
							<CardActions>
								<Button fullWidth variant={"outlined"} href={project.href}>
									{t("project.learnMore")}
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
