import { Form, Input } from 'antd';
import './CustomerInfoForm.css';

function CustomerInfoForm() {
  return (
    <div className="customer-info-section">
      <h1 className="section-title">Đặt lịch</h1>
      <h2 className="section-subtitle">Quý khách vui lòng cho biết thông tin</h2>
      <p className="required-note">
        <span className="required-mark">*</span> 
        Các thông tin này là bắt buộc vui lòng không để trống!
      </p>

      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
      >
        <Input placeholder="Họ và tên" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập Email!' },
          { type: 'email', message: 'Email không hợp lệ' }
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Tổng số khách"
        name="size"
        rules={[{ required: true, message: 'Vui lòng nhập tổng số khách!' }]}
      >
        <Input type="number" placeholder="1" min="1" />
      </Form.Item>

      <Form.Item
        label="Ghi chú"
        name="customerNotes"
        rules={[{ required: false, message: 'Bạn có điều gì cần lưu ý cho chúng tôi không?' }]}
      >
        <Input placeholder="Ghi Chú" />
      </Form.Item>
    </div>
  );
}

export default CustomerInfoForm;
