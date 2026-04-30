import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Rate } from 'antd';
import { getImage } from '/src/utils/getImage.js';

import { reviews } from '/src/data/RatingData';
import './RatingSection.css'


function RatingSection () {
    return (
        <div className = 'rating-container'>
            <div className = 'rating-text'>
                <h2>Chất lượng là thước đo chuẩn nhất</h2>
                <h1 className = 'rating-title'>Đánh giá</h1>
                <p> Nhận xét và đánh giá từ các khách hàng, học viên thực tế</p>
            </div>
            <div className = 'rating-wrapper'>
                <div className = 'rating-carosel'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={2.5}
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                    >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id}>
                        <div className="review-card">
                            <div className = 'avt-container'>
                                <img src={getImage(item.avatar)} className="avatar" />
                            </div>
                            <div className = 'review-detail'>
                                <h3>{item.name}</h3>
                                <p>{item.comment}</p>
                                <Rate 
                                disabled 
                                allowHalf 
                                defaultValue={item.rating} 
                                />
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default RatingSection