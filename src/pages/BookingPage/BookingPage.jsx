import emailjs from '@emailjs/browser';
import { Form, Input, Select, DatePicker, TimePicker, Button } from 'antd';
import { services } from '../../data/ServiceData'
import './BookingPage.css'
const { Option } = Select;

function BookingPage() {

    {/*Ham de gui mail ve user */}
    const onFinish = async (values) => {
    try {
        await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
            name: values.name,
            user_email: values.email, // 👈 QUAN TRỌNG
            service: values.service,
            date: values.date.format('DD/MM/YYYY'),
            time: values.time.format('HH:mm'),
        },
        'YOUR_PUBLIC_KEY'
        );

        alert('Đã gửi email xác nhận!');
    } catch (err) {
        console.error(err);
        alert('Gửi thất bại');
    }
    };

  return (
    <div className = 'booking-container' >
      <h1>Đặt lịch</h1>
      <h2>Quý Khách vui lòng cho biết thông tin</h2>
      <Form 
        layout='vertical'
        onFinish={onFinish}
        className= 'booking-form'
      >

        <Form.Item
          label='Họ và tên'
          name='name'
          rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label='Số điện thoại'
          name='phone'
          rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label = 'Email'
          name = 'email'
          rule={[
            {required: true, message: 'Vui lòng nhập Email!'},
            { type: 'email', message: 'Email không hợp lệ' }
          ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
          label = 'Tổng số Khách'
          name = 'size'
          rules = {[{required: false, message: 'Tổng số khách cần phục vụ nếu có'}]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Dịch vụ"
          name="service"
          rules={[{ required: true }]}
        >
            <Select
                placeholder="Chọn dịch vụ"
                options={services.map(s => ({
                value: s.title,
                label: s.title
                }))}
            />
        </Form.Item>

        {/* Date */}
        <Form.Item
          label="Ngày"
          name="date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        {/* Time */}
        <Form.Item
          label="Giờ"
          name="time"
          rules={[{ required: true }]}
        >
          <TimePicker style={{ width: '100%' }} format="HH:mm" />
        </Form.Item>

        {/* Note */}
        <Form.Item
          label="Ghi chú"
          name="note"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        {/* Submit */}
        <Button type="primary" htmlType="submit" block>
          Đặt lịch ngay
        </Button>
      </Form>
    </div>
  );
}

export default BookingPage;