import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import usePackages from '../../hooks/usePackages';
import { Link } from 'react-router-dom';

const TourTypeSlider = () => {
    const [ packages ] = usePackages();
    
    return (
        <div className="bg-contain" style={{ backgroundImage: "url('https://www.trawell.in/blog/wp-content/uploads/2017/02/Kerala_Main.jpg')" }} >
            <Swiper
                slidesPerView={ 5 }
                spaceBetween={ 10 }
                freeMode={ true }
                pagination={ {
                    clickable: true,
                } }
                modules={ [ FreeMode, Pagination ] }
                className="mySwiper max-w-screen-xl mx-auto "
            >
               
                {
                    packages.map(item =><SwiperSlide key={item._id}>
                        <Link to={`/tour-type/${item.tourType}`}><div className="w-28 h-28 border-2 bg-opacity-70 bg-black text-white border-white rounded-full text-center overflow-hidden flex items-center justify-center my-20 mx-2">
                            <h1 className='text-lg font-semibold'>{ item.tourType }</h1>
                        </div></Link>
                    </SwiperSlide>)
                }
            
            </Swiper>
        </div>
    );
};

export default TourTypeSlider;