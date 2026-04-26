import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getImage } from '/src/utils/getImage.js';

import { services } from '/src/data/ServiceData.js';
import './ServiceSection.css'

function ServiceSection() {
  return (
    <div className = 'service-container'>
      <h1>Dịch vụ</h1>
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
              <img src={getImage(item.img)} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default ServiceSection;