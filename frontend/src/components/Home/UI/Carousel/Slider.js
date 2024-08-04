import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // Remove the navigation prop
      modules={[Autoplay]} // Remove Navigation from modules
      className="mySwiper"
      style={{ height: '435px', zIndex: '-10' }}
    >
      <SwiperSlide><img src="/slider/washnew.jpg" alt="KFC" style={{height: '435px', width: '100%', }} /></SwiperSlide>

      <SwiperSlide><img src="/slider/kfc.jpg" alt="KFC" style={{height: '435px', width: '100%', }} /></SwiperSlide>
      <SwiperSlide><img src="/slider/washnew.jpg" alt="KFC" style={{height: '435px', width: '100%', }} /></SwiperSlide>
      <SwiperSlide><img src="/slider/off.png" alt="KFC" style={{height: '435px', width: '100%', }} /></SwiperSlide>
      <SwiperSlide><img src="/slider/new1.svg" alt="KFC" style={{height: '435px', width: '100%', objectFit: 'cover'}} /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;