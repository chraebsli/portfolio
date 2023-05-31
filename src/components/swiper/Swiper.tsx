import React from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper as ReactSwiper } from "swiper/react";

type Props = {
	children?: React.ReactNode;
}
export default function Swiper({children}: Props) {
	return (
		<ReactSwiper
			slidesPerView={"auto"}
			spaceBetween={30}
			loop={true}
			pagination={{clickable: true}}
			navigation={true}
			mousewheel={true}
			autoplay={{delay: 10000, disableOnInteraction: false}}
			modules={[Mousewheel, Autoplay, Pagination, Navigation]}
			className="services-carousel"
		>
			{children}
		</ReactSwiper>
	);
}
