import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { services } from '/src/data/ServiceData.js';

function ServiceSection() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      loop={true}
    >
      {services.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ServiceSection;