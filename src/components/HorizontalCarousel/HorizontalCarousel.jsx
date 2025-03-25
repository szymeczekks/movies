import { Children } from 'react';
import styles from './HorizontalCarousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export function HorizontalCarousel({children, type = null, slidesPerView = 'auto', breakpoints = {}}) {
    return <Swiper
        className={['wrapper', styles.carousel, type ? styles[type] : ''].join(' ')}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        onSlideChange={(swiper) => {}}
        breakpoints={breakpoints}
    >
        {Children.map(children, child =>
            <SwiperSlide>
                {child}
            </SwiperSlide>
        )}
    </Swiper>
}