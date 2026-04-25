import { getImage } from '/src/utils/getImage.js';
import './Introduction.css';

function Introduction() {
    return (
        <div className = 'intro-container'>
            <div className = 'intro'>
                <h2>Chào mừng đên Leo Barber</h2>
                <h1>GIỚI THIỆU</h1>
                <p>Chào mừng bạn đến với Leo Barbershop, nơi không chỉ đơn thuần là cắt tóc,
                mà là nơi chúng tôi kiến tạo nên phong cách và sự tự tin cho phái mạnh.</p>
            </div>
            <div className = 'intro-img'>
                <img src={getImage('/images/model1.jpg')} alt='Leo Barbershop' className='intro-img'/>
                <img src={getImage('/images/model2.jpg')} alt='Leo Barbershop' className='intro-img'/>
            </div>       
        </div>
    )
}

export default Introduction