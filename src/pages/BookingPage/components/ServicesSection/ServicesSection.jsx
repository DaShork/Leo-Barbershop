import { Form, Select } from 'antd';
import { services } from '../../../../data/ServiceData';
import './ServicesSection.css';

function ServicesSection() {
  return (
    <div className="services-section">
      <h3 className="section-title">Chọn dịch vụ</h3>
      <p className="section-label">Chọn chỉ những <span className="required-mark">*</span></p>

      <Form.Item
        name="service"
        rules={[{ required: true, message: 'Vui lòng chọn dịch vụ!' }]}
        className="no-label"
      >
        <Select
          placeholder="Chọn dịch vụ"
          options={services.map(s => ({
            value: s.title,
            label: s.title
          }))}
        />
      </Form.Item>
    </div>
  );
}

export default ServicesSection;
