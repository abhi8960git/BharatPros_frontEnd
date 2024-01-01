import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Swipe(props) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper rounded-md  w-full"
      >
        <SwiperSlide className='border-z-10 h-[30px] '>
          <img src={props.photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.photo4}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}