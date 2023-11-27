/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';


const Slider = ( { images } ) => {
    
    const {imageFour, imageOne, imageTwo, imageThree, spotPhoto, tourType, tripTitle, price,}=images

    return (
        <div className=''>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <img className='md:h-[500px] md:w-full' src={ imageFour } />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[500px] md:w-full' src={imageOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[500px] md:w-full' src={imageTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[500px] md:w-full' src={imageThree} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[500px] md:w-full' src={spotPhoto} />
        </SwiperSlide>
      </Swiper>
    

        </div>
    );
};

export default Slider;