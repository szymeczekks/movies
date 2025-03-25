import styles from "./HeroCarousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Hero } from "../Hero/Hero";
import { useState } from "react";

export function HeroCarousel({movies}) {
    const [activeSlide, setActiveSlide] = useState(0);
    return <Swiper
    className={styles.heroCarousel}
    navigation={true}
    modules={[Navigation]}
    spaceBetween={0}
    slidesPerView={1}
    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    { movies.map( (movie, index) => {
        return <SwiperSlide key={movie.id}><Hero movie={movie} isActive={activeSlide === index}/></SwiperSlide>
    })}
  </Swiper>;
}