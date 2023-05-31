import { SwiperSlide } from "swiper/react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Image } from "../Text";
import { useTranslation } from "react-i18next";
import servicesList from "./services-list";
import Swiper from "../swiper/Swiper";

export default function ServicesList() {
	const services = servicesList();
	const {t} = useTranslation("common");

	return (
		<Swiper>
			{services.map(service => (
				<SwiperSlide key={service.id}>
					<Grid item key={service.title} xs={12} sm={9} md={6}>
						<Card sx={{p: "1rem", backgroundColor: "background.default"}}>
							<Image
								src={`/media/service/${service.id}.webp`}
								alt={`${t("service.imageAlt")} ${service.title}`}
								width={"100%"}
								sx={{padding: "1rem"}}
							/>

							<CardHeader title={service.title} titleTypographyProps={{align: "center"}} />
							<CardContent>
								<Box
									sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "baseline", mb: 2}}>
									<Typography component="p" className="service-teaser">
										{service.teaser}
									</Typography>
									<Typography component="p" className="service-description">
										{service.description}
									</Typography>
								</Box>
								<ul>
									{service.features.map(line => (
										<Typography component="li" variant="subtitle1" key={line}>
											{line}
										</Typography>
									))}
								</ul>
							</CardContent>
							<CardActions>
								<Button fullWidth variant={"outlined"} href={service.href}>
									{t("service.learnMore")}
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
