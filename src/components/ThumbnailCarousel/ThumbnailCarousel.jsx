import styles from './ThumbnailCarousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import React, { Children, useEffect, useState } from 'react';

export function ThumbnailCarousel({ children }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return <div className={styles.container}>
		<Swiper 
        className={styles.carousel}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        >
			{Children.map(children, child =>
                <SwiperSlide>
                    {child}
                </SwiperSlide>
            )}
		</Swiper>
        <div className={styles.thumbsContainer}>
            <Swiper 
            onSwiper={setThumbsSwiper}
            direction={'vertical'}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className={styles.thumbs}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    direction: 'horizontal',
                },
                500: {
                    slidesPerView: 3,
                    direction: 'horizontal',
                },
                768: {
                    slidesPerView: 4,
                    direction: 'vertical',
                },
            }}
            >
                {Children.map(children, child =>
                    <SwiperSlide>
                        {React.cloneElement(child, { thumb: true })}
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    </div>;
}
