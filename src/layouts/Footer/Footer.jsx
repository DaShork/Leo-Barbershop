import Logo from '../../assets/Leo_Barber.png';

function Footer () {
    return (
        <div className= 'footer-container'>
            <img src = {Logo} alt = 'Leo Barbershop' className = 'footer-logo' />
            <br/>
            <h2>Thời gian làm việc</h2>
            <p>
                Thứ 2 - Thứ 6: 9h00 - 21h00 <br/>
                Thứ 7 - Chủ nhật: 9h00 - 19h00
            </p>
            
            <br/>

            <h2>Địa chỉ</h2>
            <p>
                CN 1: 36 Tân Kì Tân Quý, Quận Tân Phú TP.HCM <br/>
                CN 2: 15 Tân Kì Tân Quý, Quân Tân Phú TP..HCM
            </p>

            <br/>

            <h2>Thông tin liên lạc</h2>
            <p>
                SĐT: 090 843 1233 <br/>
                Địa chỉ email: <br/>
                huybap2408@gmail.com
            </p>

            <br/>

            <h2>Phương thức thanh toán</h2>
            <p>aaaaa</p>
        
            <br/>

            <h2>Liên kết</h2>
            <li>
                <a href = '#'>Dịch vụ</a> <br/>
                <a href = '#'>Cửa hàng</a> <br/>
                <a href = '#'>Tin tức</a> <br/>
                <a href = '#'>Khóa học</a> <br/>
            </li>

            <br/>

            <h2>Quyền và chính sách</h2>
            <p>
                Điều khoản dịch vụ <br/>
                Chính sách bảo mật <br/>
                Chính sách thanh toán <br/>
            </p>

            <div className = 'copyright'>
                <p>&copy; 2026 Võ Nhật Minh - Leo Barbershop Project. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer