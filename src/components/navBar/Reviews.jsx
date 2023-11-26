import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import ReviwCard from '../ReviwCard';


const Reviews = () => {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ReviwCard name='Emily Johnson'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Alex Rodriguez'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Sophie Lee'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Raj Patel'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Isabella Martinez'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='William Turner'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Lila Wang'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Miguel Gomez'/></SwiperSlide>
        <SwiperSlide><ReviwCard name='Aisha Khan'/></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Reviews;