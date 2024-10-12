import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import carousel1 from '/images/carousel1.jpg'
import carousel2 from '/images/carousel2.jpg'
import carousel3 from '/images/carousel3.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className='px-4 py-6 container mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={carousel1} text={'Get Your Web Development Project Done in Minutes'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={carousel2} text={'Get Your Graphic Design Project Done in Minutes'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={carousel3} text={'Get Your digital Marketing Project Done in Minutes'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}