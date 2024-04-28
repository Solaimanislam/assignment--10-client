import slide1 from "../../../../public/image/s2.jpeg" ;
import slide2 from "../../../../public/image/s1.jpg" ;
import slide3 from "../../../../public/image/s3.jpeg" ;
import slide4 from "../../../../public/image/s4.webp" ;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectFlip } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            className="lg:mt-0 -z-30"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
            spaceBetween={50}
            effect="flip"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={slide1} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default Slider;