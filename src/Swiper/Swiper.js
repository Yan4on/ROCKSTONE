import { Swiper, SwiperSlide } from 'swiper/react';
import CreatePost from '../CreateMessage/CreateMessage';
import TimePage from '../Time/Time';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        className="container">
        <SwiperSlide>
            <CreatePost/>
        </SwiperSlide>
        
        <SwiperSlide>
            <TimePage/>
        </SwiperSlide>
        
      </Swiper>
    );
  };