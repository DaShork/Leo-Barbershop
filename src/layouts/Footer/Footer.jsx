import Logo from '../../assets/Leo_Barber.png';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import { getImage } from '/src/utils/getImage.js';

import './Footer.css';

function Footer () {
    return (
        <footer className= 'footer-container'>
            <div className = 'footer-content'>
                <div className = 'work-hour' >
                    <img src = {Logo} alt = 'Leo Barbershop' className = 'footer-logo' />
                    <br/>
                    <h2>Thời gian làm việc</h2>
                    <br/>
                    <p>
                        Thứ 2 - Thứ 6: 9h00 - 21h00 <br/>
                        Thứ 7 - Chủ nhật: 9h00 - 19h00
                    </p>
                    <br/>

                    <h2>Địa chỉ</h2>
                    <br/>

                    <p>
                        CN 1: 36 Tân Kì Tân Quý, Quận Tân Phú TP.HCM <br/>
                        CN 2: 15 Tân Kì Tân Quý, Quân Tân Phú TP..HCM
                    </p>
                </div>

                <div className = 'contact-detail'>
                    <h2>Thông tin liên lạc</h2>
                    <br/>

                    <p>
                        SĐT: 090 843 1233 <br/>
                        Địa chỉ email: <br/>
                        huybap2408@gmail.com
                    </p>
                    <br/>
                    
                    <span className='social-icon'><FacebookOutlined /></span>
                    <span className='social-icon'><InstagramOutlined /></span>
                    <span className='social-icon'><YoutubeOutlined /></span>
                    <br/>
                    
                    <h2>Phương thức thanh toán</h2>
                    <br/>
                    <img src ={getImage('/images/payment/mastercard.svg')} alt = 'Mastercard' className = 'payment-logo' />
                    <img src ={getImage('/images/payment/paypal.svg')} alt = 'Paypal' className = 'payment-logo' />
                    <img src ={getImage('/images/payment/visa.svg')} alt = 'Visa' className = 'payment-logo' />


                </div>


                <div className = 'link-nav'> 
                    <h2>Liên kết</h2>
                    <br/>
                    
                    <ul className="link-list">
                    <li><a href="#">Dịch vụ</a></li>
                    <li><a href="#">Cửa hàng</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Khóa học</a></li>
                    </ul>
                </div>

                <div className = 'policy'>
                    <h2>Quyền và chính sách</h2>
                    <br/>
                    
                    <p>
                        Điều khoản dịch vụ <br/>
                        Chính sách bảo mật <br/>
                        Chính sách thanh toán <br/>
                    </p>
                </div>
            </div>

            <small className = 'copyright'>
                <p>&copy; 2026 Võ Nhật Minh - Leo Barbershop Project. All rights reserved.</p>
            </small>
        </footer>
    )
}

export default Footer