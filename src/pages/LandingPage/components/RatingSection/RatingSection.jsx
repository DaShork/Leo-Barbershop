import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Rate } from 'antd';

import { reviews } from '/src/data/RatingData';


function RatingSection () {
    return (
        <div className = 'rating-container'>
            <h2>Chất lượng là thước đo chuẩn nhất</h2>
            <h1 className = 'rating-title'>Đánh giá</h1>
            <p> Nhận xét và đánh giá từ các khách hàng, học viên thực tế</p>

            <div className = 'rating-carosel'>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                loop
            >
            {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                <div className="review-card">
                    
                    <img src={item.avatar} className="avatar" />

                    <h3>{item.name}</h3>

                    <p>{item.comment}</p>

                    <Rate 
                    disabled 
                    allowHalf 
                    defaultValue={item.rating} 
                    />

                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            </div>
        </div>
    );
}

export default RatingSection