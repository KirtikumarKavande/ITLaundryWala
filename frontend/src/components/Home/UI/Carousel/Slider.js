import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to update screen size status
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Set true if screen width >= 1024px
    };

    // Check screen size on component mount and window resize
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
    };
  }, []);

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
      modules={[Autoplay]}
      className="mySwiper"
      style={{ height: '435px', zIndex: '-10' }}
    >
      {/* Render slides conditionally based on screen size */}
      {isLargeScreen ? (
        <>
          <SwiperSlide><img src="/slider/washnew.jpg" alt="KFC" style={{height: '435px', width: '100%'}} /></SwiperSlide>
          <SwiperSlide><img src="/slider/off.png" alt="KFC" style={{height: '435px', width: '100%'}} /></SwiperSlide>
        </>
      ) : (
        <>
          <SwiperSlide><img src="/slider/Website Design 02.png" alt="KFC" style={{height: '420px', }} className='w-screen' /></SwiperSlide>
          <SwiperSlide><img src="/slider/Website Design 02.png" alt="KFC" style={{height: '420px', }} className='w-screen' /></SwiperSlide>
        </>
      )}
    </Swiper>
  );
};

export default Slider;
